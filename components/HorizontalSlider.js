import React from "react";
import { ScrollView } from "react-native";
import Title from "./Title";
const HorizontalSlider = ({ title, children }) => {
  return (
    <>
      <Title title={title} />
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
    </>
  );
};
export default HorizontalSlider;
