import React from "react";
import styled from "styled-components/native";
import propsType from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { trimText, formatDate } from "../utills";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Release from "./Release";

const Container = styled.View`
  padding: 5px;
  margin-bottom: 20px;
  flex-direction: row;
`;
const Data = styled.View`
  flex: 0.95;
  margin-left: 20px;
  margin-right: 20px;
`;
const Title = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 10px;
`;
const Overview = styled.Text`
  color: white;
`;
const Horizontal = ({
  id,
  title,
  release,
  poster,
  votes,
  overview,
  type,
  backgroundImage,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      id,
      type,
      title,
      poster_path: poster,
      vote_average: votes,
      overview,
      backgroundImage,
    });
  };
  return (
    <TouchableOpacity onPress={type !== "season" ? goToDetail : () => {}}>
      <Container>
        <Poster posterImage={poster} title={title} />
        <Data>
          <Title>{title}</Title>
          {release ? <Release release={release} /> : null}
          <Overview>{trimText(overview, 100)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};
Horizontal.propsType = {
  id: propsType.string.isRequired,
  title: propsType.string.isRequired,
  poster: propsType.string.isRequired,
  release: propsType.string,
  overview: propsType.string.isRequired,
};
export default Horizontal;
