import { Stack, Box } from "@mui/material";
import { VideoThumbnail, ChannelThumbnail } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  const isArrayofArrays = Array.isArray(videos[0]);

  return (
    <Stack
      direction={direction || "row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      gap={2}
    >
      {(isArrayofArrays ? videos[0] : videos).map((item, idx) => (
        <Box key={idx}>
          {item.id?.channelId && <ChannelThumbnail channelDetail={item} />}
          {item.id?.videoId && <VideoThumbnail video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
