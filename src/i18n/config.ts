import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

await i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: await import('./locales/en/translation.json') },
      hu: { translation: await import('./locales/hu/translation.json') },
    },
    fallbackLng: {
      hu: ['hu'],
      ['hu-HU']: ['hu'],
      default: ['en'],
    },
    detection: {
      caches: ['localStorage'],
    },
    debug: false,
  });

export default i18n;
