import { use } from 'react';
import PizzaContext from './PizzaContext';

export default function usePizza() {
  const context = use(PizzaContext);
  if (!context) throw new Error('usePizza must be used within a PizzaProvider');
  return context;
}
