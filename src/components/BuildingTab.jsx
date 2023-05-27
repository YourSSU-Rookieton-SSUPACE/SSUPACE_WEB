import { Button, Tab, Tabs, Toolbar, Typography, tabsClasses } from '@mui/material';
import { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';
import buildingData from '../data/building-data';

function BuildingTab() {
  const [value, setValue] = useState(0);

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
        {buildingData.map((building) => (
          <Tab
            component={Link}
            key={building.id}
            to={`/buildings/${building.id}`}
            icon={<img src={building.icon} alt={building.label} />}
            label={building.label}
          />
        ))}
      </Tabs>

      <Button variant="outlined" startIcon={<CheckCircleOutlineIcon />} sx={{ minWidth: 90 }}>
        <Typography variant="button" noWrap>
          필터
        </Typography>
      </Button>
    </Toolbar>
  );
}

export default BuildingTab;
