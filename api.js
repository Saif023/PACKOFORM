const axios = require("axios");

const getVideoData = async (videoId) => {
  const API_KEY = "YOUR_API_KEY";

  const requestUrl = `https://www.googleapis.com/youtube/v3/videos`;
  const params = {
    id: videoId,
    part: "snippet,player",
    key: API_KEY,
  };

  const response = await axios.get(requestUrl, {
    params,
  });

  return response.data;
};

module.exports = getVideoData;
