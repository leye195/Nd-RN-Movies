import React from "react";
import { ScrollView } from "react-native";
const HorizontalSlider = ({ children }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginVertical: 20 }}
      contentContainerStyle={{
        flexDirection: "row",
        paddingLeft: 10,
      }}
    >
      {children}
    </ScrollView>
  );
};
export default HorizontalSlider;
