import React from "react";
import styled from "styled-components/native";
import Slide from "../../components/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import Scroll from "../../components/Scroll";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import SliderContainer from "../../components/SliderContainer";
const Container = styled.View`
  padding: 5px;
`;
export default ({ loading, nowPlaying, popular, upcoming, navigation }) => {
  return (
    <Scroll loading={loading}>
      <SliderContainer>
        {nowPlaying.map((movie) => (
          <Slide
            key={movie.id}
            id={movie.id}
            title={movie.original_title}
            poster={movie.poster_path}
            backgroundImage={movie.backdrop_path}
            votes={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </SliderContainer>
      <Container>
        <HorizontalSlider title={"Popular Movies"}>
          {popular.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
        <Title title={"Coming Soon"} />
        <List>
          {upcoming.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              release={movie.release_date}
              overview={movie.overview}
            />
          ))}
        </List>
      </Container>
    </Scroll>
  );
};
