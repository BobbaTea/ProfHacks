import React from "react";
import { View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
export default class TopBrand extends React.Component {
  render() {
    return (
      <View
        style={styles.wrapperview}
      >
        <Text style={styles.logoText}>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = {
  wrapperview: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "white",
    fontSize: 40,
  }
};
