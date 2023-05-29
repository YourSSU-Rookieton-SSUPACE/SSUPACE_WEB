import { Container } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import SpaceTitle from '../components/SpaceTitle';
import SpaceImage from '../components/SpaceImage';

function Space() {
  const space = useLoaderData();

  return (
    <Container maxWidth="xl">
      <SpaceTitle space={space} />
      <SpaceImage space={space} />
    </Container>
  );
}

export default Space;
