import { useTranslation } from 'react-i18next';
import LangPicker from './components/LangPicker';
import HeroSection from './components/HeroSection';
import { lazy } from 'react';
import PizzaProvider from '~/context/PizzaProvider';

const InputSection = lazy(() => import('./components/InputSection'));

function App() {
  useTranslation();
  return (
    <PizzaProvider>
      <div className="container mx-auto flex min-h-screen flex-col items-center gap-7 p-4">
        <LangPicker />
        <HeroSection />
        <InputSection />
      </div>
    </PizzaProvider>
  );
}

export default App;
