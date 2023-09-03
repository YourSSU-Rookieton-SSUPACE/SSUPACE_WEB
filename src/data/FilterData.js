import { SpaceUsage, LaptopUsage, ReserveUsage, DrinkAllow } from './Hashcode';

const FilterData = Object.freeze([
  { label: '소음 허용', usage: SpaceUsage.COMMUNITY, checked: false },
  { label: '노트북 사용 가능', usage: LaptopUsage.LAPTOP_TRUE, checked: false },
  { label: '예약 불필요', usage: ReserveUsage.RESERVE_FALSE, checked: false },
  { label: '음료 반입 가능', usage: DrinkAllow.TRUE, checked: false },
  { label: '충전 가능', usage: SpaceUsage.CHARGE, checked: false },
]);

export default FilterData;
