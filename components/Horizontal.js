import React from "react";
import styled from "styled-components/native";
import propsType from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { trimText, formatDate } from "../utills";
import { TouchableOpacity } from "react-native";
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
const Release = styled.Text`
  color: white;
  align-items: center;
  margin-bottom: 10px;
`;
const Horizontal = ({ id, title, release, poster, overview }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster posterImage={poster} />
        <Data>
          <Title>{title}</Title>
          {release ? <Release>🗓 {formatDate(release, "en-US")}</Release> : null}
          <Overview>{trimText(overview, 120)}</Overview>
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
