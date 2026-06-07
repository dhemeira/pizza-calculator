import { useState } from 'react';
import type { ReactNode } from 'react';
import PizzaContext from './PizzaContext';
import type { PizzaSize } from './PizzaContext';
import { calcArea, calcPricePerCm2 } from '~/utils/pizza';

export default function PizzaProvider({ children }: { children: ReactNode }) {
  const [small, setSmall] = useState<PizzaSize>({ count: 2, diameter: 32, price: 4000 });
  const [big, setBig] = useState<PizzaSize>({ count: 1, diameter: 45, price: 6500 });

  const smallArea = calcArea(small);
  const bigArea = calcArea(big);
  const smallTotalPrice = small.count * small.price;
  const bigTotalPrice = big.count * big.price;
  const smallPricePerCm2 = calcPricePerCm2(smallTotalPrice, smallArea);
  const bigPricePerCm2 = calcPricePerCm2(bigTotalPrice, bigArea);

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
