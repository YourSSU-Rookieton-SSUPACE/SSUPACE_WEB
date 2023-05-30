import { createTheme } from '@mui/material';

const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: '#816DEC',
    },
  },
  typography: {
    fontFamily: ['Spoqa Han Sans Neo', 'Roboto'].join(','),
  },
});

export default GlobalTheme;
