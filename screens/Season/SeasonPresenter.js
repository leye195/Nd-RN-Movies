import React from "react";
import styled from "styled-components/native";
import Scroll from "../../components/Scroll";
import Poster from "../../components/Poster";
import List from "../../components/List";
import { ActivityIndicator, Dimensions } from "react-native";
import { getImage } from "../../api";
import Horizontal from "../../components/Horizontal";
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
const Data = styled.View`
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
`;
const DataName = styled.Text`
  color: white;
  font-weight: 800;
  margin-bottom: 10px;
`;
const DataValue = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const SeasonPresenter = ({ season, getData }) => {
  return (
    <Scroll loading={false} getData={getData}>
      {season.loading ? (
        <ActivityIndicator style={{ marginTop: 30 }} />
      ) : (
        <>
          <Image
            resizeMode={"cover"}
            source={{ uri: getImage(season?.poster_path, "-") }}
          />
          <ImageContainer>
            <Poster posterImage={season?.poster_path} />
          </ImageContainer>
          <ContentContainer>
            <Title>{season?.name}</Title>
          </ContentContainer>
          <Data>
            {season?.overview ? (
              <>
                <DataName>Overview</DataName>
                <DataValue>{season?.overview}</DataValue>
              </>
            ) : null}
            {season?.episodes && season?.episodes.length > 0 ? (
              <>
                <DataName>Episodes</DataName>
                <List>
                  {season?.episodes?.map((episode) => (
                    <Horizontal
                      key={episode.id}
                      type="season"
                      id={episode.id}
                      title={episode.name}
                      release={episode.air_date}
                      poster={episode.still_path}
                      votes={episode.vote_average}
                      overview={episode.overview}
                    />
                  ))}
                </List>
              </> 
            ) : null}
          </Data>
        </>
      )}
    </Scroll>
  );
};
export default SeasonPresenter;
