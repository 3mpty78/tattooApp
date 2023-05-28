import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import Styles from "../style/Style";

export default function Home({ navigation }) {
  return (
    <View style={Styles.view}>
      <ImageBackground
        source={require("../assets/img/background.jpg")}
        style={Styles.image}
        resizeMode="cover"
      >
        <View style={Styles.slogan}>
          <Text style={Styles.text}>Chose it,</Text>
          <Text style={Styles.text}>Launch it,</Text>
          <Text
            style={[
              Styles.text,
              { textDecorationLine: "underline", fontWeight: "bold" },
            ]}
          >
            GET IT !
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? "rgba(159, 145, 88, 0.6)"
                  : "transparent",
              },
              Styles.button,
            ]}
            onPress={() => navigation.navigate("Selection")}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Start
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
