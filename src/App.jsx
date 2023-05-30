import { CssBaseline, ThemeProvider } from '@mui/material';
import Router from './routes/Router';
import GlobalTheme from './themes/GlobalTheme';

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
