#! /usr/bin/python
# coding=utf-8
import datetime
import os

dispatcher_host = ["hd-cx-03"]


def build():
    script_path = os.path.dirname(__file__)
    os.chdir(os.path.join(script_path, "../"))
    # os.system("quasar build")


def deploy():
    os.system("rm -rf ./docs")
    os.system("cp -a ./dist/spa/ ./docs")


if __name__ == "__main__":
    build()
    deploy()
    print("运行完毕，当前时间:" +
          datetime.datetime.strftime(datetime.datetime.now(), '%Y-%m-%d %H:%M:%S'))
