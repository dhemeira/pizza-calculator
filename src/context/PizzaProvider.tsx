import { useState } from 'react';
import type { ReactNode } from 'react';
import PizzaContext from './PizzaContext';
import type { PizzaSize } from './PizzaContext';

export default function PizzaProvider({ children }: { children: ReactNode }) {
  const [small, setSmall] = useState<PizzaSize>({ count: 2, diameter: 32, price: 4000 });
  const [big, setBig] = useState<PizzaSize>({ count: 1, diameter: 45, price: 6500 });

  return <PizzaContext value={{ small, big, setSmall, setBig }}>{children}</PizzaContext>;
}
