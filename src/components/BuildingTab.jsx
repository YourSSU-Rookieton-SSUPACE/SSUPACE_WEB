import { Button, Tab, Tabs, Toolbar, Typography, tabsClasses, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link, useParams } from 'react-router-dom';
import BuildingData from '../data/BuildingData';
import { getBuildingId } from '../apis';

function BuildingTab() {
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [value, setValue] = useState(0);

  const params = useParams();

  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(params, 'buildingId')) {
      setValue(params.buildingId - 1);
    }

    if (Object.prototype.hasOwnProperty.call(params, 'spaceId')) {
      const buildingId = getBuildingId(params.spaceId);
      setValue(buildingId - 1);
    }
  }, [params]);

  return (
    <Toolbar component="nav" sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
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
