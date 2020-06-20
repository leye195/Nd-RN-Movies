import React from "react";
import styled from "styled-components/native";
import { getImage } from "../../api";
import { ScrollView, TouchableOpacity } from "react-native";
import { getYouTubeThumbnail } from "../../utills";
const Container = styled.View`
  flex: 1;
  height: 150px;
  width: 120px;
  margin: 10px;
  align-items: center;
  justify-content: ${(props) =>
    props.type === "cast" ? "flex-start" : "center"};
  margin-right: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
`;
const Image = styled.Image`
  height: ${(props) => (props.type === "video" ? "140px" : "150px")};
  width: ${(props) => (props.type === "video" ? "160px" : "120px")};
  margin: 10px;
  border-radius: 5px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 800;
  font-size: ${(props) => (props.type === "cast" ? "12px" : "14px")};
`;
export default ({ info, type, onPress }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginVertical: 20 }}
      contentContainerStyle={{
        flexDirection: "row",
        paddingLeft: 0,
      }}
    >
      {type === "cast" &&
        info.slice(0, 9)?.map((item) => (
          <Container
            key={item?.credit_id}
            style={{ height: 200, backgroundColor: "transparent" }}
            type={"cast"}
          >
            <Image source={{ uri: getImage(item.profile_path) }} />
            <Title type={"cast"}>{item && item.name}</Title>
          </Container>
        ))}
      {type === "production" &&
        info.map((item) => (
          <Container key={item.id}>
            {item?.logo_path !== null ? (
              <Image
                source={{ uri: getImage(item.logo_path) }}
                resizeMode={"contain"}
              />
            ) : (
              <Title>{item.name}</Title>
            )}
          </Container>
        ))}
      {type === "created" &&
        info.map((item) => (
          <Container key={item.credit_id}>
            {item?.profile_path !== null ? (
              <Image
                source={{ uri: getImage(item.profile_path) }}
                resizeMode={"contain"}
              />
            ) : (
              <Title>{item.name}</Title>
            )}
          </Container>
        ))}
      {type === "season" &&
        info.map((item) =>
          item?.poster_path !== null ? (
            <Image
              key={item.id}
              source={{ uri: getImage(item.poster_path) }}
              resizeMode={"stretch"}
              type={"video"}
            />
          ) : (
            <Container
              key={item.id}
              style={{ height: 150, width: 120, margin: 10 }}
            >
              <Title>{item.name}</Title>
            </Container>
          )
        )}
      {type === "video" &&
        info.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={onPress(`https://youtube.com/watch?v=${item.key}`)}
          >
            <Image
              source={{ uri: getYouTubeThumbnail(item.key) }}
              resizeMode={"contain"}
              type={"video"}
            />
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};
