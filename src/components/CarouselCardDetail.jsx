import { Box, Typography, Chip, Stack } from '@mui/material';

function CarouselCardDetail({ space }) {
  <Box sx={{ marginTop: 1 }}>
    <Typography variant="subtitle1">{space.name}</Typography>
    <Typography variant="subtitle2">{space.location}</Typography>
    <Stack direction="row" spacing={1} marginTop={1} useFlexGap flexWrap="wrap">
      {space.spaceUsage.map((usage) => (
        <Chip key={usage} label={`#${usage}`} variant="outlined" size="small" color="primary" />
      ))}
    </Stack>
  </Box>;
}

export default CarouselCardDetail;
