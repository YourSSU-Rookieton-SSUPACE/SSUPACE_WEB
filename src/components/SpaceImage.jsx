import { useTheme } from '@emotion/react';
import { ImageList, ImageListItem, useMediaQuery } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

function SpaceImage({ space }) {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ImageList variant="quilted" cols={4} rowHeight={200} sx={{ marginBottom: '24px' }}>
      {space.photo.map((photo) => (
        <ImageListItem
          key={photo.src || photo}
          cols={isMobileView ? 4 : photo.cols || 1}
          rows={isMobileView ? 1 : photo.rows || 1}
        >
          <img
            {...srcset(photo.src || photo, 200, photo.rows, photo.cols)}
            alt={space.name}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default SpaceImage;
