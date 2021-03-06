import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { getImage } from "../api";
import { GREY_COLOR, YELLOW_COLOR } from "../constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { trimText } from "../utills";
import { Platform } from "react-native";
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
  justify-content: ${(props) => (props.isWeb ? "center" : "space-around")};
  align-items: center;
  height: 100%;
`;
const Data = styled.View`
  position: relative;
  width: 50%;
  padding-left: ${(props) => (props.isWeb ? "20px" : "0px")};
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
  bottom: ${(props) => (props.isWeb ? "0px" : "0")};
`;
const ButtonText = styled.Text`
  font-weight: 600;
  color: white;
`;

const Slider = ({
  id,
  title,
  poster,
  backgroundImage,
  votes,
  overview,
  release,
  type,
}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image resizeMode={"cover"} source={{ uri: getImage(backgroundImage) }} />
      <Content isWeb={Platform.OS === "web"}>
        <Poster posterImage={poster} />
        <Data isWeb={Platform.OS === "web"}>
          <Title>{trimText(title, 15)}</Title>
          <VoteContainer>
            <Votes votes={votes} />
          </VoteContainer>
          <Overview>{trimText(overview, 120)}</Overview>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Detail", {
                id,
                type,
                title,
                poster_path: poster,
                backgroundImage,
                vote_average: votes,
                overview,
                release,
              })
            }
          >
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
