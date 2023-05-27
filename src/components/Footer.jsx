import { Container, Link, Stack, Box, Typography } from '@mui/material';
import footerlogo from '../assets/footerlogo.svg';

const footerLinks = [
  { id: 1, item: 'Product', url: '/' },
  { id: 2, item: 'Features', url: '/' },
  { id: 3, item: 'Resources', url: '/' },
  { id: 4, item: <img src={footerlogo} alt="footerlogo" />, url: '/' },
  { id: 5, item: 'About', url: '/' },
  { id: 6, item: 'Blog', url: '/' },
  { id: 7, item: 'Support', url: '/' },
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
              href={link.url}
              underline="hover"
              variant="button"
              color="text.secondary"
            >
              {link.item}
            </Link>
          ))}
        </Stack>
        <Typography variant="body2" align="center" color="text.secondary" marginTop={2}>
          © 2023 SSUPACE, YOURSSU
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
