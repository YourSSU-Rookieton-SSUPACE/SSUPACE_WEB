import { Box, IconButton, MobileStepper, Typography, Chip, Stack } from '@mui/material';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function CarouselCard({ space }) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = space.images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        '&:hover': {
          '& .MuiMobileStepper-root': {
            opacity: 1,
          },
        },
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          right: 10,
          top: 10,
          zIndex: 1,
        }}
      >
        <StarBorderIcon />
      </IconButton>
      <SwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {space.images.map((image) => (
          <Box
            key={image.id}
            component="img"
            src={image.url}
            sx={{
              height: 275,
              display: 'block',
              overflow: 'hidden',
              width: '100%',
              borderRadius: 3,
            }}
          />
        ))}
      </SwipeableViews>
      <Box
        sx={{
          position: 'absolute',
          bottom: 100,
          width: '100%',
        }}
      >
        <MobileStepper
          sx={{
            '.MuiMobileStepper-dotActive': {
              backgroundColor: '#fff',
            },
            background: 'transparent',
            opacity: 0,
            transition: 'all ease 1000ms',
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <IconButton
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{
                '&:hover': {
                  backgroundColor: '#FFFFFF',
                },
                color: '#000000',
                backgroundColor: '#FFFFFF',
                opacity: 0.7,
                borderRadius: 10,
                p: 1,
              }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          }
          backButton={
            <IconButton
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{
                '&:hover': {
                  backgroundColor: '#FFFFFF',
                },
                color: '#000000',
                backgroundColor: '#FFFFFF',
                opacity: 0.7,
                borderRadius: 10,
                p: 1,
              }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
          }
        />
      </Box>
      <Box sx={{ marginTop: 1 }}>
        <Typography variant="subtitle1">{space.name}</Typography>
        <Typography variant="subtitle2">정보과학관 지하1층</Typography>
        <Stack direction="row" spacing={1} marginTop={1}>
          <Chip label="#소근소근" variant="outlined" size="small" color="primary" />
          <Chip label="#노트북존" variant="outlined" size="small" color="primary" />
        </Stack>
      </Box>
    </Box>
  );
}

export default CarouselCard;
