import { createContext } from 'react';

export interface PizzaSize {
  count: number;
  diameter: number;
  price: number;
}

export interface PizzaContextValue {
  small: PizzaSize;
  big: PizzaSize;
  setSmall: (values: PizzaSize) => void;
  setBig: (values: PizzaSize) => void;
  smallArea: number;
  bigArea: number;
  smallTotalPrice: number;
  bigTotalPrice: number;
  smallPricePerCm2: number;
  bigPricePerCm2: number;
}

const PizzaContext = createContext<PizzaContextValue | null>(null);

export default PizzaContext;
