import React, { useState, useEffect, useLayoutEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";
import * as WebBrowser from "expo-web-browser";
export default ({ navigation, route: { params } }) => {
  const [detail, setDetail] = useState({
    title: params.title,
    poster_path: params.poster_path,
    vote_average: params.vote_average,
    overview: params.overview,
    backdrop_path: params.backgroundImage,
    release: params.release,
    videos: {
      results: [],
    },
    cast: [],
    loading: true,
  });
  const getData = async () => {
    const { id, type } = params;
    let [info, infoError] =
        type === "movie" ? await movieApi.movie(id) : await tvApi.show(id),
      [cast, castError] =
        type === "movie" ? await movieApi.credits(id) : await tvApi.credits(id);
    //params으로 들어온 데이터들을 api로 부터 받아온 data로 대체

    setDetail({
      ...info,
      loading: false,
      title: info.title || info.name,
      vote_average: info.vote_average,
      overview: info.overview,
      poster_path: info.poster_path,
      backdrop_path: info.backdrop_path,
      release: type === "movie" ? info.release_date : info.first_air_date,
      cast: cast.cast,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({ title: params.title });
  }, []);
  const openBrowser = (url) => async () => {
    const result = await WebBrowser.openBrowserAsync(url);
  };
  return (
    <DetailPresenter
      detail={detail}
      id={params.id}
      openBrowser={openBrowser}
      getData={getData}
    />
  );
};
