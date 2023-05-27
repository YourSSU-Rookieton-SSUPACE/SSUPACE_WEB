import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import BuildingTab from '../components/BuildingTab';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <BuildingTab />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
