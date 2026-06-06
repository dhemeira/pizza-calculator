import { useTranslation } from 'react-i18next';
import LangPicker from './components/LangPicker';
import HeroSection from './components/HeroSection';

function App() {
  useTranslation();
  return (
    <>
      <div className="p-4 container flex flex-col items-center gap-7 mx-auto min-h-screen">
        <LangPicker />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
