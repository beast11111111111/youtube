import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard.jsx';
import ChannelCard from './ChannelCard.jsx';
import Loader from './Loader';

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} 
    flexWrap="wrap" 
    // justifyContent="space-between" 
    // alignItems="center" 
    gap={2}
    sx={{
      display: 'grid',
      gap: 1,
      gridTemplateColumns: 'repeat(3, 1fr)',
    }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
