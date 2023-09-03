import {
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Checkbox,
  useMediaQuery,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  Box,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function FilterDialog({ onClose, selectedValue, open }) {
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const handleClose = () => {
    onClose(selectedValue);
  };

  // eslint-disable-next-line no-unused-vars
  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullScreen={isMobileView} maxWidth="xs" fullWidth>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <IconButton
            onClick={handleClose}
            aria-label="close"
            sx={{
              color: (theme) => theme.palette.grey[500],
              flex: 1,
              justifyContent: 'start',
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            필터
          </Typography>
          <Box
            sx={{
              flex: 1,
            }}
          />
        </Toolbar>
      </AppBar>
      <DialogContent dividers>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox labe icon={<CheckCircleOutlineIcon />} checkedIcon={<CheckCircleIcon />} />
            }
            label="Label"
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FilterDialog;
