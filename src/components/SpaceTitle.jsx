import { Box, IconButton, Stack, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function SpaceTitle({ space }) {
  return (
    <Box paddingTop={3}>
      <Typography variant="h5" sx={{ fontWeight: '600' }}>
        {space.name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="subtitle1" color="text.secondary">
          {space.location}
        </Typography>
        <Stack direction="row" alignItems="center">
          <IconButton size="small">
            <StarBorderIcon />
          </IconButton>
          <Typography variant="subtitle1" color="text.secondary">
            즐겨찾기
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default SpaceTitle;
