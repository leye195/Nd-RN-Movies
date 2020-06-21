import React, { useEffect, useState } from "react";
import { movieApi, getImage } from "../../api";
import MoviePresenter from "./MoviePresenter";
export default ({ navigation }) => {
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    nowPlayingError: null,
    popular: [],
    popularError: null,
    upcoming: [],
    upcomingError: null,
    page: 1,
  });
  const getData = async (page = 1) => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upComing(page);
    setMovies({
      loading: false,
      nowPlaying,
      nowPlayingError,
      popular,
      popularError,
      upcoming: page > 1 ? [...movie.upcoming, ...upcoming] : upcoming,
      upcomingError,
      page: page > 1 ? page : 1,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const loadMore = async () => {
    getData(movies.page + 1);
  };
  return (
    <MoviePresenter
      {...movies}
      navigation={navigation}
      getData={getData}
      loadMore={loadMore}
    />
  );
};
