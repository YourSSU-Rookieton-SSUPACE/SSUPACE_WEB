import SpaceData from '../data/SpaceData';

export const getBuildingSpace = (buildingId) => {
  const data = SpaceData.filter((space) => space.building.id === Number(buildingId));
  return data;
};

export const getSpace = (spaceId) => {
  const data = SpaceData.find((space) => space.id === Number(spaceId));
  return data;
};
