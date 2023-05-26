import { Container } from '@mui/material';
import Header from '../components/Header';
import BuildingTab from '../components/BuildingTab';

function Home() {
  return (
    <Container maxWidth="xl">
      <Header />
      <BuildingTab />
    </Container>
  );
}

export default Home;
