import { Button, Tab, Tabs, Toolbar, Typography, tabsClasses, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link, useLoaderData } from 'react-router-dom';
import BuildingData from '../data/BuildingData';
import { getBuildingId } from '../apis';

export const loader = ({ params }) => {
  if (Object.prototype.hasOwnProperty.call(params, 'buildingId')) {
    return params.buildingId - 1;
  }

  if (Object.prototype.hasOwnProperty.call(params, 'spaceId')) {
    const buildingId = getBuildingId(params.spaceId);
    return buildingId - 1;
  }

  return 0;
};

function BuildingTab() {
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const tabIndex = useLoaderData();
  const [value, setValue] = useState(tabIndex);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Toolbar component="nav" sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {BuildingData.map((building) => (
          <Tab
            component={Link}
            key={building.id}
            to={`/buildings/${building.id}`}
            icon={<img src={building.icon} alt={building.label} />}
            label={building.label}
          />
        ))}
      </Tabs>
      <Button
        variant="outlined"
        size="medium"
        startIcon={<CheckCircleOutlineIcon />}
        sx={{
          minWidth: 'auto',
          display: isMobileView && 'none',
        }}
      >
        <Typography variant="button" noWrap>
          필터
        </Typography>
      </Button>
    </Toolbar>
  );
}

export default BuildingTab;
