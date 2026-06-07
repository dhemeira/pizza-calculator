import { useTranslation } from 'react-i18next';
import LanguagePicker from './components/LanguagePicker';
import Hero from './components/Hero';
import { lazy, Suspense } from 'react';
import PizzaProvider from '~/context/PizzaProvider';
import ErrorBoundary from './components/ui/ErrorBoundary';

const PizzaForm = lazy(() => import('./components/PizzaForm'));
const Verdict = lazy(() => import('./components/Verdict'));
const PizzaTotals = lazy(() => import('./components/PizzaTotals'));
const AreaComparison = lazy(() => import('./components/AreaComparison'));
const AreaBreakdown = lazy(() => import('./components/AreaBreakdown'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useTranslation();
  return (
    <PizzaProvider>
      <div className="container mx-auto flex min-h-screen flex-col items-center gap-4 p-4 sm:gap-7">
        <LanguagePicker />
        <ErrorBoundary>
          <Hero />
          <Suspense>
            <PizzaForm />
            <Verdict />
            <PizzaTotals />
            <AreaComparison />
            <AreaBreakdown />
            <hr className="text-border w-full max-w-4xl" />
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </PizzaProvider>
  );
}

export default App;
