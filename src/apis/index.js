import SpaceData from '../data/SpaceData';

export const getBuildingSpace = (buildingId) => {
  const buildingSpace = SpaceData.filter((space) => space.building.id === Number(buildingId));
  return buildingSpace;
};

export const getSpace = (spaceId) => {
  const space = SpaceData.find((spaceData) => spaceData.id === Number(spaceId));
  return space;
};

export const getSpaceNames = () => {
  const spaceNames = SpaceData.map((space) => space.name);
  return spaceNames;
};

export const getSpaceId = (spaceName) => {
  const spaceId = SpaceData.find((space) => space.name === spaceName)?.id;
  return spaceId;
};

export const getBuildingId = (spaceId) => {
  const buildingId = SpaceData.find((space) => space.id === Number(spaceId))?.building.id;
  return buildingId;
};

export const getSpaceByUsage = (usages) => {
  const spaces = SpaceData.filter((space) =>
    usages.every(
      (usage) =>
        [space.laptopUsage, space.reserveUsage, space.drinkallow].includes(usage) ||
        space.spaceUsage.includes(usage),
    ),
  );

  return spaces;
};
