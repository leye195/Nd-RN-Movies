import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { getImage } from "../api";
const Image = styled.Image`
  width: 120px;
  height: 180px;
  border-radius: 5px;
`;
const Poster = ({ title, posterImage }) => {
  return (
    <Image
      source={{
        uri: getImage(posterImage),
      }}
    />
  );
};
Poster.propTypes = {
  posterImage: propTypes.string,
};
export default Poster;
