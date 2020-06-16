import React from "react";
import styled from "styled-components/native";
import Scroll from "../../components/Scroll";
import Input from "../../components/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
const SearchPresenter = ({
  movies,
  tv,
  query,
  handleOnChange,
  handleOnSubmit,
}) => {
  return (
    <Scroll>
      <Input
        value={query}
        placeholder={"Search Movie / TV"}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      />
      {movies.length > 0 ? (
        <HorizontalSlider title={"Movie Result"}>
          {movies.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
      ) : null}
      {tv.length > 0 ? (
        <HorizontalSlider title={"TV Result"}>
          {tv.map((t) => (
            <Vertical
              key={t.id}
              id={t.id}
              poster={t.poster_path}
              title={t.name}
              votes={t.vote_average}
            />
          ))}
        </HorizontalSlider>
      ) : null}
    </Scroll>
  );
};
export default SearchPresenter;
