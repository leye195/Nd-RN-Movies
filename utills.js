/**
 * @param {*} text  텍스트 문자열
 * @param {*} limit 텍스트 길이 제한
 */
export const trimText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

/**
 * @param {*} date  날짜 문자열
 * @param {*} lan  적용 언어
 */
export const formatDate = (date, lan) => {
  const theDate = new Date(date);
  return theDate.toLocaleDateString(lan, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getYouTubeThumbnail = (key) => {
  return `https://i.ytimg.com/vi/${key}/mqdefault.jpg`;
};
