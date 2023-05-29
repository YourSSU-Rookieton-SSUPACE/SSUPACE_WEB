import { Container } from '@mui/material';
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
    <>
      <Container maxWidth={maxWidth}>
        <Header />
        <BuildingTab />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
