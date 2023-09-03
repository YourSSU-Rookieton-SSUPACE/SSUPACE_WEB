import { IconButton, Typography, Button, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FilterDialog from './FilterDialog';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function FilterButton() {
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      {isMobileView ? (
        <IconButton onClick={handleClickOpen}>
          <TuneIcon />
        </IconButton>
      ) : (
        <Button
          onClick={handleClickOpen}
          variant="outlined"
          size="medium"
          startIcon={<CheckCircleOutlineIcon />}
          sx={{
            minWidth: 'auto',
          }}
        >
          <Typography variant="button" noWrap>
            필터
          </Typography>
        </Button>
      )}
      <FilterDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </>
  );
}

export default FilterButton;
