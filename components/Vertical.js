import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";
import { trimText } from "../utills";
import { useNavigation } from "@react-navigation/native";
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
const Vertical = ({
  id,
  poster,
  title,
  votes,
  overview,
  type,
  backgroundImage,
  release,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          id,
          type,
          title,
          poster_path: poster,
          vote_average: votes,
          overview,
          backgroundImage,
          release,
        })
      }
    >
      <Container>
        <Poster posterImage={poster} title={title} />
        <Title>{trimText(title, 15)}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};
Vertical.propTypes = {
  poster: propTypes.string,
  title: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
};
export default Vertical;
