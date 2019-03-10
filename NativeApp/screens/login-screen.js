import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import TopBrand from "../components/login-screen/topbranding";
import LinearGradient from "react-native-linear-gradient";
import Snackbar from "react-native-snackbar";
import { TextField } from "react-native-material-textfield";
import { TextButton } from "react-native-material-buttons";

import socketConnection from '../components/socket';

export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super();
        this.state = {
            name: ""
        };
    }

    start = () => {
        this.props.navigation.navigate("Home", {name: this.state.name});
    };

    render() {
        return (
            <LinearGradient
              style={styles.container}
              colors={["#0080FB", "#5eb0ff", "#0080FB"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <TopBrand content="CrisisConnect" />
              <TextField
                label="Name"
                onChangeText={text => {
                    this.setState({ name: text });
                }}
                tintColor="white"
                textColor="white"
                baseColor="white"
                containerStyle={styles.inputfield}
              />
              <TextButton title="Get Started" titleColor="white" style={styles.connectbutton} onPress={this.start} />
              {/* <TouchableOpacity onPress={this.start}>
                 <LinearGradient
                 style={styles.connectbutton}
                 colors={["white", "white"]}
                 >
                 <Text style={styles.connecttext}>Get Started</Text>
                 </LinearGradient>
                 </TouchableOpacity> */}
            </LinearGradient>
        );
    }
}

const styles = {
    container: {
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        alignItems: "center"
    },
    inputfield: {
        width: "70%"
    },
    connectbutton: {
        marginTop: 20,
        width: "30%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
    connecttext: {
        color: "grey"
    }
};
