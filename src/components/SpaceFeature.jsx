import { Grid } from '@mui/material';
import nbyes from '../assets/space/usage/nbyes.svg';
import nbno from '../assets/space/usage/nbno.svg';
import reserveno from '../assets/space/usage/reserveno.svg';
import reserveyes from '../assets/space/usage/reserveyes.svg';
import SpaceFeatureItem from './SpaceFeatureItem';
import comment from '../assets/space/usage/comment.svg';
import studyhard from '../assets/space/usage/studyhard.svg';
import community from '../assets/space/usage/community.svg';
import healing from '../assets/space/usage/healing.svg';
import { SpaceUsage, LaptopUsage, ReserveUsage } from '../data/Hashcode';

const SpaceFeatureInfo = Object.freeze([
  {
    name: SpaceUsage.QUIET,
    src: comment,
  },
  {
    name: SpaceUsage.STUDY,
    src: studyhard,
  },
  {
    name: SpaceUsage.COMMUNITY,
    src: community,
  },
]);

function SpaceFeature({ space }) {
  const feature = SpaceFeatureInfo.find(
    (info) => info.name === space.spaceUsage.find((usage) => usage === info.name),
  );

  return (
    <Grid container spacing={3}>
      <SpaceFeatureItem
        imgSrc={feature?.src || healing}
        imgAlt={feature?.name || '#힐링존'}
        spaceFeature={feature?.name || '#힐링존'}
      />
      <SpaceFeatureItem
        imgSrc={space.laptopUsage === LaptopUsage.LAPTOP_TRUE ? nbyes : nbno}
        imgAlt="notebook"
        spaceFeature={`#${space.laptopUsage}`}
      />
      <SpaceFeatureItem
        imgSrc={space.reserveUsage === ReserveUsage.RESERVE_TRUE ? reserveyes : reserveno}
        imgAlt="reserve"
        spaceFeature={`#${space.reserveUsage}`}
      />
    </Grid>
  );
}

export default SpaceFeature;
