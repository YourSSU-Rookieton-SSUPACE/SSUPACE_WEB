import { Grid } from '@mui/material';
import spaceData from '../data/space-data';
import CarouselCard from './CarouselCard';

function SpaceCard() {
  return (
    <Grid container spacing={3} marginY={2}>
      {spaceData.map((space) => (
        <Grid key={space.id} item xs={12} sm={4} lg={3}>
          <CarouselCard space={space} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SpaceCard;
