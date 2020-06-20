import React from "react";
import styled from "styled-components/native";
import { ScrollView, View } from "react-native";
import Title from "./Title";
import Vertical from "./Vertical";
const Container = styled.View``;
const HorizontalSlider = ({ title, type, contents, children }) => {
  return (
    <Container>
      <Title title={title} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 20 }}
        contentContainerStyle={{
          flexDirection: "row",
          paddingLeft: 10,
        }}
      >
        {type === "movie"
          ? contents.map((movie) => (
              <Vertical
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                votes={movie.vote_average}
                overview={movie.overview}
                backgroundImage={movie.backdrop_path}
                release={movie.release_date}
                type={type}
              />
            ))
          : type === "tv"
          ? contents.map((tv) => (
              <Vertical
                key={tv.id}
                id={tv.id}
                poster={tv.poster_path}
                title={tv.name}
                votes={tv.vote_average}
                overview={tv.overview}
                backgroundImage={tv.backdrop_path}
                release={tv.first_air_date}
                type={type}
              />
            ))
          : contents}
      </ScrollView>
    </Container>
  );
};
export default HorizontalSlider;
