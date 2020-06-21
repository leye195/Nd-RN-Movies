import React, { useEffect, useState, useLayoutEffect } from "react";
import { tvApi, getImage } from "../../api";
import SeasonPresenter from "./SeasonPresenter";
const SeasonContainer = ({ navigation, route: { params } }) => {
  const [season, setSeason] = useState({
    loading: true,
  });
  const getData = async () => {
    const { id, number } = params;
    const [season, seasonError] = await tvApi.season(id, number);
    setSeason({
      loading: false,
      ...season,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({ title: params.title });
  }, []);

  return <SeasonPresenter season={season} getData={getData} />;
};
export default SeasonContainer;
