import {
  Toolbar,
  Autocomplete,
  TextField,
  Button,
  Stack,
  InputAdornment,
  Paper,
  Box,
  useTheme,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Header() {
  const theme = useTheme();
  const spaceNames = useLoaderData();

  return (
    <Toolbar
      sx={{
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center',
        },
        height: '96px',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Box
        sx={{
          [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
        }}
      >
        <Link to="/">
          <img src={logo} alt="logo" height={56} />
        </Link>
      </Box>
      <Paper elevation={3} sx={{ borderRadius: 30, width: '400px' }}>
        <Autocomplete
          freeSolo
          disableClearable
          options={spaceNames}
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
      <Box
        sx={{
          [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
        }}
      >
        <Button
          variant="outlined"
          sx={{
            borderRadius: 10,
          }}
        >
          <Stack direction="row" spacing={1}>
            <MenuIcon sx={{ fontSize: 28 }} />
            <AccountCircleIcon sx={{ fontSize: 28 }} />
          </Stack>
        </Button>
      </Box>
    </Toolbar>
  );
}

export default Header;
