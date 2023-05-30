import { Stack } from '@mui/material';
import SpaceDetailItem from './SpaceDetailItem';
import { SpaceUsage, DrinkAllow } from '../data/Hashcode';
import time from '../assets/space/detail/time.svg';
import chargeyes from '../assets/space/detail/chargeyes.svg';
import chargeno from '../assets/space/detail/chargeno.svg';
import drinkyes from '../assets/space/detail/drinkyes.svg';
import drinkno from '../assets/space/detail/drinkno.svg';
import restrictyes from '../assets/space/detail/restrictyes.svg';
import restrictno from '../assets/space/detail/restrictno.svg';
import seat from '../assets/space/detail/seat.svg';

function SpaceDetail({ space }) {
  const chargeable = space.spaceUsage.some((usage) => usage === SpaceUsage.CHARGE);

  return (
    <Stack spacing={3} paddingTop={3}>
      <SpaceDetailItem imgSrc={time} text={`이용시간: ${space.time}`} />
      <SpaceDetailItem
        imgSrc={chargeable ? chargeyes : chargeno}
        text={chargeable ? '충전 가능' : '충전 불가능'}
      />
      <SpaceDetailItem
        imgSrc={space.drinkallow === DrinkAllow.TRUE ? drinkyes : drinkno}
        text={space.drinkallow}
      />
      <SpaceDetailItem
        imgSrc={space.restrict === '없음' ? restrictno : restrictyes}
        text={space.restrict === '없음' ? '출입 제한 없음' : space.restrict}
      />
      <SpaceDetailItem imgSrc={seat} text={`${space.seat}개의 좌석`} />
    </Stack>
  );
}

export default SpaceDetail;
