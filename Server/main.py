from flask import Flask, render_template
from flask_socketio import SocketIO
from pymongo import MongoClient

app = Flask(__name__)
socketio = SocketIO(app)
messages = MongoClient()["crisisconnect"]["messages"]


@app.route("/")
def index():
    return render_template("dash.html")


@app.route("/datadump")
def takebigshit():
    return str(list(messages.find()))


@socketio.on("server new message")
def accept_new_message(payload):
    messages.insert_one(payload)
    socketio.emit('frontend new message', payload)


if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port="80")
