import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";
const { height } = Dimensions.get("window");
const Container = styled.View`
  height: ${height / 3}px;
  width: 100%;
  margin-bottom: 30px;
`;
const SliderContainer = ({ children }) => {
  return (
    <Container>
      <Swiper controlsEnabled={false} loop={true} timeout={3}>
        {children}
      </Swiper>
    </Container>
  );
};
export default SliderContainer;
