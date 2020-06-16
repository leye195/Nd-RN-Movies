import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
const Text = styled.Text`
  color: white;
  font-weight: 700;
  margin-left: 15px;
  font-size: 15px;
`;
const Title = ({ title }) => {
  return <Text>{title}</Text>;
};

Title.propTypes = {
  title: propTypes.string.isRequired,
};
export default Title;
