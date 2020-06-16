import React from "react";
import { Text, View } from "react-native";
export default ({ fav }) => {
  return (
    <View>
      <Text>{fav.discover.length}</Text>
    </View>
  );
};
