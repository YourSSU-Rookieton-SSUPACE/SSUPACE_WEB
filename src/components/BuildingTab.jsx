import { Button, Tab, Tabs, Toolbar, Typography, tabsClasses } from '@mui/material';
import { useEffect, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link, useParams } from 'react-router-dom';
import BuildingData from '../data/BuildingData';

function BuildingTab() {
  const { buildingId } = useParams();
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(buildingId - 1);
  }, []);

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

      <Button variant="outlined" startIcon={<CheckCircleOutlineIcon />} sx={{ minWidth: 'auto' }}>
        <Typography variant="button" noWrap>
          필터
        </Typography>
      </Button>
    </Toolbar>
  );
}

export default BuildingTab;
