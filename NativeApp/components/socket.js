import SocketIOClient from 'socket.io-client';
import constants from './constants';
console.log("Attempting to establish server connection...");
socketConnection = SocketIOClient(constants.dragonIP, {transports: ['websocket']});
socketConnection.on('connect', () => {
    console.log(socketConnection);
});

socketConnection.emit("connection", {"type": "input-node"});
export default socketConnection;
