pkill httpd
source /home/xy/learn_flask/bin/activate
nohup uwsgi uwsgi.ini &
nohup uwsgi uwsgi_443.ini &
