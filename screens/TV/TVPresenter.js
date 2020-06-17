import React from "react";
import styled from "styled-components/native";
import Scroll from "../../components/Scroll";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import Title from "../../components/Title";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import ScrollContainer from "../../components/SliderContainer";
import Slide from "../../components/Slide";
const Container = styled.View`
  padding: 5px;
  margin-top: 30px;
`;
const TVPresenter = ({
  loading,
  popular,
  topRated,
  today,
  thisWeek,
  getData,
  navigation,
}) => {
  return (
    <Scroll loading={loading} getData={getData}>
      <ScrollContainer>
        {thisWeek.map((tv) => (
          <Slide
            key={tv.id}
            id={tv.id}
            title={tv.name}
            release={tv.first_air_date}
            poster={tv.poster_path}
            backgroundImage={tv.backdrop_path}
            votes={tv.vote_average}
            overview={tv.overview}
            type="tv"
          />
        ))}
      </ScrollContainer>
      <Container>
        <HorizontalSlider
          title={"Popular Shows"}
          type="tv"
          contents={popular}
        />
        <HorizontalSlider title={"TopRated"} type="tv" contents={topRated} />
        <Title title={"Today's TV Show"} />
        <List>
          {today.map((tv) => (
            <Horizontal
              key={tv.id}
              id={tv.id}
              poster={tv.poster_path}
              title={tv.name}
              release={tv.first_air_date}
              overview={tv.overview}
              votes={tv.vote_average}
              backgroundImage={tv.backdrop_path}
              type={"tv"}
            />
          ))}
        </List>
      </Container>
    </Scroll>
  );
};
export default TVPresenter;
