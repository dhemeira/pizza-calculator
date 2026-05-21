import viteSvg from '~/assets/vite.svg';
import { useTranslation } from 'react-i18next';
import LangPicker from './components/LangPicker';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <LangPicker />
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <img src={viteSvg} alt="Vite logo" />
      </div>
    </>
  );
}

export default App;
