import { Container, Box } from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const [maxWidth, setMaxWidth] = useState('xl');
  const params = useParams();

  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(params, 'buildingId')) {
      setMaxWidth('xl');
    }

    if (Object.prototype.hasOwnProperty.call(params, 'spaceId')) {
      setMaxWidth('lg');
    }
  }, [params]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Container maxWidth={maxWidth} sx={{ flex: 1 }}>
        <Header />
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;
