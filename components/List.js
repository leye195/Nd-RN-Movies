import React from "react";
import styled from "styled-components/native";
const Container = styled.View`
  margin-top: 20px;
  margin-left: 10px;
`;
const List = ({ children }) => {
  return <Container>{children}</Container>;
};
export default List;
