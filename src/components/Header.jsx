import {
  Toolbar,
  Autocomplete,
  TextField,
  InputAdornment,
  Paper,
  Box,
  useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import mobilelogo from '../assets/mobilelogo.svg';
import { getSpaceId, getSpaceNames } from '../apis';
import FilterButton from './FilterButton';

function Header() {
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const match = useMatch('/space/:spaceId');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!match) {
      setSearch('');
    }
  }, [match]);

  const handleChangeSearch = (event, newSearch) => {
    setSearch(newSearch.trim());
    const spaceId = getSpaceId(newSearch.trim());
    navigate(`/space/${spaceId}`);
  };

  return (
    <Toolbar
      sx={{
        justifyContent: 'center',
        height: '96px',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Box
        sx={{
          display: isMobileView && 'none',
          flex: 1,
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
          blurOnSelect
          freeSolo
          disableClearable
          options={getSpaceNames()}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="장소를 검색하세요!"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '30px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment
                    position="start"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >
                    {isMobileView ? (
                      <Link to="/">
                        <img src={mobilelogo} alt="logo" width={45} />
                      </Link>
                    ) : (
                      <SearchIcon />
                    )}
                  </InputAdornment>
                ),
                endAdornment: isMobileView && (
                  <InputAdornment
                    position="end"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >
                    <FilterButton />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Paper>
      <Box
        sx={{
          display: isMobileView && 'none',
          flex: 1,
        }}
      />
    </Toolbar>
  );
}

export default Header;
