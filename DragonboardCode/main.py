from flask_socketio import SocketIO
from DragonboardCode.app import app
from flask import json

socketio = SocketIO(app)


@app.route("/")
def index():
    print("A goon is viewing the page...")
    return "GOON"


@socketio.on("connection")
def handle_new_connection(payload):
    print("New connection!" + str(payload))


@socketio.on("middle-node new message")
def accept_new_message(payload):
    print("New Message from " + payload["name"] + " at " + payload['timestamp']
          + ": " + payload['data'] + "\n Geolocation data: "
          + str(payload['geolocation']) + "\n")
    socketio.emit('output-node new message',  payload, broadcast=True)


if __name__ == "__main__":
    socketio.run(app)
