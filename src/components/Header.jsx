import {
  Toolbar,
  Autocomplete,
  TextField,
  Button,
  Stack,
  InputAdornment,
  Paper,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

function Header() {
  return (
    <Toolbar
      sx={{
        justifyContent: 'space-between',
        height: '96px',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" height={56} />
      </Link>
      <Paper elevation={3} sx={{ borderRadius: 30 }}>
        <Autocomplete
          freeSolo
          disableClearable
          options={top100Films}
          sx={{ width: 400 }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="당신의 공간을 스페이스하세요!"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '30px',
                  paddingLeft: '16px',
                },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Paper>

      <Button variant="outlined" sx={{ borderRadius: 10 }}>
        <Stack direction="row" spacing={1}>
          <MenuIcon sx={{ fontSize: 28 }} />
          <AccountCircleIcon sx={{ fontSize: 28 }} />
        </Stack>
      </Button>
    </Toolbar>
  );
}

export default Header;
