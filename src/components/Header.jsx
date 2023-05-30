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
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { getSpaceId, getSpaceNames } from '../apis';

function Header() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [spaceNames, setSpaceNames] = useState([]);

  useEffect(() => {
    setSpaceNames(getSpaceNames());
  }, []);

  const handleChangeSearch = (event, newSearch) => {
    setSearch(newSearch.trim());
    const spaceId = getSpaceId(newSearch.trim());
    navigate(`/space/${spaceId}`);
  };

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
          value={search}
          onChange={handleChangeSearch}
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
