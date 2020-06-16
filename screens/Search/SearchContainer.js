import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";
export default () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({
    movies: [],
    tv: [],
    moviesError: null,
    tvError: null,
  });
  const handleOnChange = (text) => {
    setQuery(text);
  };
  const handleOnSubmit = async () => {
    if (query.length > 0) {
      const [movies, moviesError] = await movieApi.search(query);
      const [tv, tvError] = await tvApi.search(query);
      setResults({
        movies,
        moviesError,
        tv,
        tvError,
      });
    }
  };
  return (
    <SearchPresenter
      {...results}
      query={query}
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
    />
  );
};
