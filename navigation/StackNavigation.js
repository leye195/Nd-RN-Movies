import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor: "black",
        shadowColor: "black",
      },
      headerTintColor: "white",
      headerBackTitleVisible: false,
      gestureEnabled: false,
    }}
    mode="card"
    g
  >
    <Stack.Screen component={Tabs} name="Movies" />
    <Stack.Screen component={DetailScreen} name="Detail" />
  </Stack.Navigator>
);
