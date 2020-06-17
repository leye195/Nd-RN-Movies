import React, { useState, useEffect, useLayoutEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";
export default ({ navigation, route: { params } }) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({
    title: params.title,
    poster_path: params.poster_path,
    vote_average: params.vote_average,
    overview: params.overview,
    backdrop_path: params.backgroundImage,
    release: params.release,
  });
  const getData = async () => {
    const { id, type } = params;
    let info = {};
    if (type === "movie") {
      info = await movieApi.movie(id);
    } else {
      info = await tvApi.show(id);
    }
    //params으로 들어온 데이터들을 api로 부터 받아온 data로 대체
    setDetail({
      ...info[0],
      loading: false,
      title: type === "movie" ? info[0].title : info[0].name,
      vote_average: info[0].vote_average,
      overview: info[0].overview,
      poster_path: info[0].poster_path,
      backdrop_path: info[0].backdrop_path,
      release: type === "movie" ? info[0].release_date : info[0].first_air_date,
    });
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({ title: params.title });
  }, []);

  return <DetailPresenter {...detail} loading={loading} />;
};
