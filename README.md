# FakeAP
A phishing wireless hotspot built with Hostapd/Flask/MySQL.

Require
-------
* Linux (tested on Kali)
* Python 2.7


Install
-------
* `apt-get install hostapd mysql-server mysql-client`
* `git clone https://github.com/noScripts/FakeAP && cd FakeAP`
* `pip install -r requirements.txt`


Usage
-----
* Start AP: `python fakeap.py -h`
* Start phishing site: `cd server && uwsgi uwsgi.ini`


MySQL setup
-----------
* Create a database called `fakeap` in MySQL
* Edit MySQL connection in `server/web.py`
* `python manage.py db init`
* `python manage.py db migrate`
* `python manage.py db upgrade`

Wall of sheep 
---
`http://localhost/sheep`