import React, { useState } from "react";
import propsType from "prop-types";
import { ScrollView, ActivityIndicator, RefreshControl } from "react-native";

const Scroll = ({ loading, getData, children }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };
  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start",
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={"white"}
        />
      }
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
