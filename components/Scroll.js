import React from "react";
import propsType from "prop-types";
import { ScrollView, ActivityIndicator } from "react-native";

const Scroll = ({ loading, children }) => {
  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? <ActivityIndicator /> : <>{children}</>}
    </ScrollView>
  );
};
Scroll.propsType = {
  loading: propsType.bool.isRequired,
  children: propsType.oneOfType([
    propsType.arrayOf(propsType.node),
    propsType.node,
  ]),
};
export default Scroll;
