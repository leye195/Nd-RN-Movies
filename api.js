import axios from "axios";
const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});
api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "93041e50ffd37dbace90ae54a55c67f3"; //process.env.REACT_APP_API_KEY;
  config.params["language"] = "en-US";
  return config;
});
//get 요청 전달
const makeRequest = (path, params) =>
  api.get(`${path}`, {
    params: {
      ...params,
    },
  });
const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};
export const movieApi = {
  //영화 관련 api
  nowPlaying: () => getAnything("movie/now_playing"),
  upComing: () => getAnything("movie/upcoming"),
  popular: () => getAnything("movie/popular"),
  search: (query) =>
    getAnything("search/movie", {
      query,
    }),
  movie: (id) => getAnything(`movie/${id}`),
  discover: () => getAnything("discover/movie"),
};
export const tvApi = {
  //tv관련 api
  today: () => getAnything("tv/airing_today"),
  thisWeek: () => getAnything("tv/on_the_air"),
  topRated: () => getAnything("tv/top_rated"),
  popular: () => getAnything("tv/popular"),
  search: (query) =>
    getAnything("search/tv", {
      query,
    }),
  show: (id) => getAnything(`tv/${id}`),
};

//이미지 uri 반환
export const getImage = (
  path,
  defaultImg = "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
) => {
  if (!path) return defaultImg;
  return `https://image.tmdb.org/t/p/w500${path}`;
};
