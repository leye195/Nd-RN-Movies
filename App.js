import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import { StyleSheet, Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/StackNavigation";
const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image); //미리 가져옴
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      require("./assets/splash.png"),
      "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
    ]);
    const fonts = cacheFonts([Ionicons.font, FontAwesome5.font]);
    return Promise.all([...images, ...fonts]);
  };
  const handleError = (error) => {
    console.log(error);
  };
  const handleLoaded = () => {
    setLoaded(true);
  };

  return loaded ? (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={handleLoaded}
      onError={handleError}
    />
  );
}
