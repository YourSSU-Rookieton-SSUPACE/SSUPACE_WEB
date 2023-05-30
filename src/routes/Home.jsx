import { Container, Box } from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import BuildingTab from '../components/BuildingTab';
import Footer from '../components/Footer';

function Home() {
  const params = useParams();
  const [maxWidth, setMaxWidth] = useState('xl');

  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(params, 'buildingId')) {
      setMaxWidth('xl');
    } else {
      setMaxWidth('lg');
    }
  }, [params]);

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
