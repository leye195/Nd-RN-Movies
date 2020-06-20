import React, { useRef } from "react";
import { Text, View, Dimensions, PanResponder } from "react-native";
import styled from "styled-components/native";
import { getImage } from "../../api";
const { width, height } = Dimensions.get("window");
const Container = styled.View`
  padding-top: 50px;
  flex: 1;
  background-color: black;
  align-items: center;
`;
const Card = styled.View`
  position: absolute;
  height: ${height / 1.4}px;
  width: 90%;
  top: 50px;
`;
const Poster = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
`;
export default ({ fav }) => {
  const panResponder = useRef(PanResponder.create({})).current;
  return (
    <Container>
      {fav.discover.reverse().map((movie) => (
        <Card key={movie.id}>
          <Poster source={{ uri: getImage(movie.poster_path) }} />
        </Card>
      ))}
    </Container>
  );
};
