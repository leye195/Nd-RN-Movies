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
const TVPresenter = ({ loading, popular, topRated, today, thisWeek }) => {
  return (
    <Scroll loading={loading}>
      <ScrollContainer>
        {thisWeek.map((tv) => (
          <Slide
            key={tv.id}
            id={tv.id}
            title={tv.name}
            poster={tv.poster_path}
            backgroundImage={tv.backdrop_path}
            votes={tv.vote_average}
            overview={tv.overview}
          />
        ))}
      </ScrollContainer>
      <Container>
        <Title title={"Popular Shows"} />
        <HorizontalSlider>
          {popular.map((tv) => (
            <Vertical
              key={tv.id}
              id={tv.id}
              poster={tv.poster_path}
              title={tv.name}
              votes={tv.vote_average}
            />
          ))}
        </HorizontalSlider>
        <Title title={"TopRated"} />
        <HorizontalSlider>
          {topRated.map((tv) => (
            <Vertical
              key={tv.id}
              id={tv.id}
              poster={tv.poster_path}
              title={tv.name}
              votes={tv.vote_average}
            />
          ))}
        </HorizontalSlider>
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
            />
          ))}
        </List>
      </Container>
    </Scroll>
  );
};
export default TVPresenter;
