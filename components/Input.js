import React from "react";
import styled from "styled-components/native";
import propsType from "prop-types";
const Container = styled.View`
  margin-top: 20px;
  margin-bottom: 40px;
`;
const TextInput = styled.TextInput`
  font-size: 16px;
  padding: 10px;
  margin: 0 20px;
  background-color: white;
  border-radius: 15px;
`;
const Input = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <Container>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        placeholderTextColor={"rgba(0,0,0,0.5)"}
        returnKeyType={"search"}
        autoCorrect={false}
      />
    </Container>
  );
};
Input.propsType = {
  placeholder: propsType.string.isRequired,
  value: propsType.string.isRequired,
  onChange: propsType.func.isRequired,
  onSubmit: propsType.func.isRequired,
};
export default Input;
