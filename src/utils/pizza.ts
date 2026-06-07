import type { Pizza } from '~/context/PizzaContext';

export const calcArea = ({ count, diameter }: Pizza) =>
  Math.round(Math.PI * (diameter / 2) ** 2 * count);

export const calcPricePerCm2 = (totalPrice: number, area: number) =>
  area > 0 ? Math.round((totalPrice / area) * 100) / 100 : 0;

export const calcAreaPercent = (smallArea: number, bigArea: number) => {
  const larger = Math.max(smallArea, bigArea);
  const smaller = Math.min(smallArea, bigArea);
  return smaller > 0 ? Math.round(((larger - smaller) / smaller) * 100) : 0;
};
