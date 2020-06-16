import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Dimensions } from "react-native";
import { getImage } from "../api";
import Poster from "./Poster";
import { GREY_COLOR, YELLOW_COLOR } from "../constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import Votes from "./Votes";
import { trimText } from "../utills";
const Container = styled.View`
  width: 100%;
  height: 100%;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  position: absolute;
`;
const Content = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;
const Data = styled.View`
  width: 50%;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;
const VoteContainer = styled.View`
  margin-bottom: 5px;
`;
const Overview = styled.Text`
  color: ${GREY_COLOR};
  opacity: 0.8;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Button = styled.View`
  background-color: ${YELLOW_COLOR};
  padding: 10px;
  width: 120px;
  align-items: center;
  border-radius: 5px;
`;
const ButtonText = styled.Text`
  font-weight: 600;
  color: white;
`;

const Slider = ({ id, title, poster, backgroundImage, votes, overview }) => {
  return (
    <Container>
      <Image resizeMode={"cover"} source={{ uri: getImage(backgroundImage) }} />
      <Content>
        <Poster posterImage={poster} />
        <Data>
          <Title>{trimText(title, 15)}</Title>
          <VoteContainer>
            <Votes votes={votes} />
          </VoteContainer>
          <Overview>{trimText(overview, 120)}</Overview>
          <TouchableOpacity>
            <Button>
              <ButtonText>View Details</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};
Slider.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  backgroundImage: propTypes.string,
  votes: propTypes.number.isRequired,
  overview: propTypes.string.isRequired,
};
export default Slider;
