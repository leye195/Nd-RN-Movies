import React from "react";
import styled from "styled-components/native";
import Scroll from "../../components/Scroll";
import { getImage } from "../../api";
import { Dimensions, ActivityIndicator, Platform } from "react-native";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import Release from "../../components/Release";
import Slider from "../../components/Detail/Slider";
import Link from "../../components/Detail/Link";
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
const DataValue = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Genres = styled.Text`
  color: white;
  margin-bottom: 20px;
`;

const DetailPresenter = ({ detail, openBrowser }) => {
  return (
    <Scroll loading={false}>
      <Image
        resizeMode={"cover"}
        source={{ uri: getImage(detail?.backdrop_path, "-") }}
      />
      <ImageContainer>
        <Poster posterImage={detail?.poster_path} />
      </ImageContainer>
      <ContentContainer>
        <Title>{detail?.title}</Title>
        <SubInfoContainer>
          <Release release={detail?.release} />
          <Votes votes={detail?.vote_average} />
        </SubInfoContainer>
        <Data>
          {detail?.genres ? (
            <>
              <DataName>Genres</DataName>
              <Genres>{`🎥 ${detail?.genres
                .map((genre) => genre.name)
                .join(",")}`}</Genres>
            </>
          ) : null}
          {detail?.overview ? (
            <>
              <DataName>Overview</DataName>
              <DataValue>{detail?.overview}</DataValue>
            </>
          ) : null}
          {detail.loading ? (
            <ActivityIndicator style={{ marginTop: 30 }} />
          ) : null}
          {detail?.original_language && (
            <>
              <DataName>Language</DataName>
              <DataValue>{detail?.original_language}</DataValue>
            </>
          )}
          {detail.status && (
            <>
              <DataName>Status</DataName>
              <DataValue>{detail.status}</DataValue>
            </>
          )}
          {detail?.status === "Release" && detail?.runtime !== undefined && (
            <>
              <DataName>Runtime</DataName>
              <DataValue>{`⏰ ${detail.runtime} minutes`}</DataValue>
            </>
          )}
          {detail?.cast ? (
            <>
              <DataName>Casting</DataName>
              <Slider info={detail?.cast} type={"cast"} />
            </>
          ) : null}
          {detail.number_of_episodes && detail.number_of_seasons ? (
            <>
              <DataName>Seasons / Episodes</DataName>
              <DataValue>
                {detail.number_of_seasons} Seasons / {detail.number_of_episodes}{" "}
                Episodes
              </DataValue>
            </>
          ) : null}
          {detail.seasons && <Slider info={detail.seasons} type={"season"} />}
          {detail.created_by && detail.created_by.length > 0 ? (
            <>
              <DataName>Created By</DataName>
              <Slider info={detail.created_by} type={"created"} />
            </>
          ) : null}
          {detail.production_companies &&
          detail.production_companies.length > 0 ? (
            <>
              <DataName>Production</DataName>
              <Slider info={detail.production_companies} type={"production"} />
            </>
          ) : null}
          {detail.videos && detail.videos.results.length > 0 ? (
            <>
              <DataName>Videos</DataName>
              <Slider
                info={detail.videos.results}
                type={"video"}
                onPress={openBrowser}
              />
            </>
          ) : null}
          {detail.imdb_id && (
            <>
              <DataName>Link</DataName>
              <Link
                onPress={openBrowser(
                  `https://www.imdb.com/title/${detail.imdb_id}`
                )}
                text={"IMDB"}
                icon={"imdb"}
              />
            </>
          )}
        </Data>
      </ContentContainer>
    </Scroll>
  );
};
export default DetailPresenter;
