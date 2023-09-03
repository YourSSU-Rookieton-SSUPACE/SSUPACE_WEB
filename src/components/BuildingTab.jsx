import { Tab, Tabs, Toolbar, Box, tabsClasses, useMediaQuery } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import BuildingData from '../data/BuildingData';
import FilterButton from './FilterButton';

function BuildingTab() {
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const params = useParams();
  const tabIndex = params.buildingId - 1;

  return (
    <Toolbar component="nav" sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={tabIndex}
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
      <Box
        sx={{
          display: isMobileView && 'none',
        }}
      >
        <FilterButton />
      </Box>
    </Toolbar>
  );
}

export default BuildingTab;
