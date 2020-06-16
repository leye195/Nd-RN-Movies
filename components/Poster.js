import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { getImage } from "../api";
import { GREY_COLOR } from "../constants/colors";
const Image = styled.Image`
  width: 120px;
  height: 180px;
  border-radius: 5px;
`;
const Empty = styled.View`
  width: 120px;
  height: 180px;
  border-radius: 5px;
  background-color: ${GREY_COLOR};
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
const Poster = ({ title, posterImage }) => {
  return posterImage !== null ? (
    <Image source={{ uri: getImage(posterImage) }} />
  ) : (
    <Empty>
      <Text>{title}</Text>
    </Empty>
  );
};
Poster.propTypes = {
  posterImage: propTypes.string,
};
export default Poster;
