import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import TopBrand from "../components/login-screen/topbranding";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import Snackbar from "react-native-snackbar";
import socketConnection from '../components/socket';
import moment from 'moment';
import Geolocation from 'react-native-geolocation-service';

export default class Home extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            message: ""
        };
    }

    sendMessage = () => {
        var message = this.state.message;
        Geolocation.getCurrentPosition(
            (position) => {
                socketConnection.emit("middle-node new message", {name: this.props.navigation.getParam("name"), data: message, timestamp: moment().format("MMM Do YYYY, h:mm a"), geolocation: position});
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
        this.setState({ message: "" });
    };

    render() {
        var message = this.props.navigation.getParam("name");
        return (
            <LinearGradient
              style={styles.container}
              colors={["#0080FB", "#5eb0ff", "#0080FB"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <TopBrand content={message} />
              <View style={styles.row}>
                <TextInput
                  placeholder="Write something"
                  onChangeText={text => {
                      this.setState({ message: text });
                  }}
                  style={styles.inputfield}
                  value={this.state.message}
                  placeholderTextColor="white"
                />
                <TouchableOpacity onPress={this.sendMessage} style={{ width: "30%" }}>
                  <LinearGradient
                    style={styles.connectbutton}
                    colors={["white", "white"]}
                  >
                    <Icon name="md-send" />
                    <Text style={styles.connecttext}>Send Message</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </LinearGradient>
        );
    }
}

const styles = {
    container: {
        backgroundColor: "white",
        height: "100%",
        width: "100%"
    },
    inputfield: {
        marginLeft: 10,
        width: "70%"
    },
    row: {
        flexDirection: "row",
        width: "100%"
    },
    connectbutton: {
        marginLeft: 10,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        width: 100
    },
    connecttext: {
        color: "grey"
    }
};
