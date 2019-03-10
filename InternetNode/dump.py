from os import system as shell
from time import sleep
import socketio
from pymongo import MongoClient
from bson.json_util import dumps

import requests

messages = MongoClient()["crisisconnect"]["messages"]


def dump_to_server():
    # shell("nmcli con up ProfHacks_2019")
    # sleep(4)
    # siodump = socketio.Client()
    # siodump.connect("http://34.73.208.146")
    # for i in messages.find():
    #     print(dumps(i))
    #     siodump.emit("server new message", dumps(i))
    # shell("nmcli con up Crisis")
    requests.post("http://34.73.208.146/datadump", json=dumps(messages.find()))


dump_to_server()
