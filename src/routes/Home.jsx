import { Container } from '@mui/material';
import Header from '../components/Header';
import BuildingTab from '../components/BuildingTab';
import SpaceCard from '../components/SpaceCard';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <BuildingTab />
        <SpaceCard />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
