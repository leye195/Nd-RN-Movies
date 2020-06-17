import React from "react";
import styled from "styled-components/native";
import Scroll from "../../components/Scroll";
import { getImage } from "../../api";
import { Dimensions, ActivityIndicator } from "react-native";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import Release from "../../components/Release";
const { height } = Dimensions.get("window");
const ImageContainer = styled.View`
  position: absolute;
  width: 100%;
  padding-top: ${height / 5}px;
  justify-content: center;
  align-items: center;
`;
const Image = styled.Image`
  width: 100%;
  height: ${height / 3}px;
  opacity: 0.5;
`;
const ContentContainer = styled.View`
  padding-top: 95px;
`;
const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
`;
const SubInfoContainer = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;
const Data = styled.View`
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
`;
const DataName = styled.Text`
  color: white;
  font-weight: 800;
  margin-bottom: 10px;
`;
const Overview = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: 600;
`;

const DetailPresenter = ({
  loading,
  title,
  vote_average,
  poster_path,
  overview,
  backdrop_path,
  release,
}) => {
  console.log(backdrop_path);
  return (
    <Scroll loading={false}>
      <Image
        resizeMode={"cover"}
        source={{ uri: getImage(backdrop_path, "-") }}
      />
      <ImageContainer>
        <Poster posterImage={poster_path} />
      </ImageContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <SubInfoContainer>
          <Release release={release} />
          <Votes votes={vote_average} />
        </SubInfoContainer>
        <Data>
          {overview && (
            <>
              <DataName>Overview</DataName>
              <Overview>{overview}</Overview>
            </>
          )}
          {loading && (
            <ActivityIndicator style={{ marginTop: 30, color: "white" }} />
          )}
        </Data>
      </ContentContainer>
    </Scroll>
  );
};
export default DetailPresenter;
