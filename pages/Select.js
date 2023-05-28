import React from "react";
import { View, ImageBackground, Pressable, Text } from "react-native";
import Styles from "../style/Style";
import Menu from "../components/List";

function SelectMenu({ navigation }) {
  return (
    <View style={Styles.view}>
      <ImageBackground
        source={require("../assets/img/background.jpg")}
        style={Styles.image}
        resizeMode="cover"
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Menu />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? "rgba(159, 145, 88, 0.6)"
                  : "transparent",
              },
              Styles.button,
            ]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Next
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
export default SelectMenu;
