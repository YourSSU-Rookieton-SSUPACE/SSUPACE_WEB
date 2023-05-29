import { Container } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import SpaceTitle from '../components/SpaceTitle';

function Space() {
  const space = useLoaderData();

  return (
    <Container maxWidth="xl">
      <SpaceTitle space={space} />
    </Container>
  );
}

export default Space;
