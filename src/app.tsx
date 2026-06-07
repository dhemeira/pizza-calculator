import { useTranslation } from 'react-i18next';
import LangPicker from './components/LangPicker';
import HeroSection from './components/HeroSection';
import { lazy } from 'react';
import PizzaProvider from '~/context/PizzaProvider';

const InputSection = lazy(() => import('./components/InputSection'));
const VerdictSection = lazy(() => import('./components/VerdictSection'));
const SumSection = lazy(() => import('./components/SumSection'));
const CompareSection = lazy(() => import('./components/CompareSection'));
const AreaSection = lazy(() => import('./components/AreaSection'));
const FooterSection = lazy(() => import('./components/FooterSection'));

function App() {
  useTranslation();
  return (
    <PizzaProvider>
      <div className="container mx-auto flex min-h-screen flex-col items-center gap-4 p-4 sm:gap-7">
        <LangPicker />
        <HeroSection />
        <InputSection />
        <VerdictSection />
        <SumSection />
        <CompareSection />
        <AreaSection />
        <hr className="text-border w-full max-w-4xl" />
        <FooterSection />
      </div>
    </PizzaProvider>
  );
}

export default App;
