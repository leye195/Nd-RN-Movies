import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MovieScreen from "../screens/Movie";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import FavScreen from "../screens/Fav";
import { Platform } from "react-native";
import { ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/colors";

const Tab = createBottomTabNavigator();
const getHeaderName = (state) => {
  if (state !== undefined) {
    return state.routeNames[state.index];
  }
  return "Movies";
};
export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderName(route.state),
    });
  }, [route]);
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
        component={MovieScreen}
        name="Movie"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === "ios" ? "ios-film" : "md-film"}
              size={26}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        component={TVScreen}
        name="TV"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
              size={26}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        component={SearchScreen}
        name="Search"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
              size={26}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        component={FavScreen}
        name="Favourite"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
              size={26}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
