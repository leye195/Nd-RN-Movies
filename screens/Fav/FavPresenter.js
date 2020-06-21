import React, { useRef, useState } from "react";
import {
  Text,
  View,
  Dimensions,
  PanResponder,
  Animated,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import { getImage } from "../../api";
const { width, height } = Dimensions.get("window");
const Container = styled.View`
  padding-top: 50px;
  flex: 1;
  background-color: black;
  align-items: center;
`;
const Card = styled.View`
  position: absolute;
  height: ${height / 1.4}px;
  width: 90%;
  top: 40px;
`;
const Poster = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
`;
const styles = {
  position: "absolute",
  height: height / 1.4,
  width: "90%",
  top: 40,
  borderRadius: 20,
};
export default ({ fav }) => {
  const [topIndex, setTopIndex] = useState(0);
  const nextCard = () => setTopIndex((currentValue) => currentValue + 1);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, { dx, dy }) => {
      position.setValue({
        // dx,dy 값을 position에 저장
        x: dx,
        y: dy,
      });
    },
    onPanResponderRelease: (e, { dx, dy }) => {
      if (dx >= 250) {
        Animated.spring(position, {
          toValue: { x: width + 100, y: dy },
        }).start(nextCard);
      } else if (dx <= -250) {
        Animated.spring(position, {
          toValue: { x: -width - 100, y: dy },
        }).start(nextCard);
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          friction: 4,
        }).start();
      }
    },
  });
  const rotationValues = position.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });
  const nextCardOpacity = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.3, 1],
    extrapolate: "clamp",
  });
  const nextCardScale = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });
  return (
    <Container>
      {fav.discover.map((movie, idx) => {
        if (topIndex > idx) {
          //넘긴 카드들 re-render 방지
          return null;
        } else if (topIndex === idx) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [
                  { rotate: rotationValues },
                  ...position.getTranslateTransform(),
                ],
              }}
              key={movie.id}
              {...panResponder.panHandlers}
            >
              <Poster
                source={{ uri: getImage(movie.poster_path) }}
                resizeMode="contain"
              />
            </Animated.View>
          );
        } else if (topIndex + 1 === idx) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -idx,
                opacity: nextCardOpacity,
                transform: [{ scale: nextCardScale }],
              }}
              key={movie.id}
              {...panResponder.panHandlers}
            >
              <Poster
                source={{ uri: getImage(movie.poster_path) }}
                resizeMode="contain"
              />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -idx,
                opacity: 0,
              }}
              key={movie.id}
              {...panResponder.panHandlers}
            >
              <Poster
                source={{ uri: getImage(movie.poster_path) }}
                resizeMode="contain"
              />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};
