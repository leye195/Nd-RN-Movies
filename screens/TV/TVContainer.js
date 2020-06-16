import React, { useEffect, useState } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";
export default ({ navigation }) => {
  const [tv, setTV] = useState({
    loading: true,
    today: [],
    todayError: null,
    popular: [],
    popularError: null,
    topRated: [],
    topRatedError: null,
    thisWeek: [],
    thisWeekError: null,
  });
  const getData = async () => {
    const [popular, popularError] = await tvApi.popular();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [today, todayError] = await tvApi.today();
    setTV({
      loading: false,
      popular,
      popularError,
      thisWeek,
      thisWeekError,
      topRated,
      topRatedError,
      today,
      todayError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <TVPresenter {...tv} navigation={navigation} />;
};
