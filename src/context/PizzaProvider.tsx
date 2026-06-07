import { useState } from 'react';
import type { ReactNode } from 'react';
import PizzaContext from './PizzaContext';
import type { PizzaSize } from './PizzaContext';

const calcArea = ({ count, diameter }: PizzaSize) =>
  Math.round(Math.PI * (diameter / 2) ** 2 * count);

export default function PizzaProvider({ children }: { children: ReactNode }) {
  const [small, setSmall] = useState<PizzaSize>({ count: 2, diameter: 32, price: 4000 });
  const [big, setBig] = useState<PizzaSize>({ count: 1, diameter: 45, price: 6500 });

  const smallArea = calcArea(small);
  const bigArea = calcArea(big);
  const smallTotalPrice = small.count * small.price;
  const bigTotalPrice = big.count * big.price;
  const smallPricePerCm2 =
    smallArea > 0 ? Math.round((smallTotalPrice / smallArea) * 100) / 100 : 0;
  const bigPricePerCm2 = bigArea > 0 ? Math.round((bigTotalPrice / bigArea) * 100) / 100 : 0;

  return (
    <PizzaContext
      value={{
        small,
        big,
        setSmall,
        setBig,
        smallArea,
        bigArea,
        smallTotalPrice,
        bigTotalPrice,
        smallPricePerCm2,
        bigPricePerCm2,
      }}>
      {children}
    </PizzaContext>
  );
}
