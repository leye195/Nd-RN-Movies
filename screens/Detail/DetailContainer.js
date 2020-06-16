import React, { useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
export default () => {
  const getData = async () => {};
  useEffect(() => {
    getData();
  }, []);
  return <DetailPresenter />;
};
