import { Container } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import SpaceTitle from '../components/SpaceTitle';
import SpaceImage from '../components/SpaceImage';
import SpaceFeature from '../components/SpaceFeature';
import SpaceDetail from '../components/SpaceDetail';
import SpaceComment from '../components/SpaceComment';

function Space() {
  const space = useLoaderData();

  return (
    <Container maxWidth="xl">
      <SpaceTitle space={space} />
      <SpaceImage space={space} />
      <SpaceFeature space={space} />
      <SpaceDetail space={space} />
      <SpaceComment spaceId={space.id} spaceName={space.name} />
    </Container>
  );
}

export default Space;
