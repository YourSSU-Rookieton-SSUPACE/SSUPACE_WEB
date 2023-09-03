import { Container, Stack, Box, Typography, useMediaQuery } from '@mui/material';
import footerlogo from '../assets/footerlogo.svg';

const leftFooterItems = [
  { id: 1, text: 'Product' },
  { id: 2, text: 'Features' },
  { id: 3, text: 'Resources' },
];

const rightFooterItems = [
  { id: 4, text: 'About' },
  { id: 5, text: 'Blog' },
  { id: 6, text: 'Support' },
];

function Footer() {
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            paddingY: 4,
            borderBottom: 1,
            borderColor: 'divider',
            display: isMobileView && 'none',
          }}
        >
          {leftFooterItems.map((item) => (
            <Typography key={item.id} variant="button" color="text.secondary">
              {item.text}
            </Typography>
          ))}
          <img src={footerlogo} alt="footerlogo" />
          {rightFooterItems.map((item) => (
            <Typography key={item.id} variant="button" color="text.secondary">
              {item.text}
            </Typography>
          ))}
        </Stack>
        <Typography variant="body2" align="center" color="text.secondary" paddingY={2}>
          © 2023 SSUPACE, YOURSSU
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
