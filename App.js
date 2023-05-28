import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import SelectMenu from "./pages/Select";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Tattoo Roulette" }}
        />
        <Stack.Screen
          name="Selection"
          component={SelectMenu}
          options={{ title: "Tattoo Roulette" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
