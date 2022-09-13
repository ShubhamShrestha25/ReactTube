import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Video = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.ChannelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Video;
