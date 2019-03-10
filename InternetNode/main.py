from flask_socketio import SocketIO
import socketio
from InternetNode.app import app
from os import system as shell
from pymongo import MongoClient
import requests

database = MongoClient()["crisisconnect"]
messages = database["messages"]


flasksocketio = SocketIO(app)
sioclient = socketio.Client()


@sioclient.on("connect")
def on_connect():
    print("Connection established")


@sioclient.on("output-node new message")
def handle_new_message(payload):
    print(
        "New Message from "
        + payload["name"]
        + " at "
        + payload["timestamp"]
        + ": "
        + payload["data"]
        + "\n Geolocation data: "
        + str(payload["geolocation"])
        + "\n"
    )
    messages.insert_one(payload)


@sioclient.on("dump")
def dump_to_server():
    shell("nmcli con up ProfHacks_2019")
    siodump = socketio.Client()
    siodump.connect("http://34.73.208.146")
    for i in messages.find():
        siodump.emit("server new message", i)
    shell("nmcli con up Crisis")


if __name__ == "__main__":
    sioclient.connect("http://10.42.0.1")
    sioclient.wait()
