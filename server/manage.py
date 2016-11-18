# !/usr/bin/env python
#  -*- coding: utf-8 -*-
from flask_script import Manager, Server
from flask_script.commands import ShowUrls, Clean
from flask_migrate import Migrate, MigrateCommand

from web import app
from web import db, Wifi

migrete = Migrate(app, db)
manager = Manager(app)
manager.add_command("server", Server(host='0.0.0.0', port=80))
manager.add_command('url', ShowUrls())
manager.add_command('clean', Clean())
manager.add_command('db', MigrateCommand)


@manager.shell
def make_shell_context():
    return dict(app=app, db=db, Wifi=Wifi)


if __name__ == '__main__':
    manager.run()
