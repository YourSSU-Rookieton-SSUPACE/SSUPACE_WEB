import { Grid } from '@mui/material';
import SpaceData from '../data/SpaceData';
import CarouselCard from './CarouselCard';

function SpaceCard() {
  return (
    <Grid container spacing={3} marginY={2}>
      {SpaceData.map((space) => (
        <Grid key={space.id} item xs={12} sm={4} lg={3}>
          <CarouselCard space={space} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SpaceCard;
