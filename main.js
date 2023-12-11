async function getVideoData() {
  const API_KEY = "YOUR_API_KEY";
  const VIDEO_ID = "YOUR_VIDEO_ID";

  const requestUrl = `https://www.googleapis.com/youtube/v3/videos`;
  const params = {
    id: VIDEO_ID,
    part: "snippet,player",
    key: API_KEY,
  };

  const response = await fetch(requestUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  const data = await response.json();

  return data;
}

async function createVideoPlayer() {
  const videoData = await getVideoData();

  const videoTitle = videoData["items"][0]["snippet"]["title"];
  const videoPlayerUrl = videoData["items"][0]["player"]["embedHtml"];

  const videoPlayer = `
<iframe width="560" height="315" src="${videoPlayerUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`;

  return videoPlayer;
}

document.addEventListener("DOMContentLoaded", async () => {
  const videoPlayer = await createVideoPlayer();

  document.body.innerHTML = videoPlayer;
});
