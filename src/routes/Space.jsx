import { Container } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import SpaceTitle from '../components/SpaceTitle';
import SpaceImage from '../components/SpaceImage';
import SpaceFeature from '../components/SpaceFeature';
import SpaceDetail from '../components/SpaceDetail';

function Space() {
  const space = useLoaderData();

  return (
    <Container maxWidth="xl">
      <SpaceTitle space={space} />
      <SpaceImage space={space} />
      <SpaceFeature space={space} />
      <SpaceDetail space={space} />
    </Container>
  );
}

export default Space;
