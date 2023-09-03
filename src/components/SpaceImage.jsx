import { Box, ImageList, ImageListItem, useMediaQuery } from '@mui/material';
import MobileCarouselCard from './MobileCarouselCard';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

function SpaceImage({ space }) {
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return isMobileView ? (
    <Box marginY={2}>
      <MobileCarouselCard space={space} />
    </Box>
  ) : (
    <ImageList variant="quilted" cols={4} rowHeight={200} sx={{ marginBottom: '24px' }}>
      {space.photo.map((photo) => (
        <ImageListItem key={photo.src || photo} cols={photo.cols || 1} rows={photo.rows || 1}>
          <img
            {...srcset(photo.src || photo, 200, photo.rows, photo.cols)}
            alt={space.name}
            loading="eager"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default SpaceImage;
