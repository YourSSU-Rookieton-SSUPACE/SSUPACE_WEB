import { Grid, Paper, Stack, Typography } from '@mui/material';

function SpaceFeatureItem({ imgSrc, imgAlt, spaceFeature }) {
  return (
    <Grid item xs={12} sm={4}>
      <Paper
        variant="outlined"
        sx={{
          padding: '16px 20px',
          borderRadius: '15px',
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={imgSrc} alt={imgAlt} width={40} />
          <Typography fontSize={18} fontWeight={700} color="text.secondary">
            {spaceFeature}
          </Typography>
        </Stack>
      </Paper>
    </Grid>
  );
}

export default SpaceFeatureItem;
