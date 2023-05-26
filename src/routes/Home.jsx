import { Container } from '@mui/material';
import Header from '../components/Header';

function Home() {
  return (
    <Container maxWidth="xl" sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Header />
    </Container>
  );
}

export default Home;
