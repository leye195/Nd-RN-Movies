import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
export default () => {
  const [query, setQuery] = useState("");
  const handleOnChange = (text) => {
    setQuery(text);
  };
  const handleOnSubmit = () => {};
  return (
    <SearchPresenter
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
    />
  );
};
