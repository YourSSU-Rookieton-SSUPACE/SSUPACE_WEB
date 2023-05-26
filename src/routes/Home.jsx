import { Container } from '@mui/material';
import Header from '../components/Header';
import BuildingTab from '../components/BuildingTab';
import SpaceCard from '../components/SpaceCard';

function Home() {
  return (
    <Container maxWidth="xl">
      <Header />
      <BuildingTab />
      <SpaceCard />
    </Container>
  );
}

export default Home;
