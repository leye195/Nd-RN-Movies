import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { getImage } from "../api";
import { Platform } from "react-native";
const Image = styled.Image`
  width: ${(props) => (props.isWeb ? "180px" : "120px")};
  height: ${(props) => (props.isWeb ? "220px" : "180px")};
  border-radius: 5px;
`;
const Poster = ({ title, posterImage }) => {
  return (
    <Image
      isWeb={Platform.OS === "web"}
      source={{
        uri: getImage(posterImage),
      }}
      resizeMode={"stretch"}
    />
  );
};
Poster.propTypes = {
  posterImage: propTypes.string,
};
export default Poster;
