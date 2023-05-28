import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Styles from "../style/Style";

const image = { uri: "assets/background.jpg" };
export default class Home extends React.Component {
  render() {
    return (
      <View style={Styles.view}>
        <ImageBackground
          source={require("./assets/background.jpg")}
          style={Styles.image}
          resizeMode="cover"
        >
          <View style={Styles.slogan}>
            <Text style={Styles.text}>Chose it,</Text>
            <Text style={Styles.text}>Launch it,</Text>
            <Text style={Styles.text}>GET IT !</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
