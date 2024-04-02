import { Stack, Box } from "@mui/material";
import { VideoThumbnail, ChannelThumbnail } from "./";

const Videos = ({ videos }) => {
  // console.log(videos); // This will log an array of videos
  return (
    <Stack direction="row" flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {videos[0].map((item, idx) => (
        <Box key={idx}>
          {item.id.channelId && <ChannelThumbnail channelDetail={item} />}
          {item.id.videoId && <VideoThumbnail video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
