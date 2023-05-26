import { Tab, Tabs, Toolbar, tabsClasses } from '@mui/material';
import { useState } from 'react';
import buildingData from '../data/building-data';

function BuildingTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Toolbar component="nav">
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
            key={building.id}
            icon={<img src={building.icon} alt={building.label} />}
            label={building.label}
          />
        ))}
      </Tabs>
    </Toolbar>
  );
}

export default BuildingTab;
