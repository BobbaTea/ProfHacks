from flask_socketio import SocketIO
import socketio
from InternetNode.app import app

flasksocketio = SocketIO(app)
sioclient = socketio.Client()

@sioclient.on('connect')
def on_connect():
    print("Connection established")


@sioclient.on("output-node new message")
def handle_new_message(payload):
    print("New Message from " + payload["name"] + " at " + payload['timestamp']
          + ": " + payload['data'] + "\n Geolocation data: "
          + str(payload['geolocation']) + "\n")


if __name__ == "__main__":
    sioclient.connect("http://10.42.0.1")
    sioclient.wait()
