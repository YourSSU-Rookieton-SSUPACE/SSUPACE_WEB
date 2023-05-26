import { Toolbar, Autocomplete, TextField, Button, Stack, InputAdornment } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

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
        height: '80px',
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" height={56} />
      </Link>
      <Autocomplete
        freeSolo
        disableClearable
        options={top100Films}
        sx={{ width: 350 }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="당신의 공간을 스페이스하세요!"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '30px',
                paddingLeft: '12px',
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
      <Button variant="outlined" sx={{ borderRadius: 10 }}>
        <Stack direction="row" spacing={1}>
          <MenuIcon sx={{ fontSize: 24 }} />
          <AccountCircleIcon sx={{ fontSize: 24 }} />
        </Stack>
      </Button>
    </Toolbar>
  );
}

export default Header;
