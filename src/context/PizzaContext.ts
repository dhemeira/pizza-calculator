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
}

const PizzaContext = createContext<PizzaContextValue | null>(null);

export default PizzaContext;
