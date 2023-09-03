import { Grid, Typography, Container } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import CarouselCard from '../components/CarouselCard';

function SpaceCard() {
  const spaceData = useLoaderData();

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} marginY={2} minHeight={400}>
        {spaceData.length > 0 ? (
          spaceData.map((space) => (
            <Grid key={space.id} item xs={12} sm={4} lg={3}>
              <CarouselCard space={space} />
            </Grid>
          ))
        ) : (
          <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              추후 업데이트 예정입니다!
            </Typography>
          </Container>
        )}
      </Grid>
    </Container>
  );
}

export default SpaceCard;
