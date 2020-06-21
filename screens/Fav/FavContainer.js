import React, { useEffect, useState } from "react";

import { movieApi } from "../../api";
import FavPresenter from "./FavPresenter";
export default () => {
  const [fav, setFav] = useState({
    loading: true,
    discover: [],
    discoverError: null,
  });

  const getData = async () => {
    const [discover, discoverError] = await movieApi.discover();
    setFav({
      loading: false,
      discover,
      discoverError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <FavPresenter fav={fav} />;
};
