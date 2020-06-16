import React from "react";
import styled from "styled-components/native";
import { GREY_COLOR } from "../constants/colors";
const Votes = styled.Text`
  color: ${GREY_COLOR};
  opacity: 0.8;
  margin-bottom: 5px;
  font-size: 12px;
  align-items: center;
`;
export default ({ votes }) => <Votes>⭐ {votes} / 10</Votes>;
