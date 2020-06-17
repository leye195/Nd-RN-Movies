import React from "react";
import Scroll from "../../components/Scroll";
import Input from "../../components/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
const SearchPresenter = ({
  movies,
  tv,
  query,
  handleOnChange,
  handleOnSubmit,
}) => {
  return (
    <Scroll loading={false} getData={handleOnSubmit}>
      <Input
        value={query}
        placeholder={"Search Movie / TV"}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      />
      {movies.length > 0 ? (
        <HorizontalSlider
          title={"Movie Result"}
          type="movie"
          contents={movies}
        />
      ) : null}
      {tv.length > 0 ? (
        <HorizontalSlider title={"TV Result"} type="tv" contents={tv} />
      ) : null}
    </Scroll>
  );
};
export default SearchPresenter;
