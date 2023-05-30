import { Avatar, Stack, Typography } from '@mui/material';

function SpaceDetailItem({ imgSrc, text }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar sx={{ bgcolor: 'grey.100', width: '50px', height: '50px' }}>
        <img src={imgSrc} alt={imgSrc} />
      </Avatar>
      <Typography fontSize={18} fontWeight={500}>
        {text}
      </Typography>
    </Stack>
  );
}

export default SpaceDetailItem;
