import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationES from './es/translation.json';
import translationCA from './ca/translation.json';
import translationEN from './en/translation.json';

const resources =
{
    es: { translation: translationES },
    en: { translation: translationEN },
    ca: { translation: translationCA }
};

i18n
.use(LanguageDetector)
.use(initReactI18next)
.on('languageChanged', (lng) => document.documentElement.lang = lng)
.init(
{
    resources,
    fallbackLng: 'es',
    interpolation: { escapeValue: false }
});

export default i18n;