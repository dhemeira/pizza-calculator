import { createContext } from 'react';

export interface Pizza {
  count: number;
  diameter: number;
  price: number;
}

export interface PizzaContextValue {
  small: Pizza;
  big: Pizza;
  setSmall: (values: Pizza) => void;
  setBig: (values: Pizza) => void;
  smallArea: number;
  bigArea: number;
  smallTotalPrice: number;
  bigTotalPrice: number;
  smallPricePerCm2: number;
  bigPricePerCm2: number;
}

const PizzaContext = createContext<PizzaContextValue | null>(null);

export default PizzaContext;
