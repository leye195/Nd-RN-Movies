import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
const Text = styled.Text`
  font-weight: 800;
  color: white;
  margin-left: 5px;
`;

export default ({ onPress, text, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <FontAwesome5 name={icon} color="white" size={20} />
      <Text>{text} </Text>
    </Container>
  </TouchableOpacity>
);
