import React from "react";
import styled from "styled-components/native";
import Scroll from "../../components/Scroll";
import Input from "../../components/Input";
const SearchPresenter = ({ query, handleOnChange, handleOnSubmit }) => {
  return (
    <Scroll>
      <Input
        value={query}
        placeholder={"Search Movie / TV"}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      />
    </Scroll>
  );
};
export default SearchPresenter;
