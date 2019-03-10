from os import system as shell
from time import sleep
import socketio
from pymongo import MongoClient
from bson.json_util import dumps

import requests

messages = MongoClient()["crisisconnect"]["messages"]


def dump_to_server():
    requests.post("http://34.73.208.146/datadump", json=dumps(messages.find()))


dump_to_server()
