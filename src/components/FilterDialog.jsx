import {
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Checkbox,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  FormGroup,
  FormControlLabel,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import FilterData from '../data/FilterData';

function FilterDialog({ onClose, selectedValue, open }) {
  const navigate = useNavigate();
  const [options, setOptions] = useState(FilterData);
  const disabled = options.every((option) => !option.checked);
  const handleClose = () => {
    setOptions(FilterData);
    onClose(selectedValue);
  };

  const handleOptionChange = (event) => {
    const newOptions = options.map((option) => {
      if (event.target.value === option.label) {
        return {
          ...option,
          checked: event.target.checked,
        };
      }
      return option;
    });
    setOptions(newOptions);
  };

  const handleClickSearch = () => {
    const query = options.filter((option) => option.checked).map((option) => option.usage);
    navigate({
      pathname: '/search',
      search: `?${createSearchParams({
        usage: query,
      })}`,
    });
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            onClick={handleClose}
            aria-label="close"
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            필터
          </Typography>
          <Box
            sx={{
              width: '40',
            }}
          />
        </Toolbar>
      </AppBar>
      <DialogContent dividers>
        <FormGroup>
          {options.map((option) => (
            <FormControlLabel
              key={option.label}
              control={
                <Checkbox
                  checked={option.checked}
                  onChange={handleOptionChange}
                  icon={<CheckCircleOutlineIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  value={option.label}
                />
              }
              label={option.label}
            />
          ))}
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClickSearch} size="large" disabled={disabled}>
          검색 결과 보기
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FilterDialog;
