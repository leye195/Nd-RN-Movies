import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";
import { trimText } from "../utills";
const Container = styled.View`
  padding: 5px;
  align-items: center;
`;
const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Vertical = ({ id, poster, title, votes }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster posterImage={poster} />
        <Title>{trimText(title, 15)}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};
Vertical.propTypes = {
  poster: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
};
export default Vertical;
