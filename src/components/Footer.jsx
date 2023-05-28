import { Container, Link, Stack, Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import footerlogo from '../assets/footerlogo.svg';

const footerLinks = [
  { id: 1, item: 'Product', url: '/product' },
  { id: 2, item: 'Features', url: '/features' },
  { id: 3, item: 'Resources', url: '/resources' },
  { id: 4, item: <img src={footerlogo} alt="footerlogo" />, url: '/' },
  { id: 5, item: 'About', url: '/about' },
  { id: 6, item: 'Blog', url: '/blog' },
  { id: 7, item: 'Support', url: '/support' },
];

function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', paddingY: 4 }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ paddingY: 2 }}
        >
          {footerLinks.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              component={RouterLink}
              underline="hover"
              variant="button"
              color="text.secondary"
            >
              {link.item}
            </Link>
          ))}
        </Stack>
        <Typography variant="body2" align="center" color="text.secondary" marginTop={1}>
          © 2023 SSUPACE, YOURSSU
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
