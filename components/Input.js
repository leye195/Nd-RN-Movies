import React from "react";
import styled from "styled-components/native";
import propsType from "prop-types";
const Container = styled.View``;
const TextInput = styled.TextInput`
  color: white;
  font-size: 16px;
  padding: 10px;
  font-weight: 600;
`;
const Border = styled.View`
  border-color: #e3e3e3;
  border-width: 0.5px;
  width: 95%;
  margin: 0 auto;
`;
const Input = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <Container>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        placeholderTextColor={"rgba(255,255,255,0.7)"}
        returnKeyType={"search"}
      />
      <Border />
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
