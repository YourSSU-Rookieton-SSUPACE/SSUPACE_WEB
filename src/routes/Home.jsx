import { Container, Box } from '@mui/material';
import { Outlet, useMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import BuildingTab from '../components/BuildingTab';
import Footer from '../components/Footer';

function Home() {
  const [maxWidth, setMaxWidth] = useState('xl');
  const match = useMatch('/buildings/:buildingId');

  useEffect(() => {
    if (match) {
      setMaxWidth('xl');
    } else {
      setMaxWidth('lg');
    }
  }, [match]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Container maxWidth={maxWidth} sx={{ flex: 1 }}>
        <Header />
        <BuildingTab />
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;
