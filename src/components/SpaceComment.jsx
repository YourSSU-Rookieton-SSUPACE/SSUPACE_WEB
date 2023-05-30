import { Box } from '@mui/material';
import { DiscussionEmbed } from 'disqus-react';

function SpaceComment({ spaceId, spaceName }) {
  return (
    <Box sx={{ paddingTop: '24px' }}>
      <DiscussionEmbed
        shortname="ssupace"
        config={{
          url: `https://ssupace.vercel.app/space/${spaceId}`,
          identifier: `${spaceId}`,
          title: spaceName,
          language: 'ko',
        }}
      />
    </Box>
  );
}

export default SpaceComment;
