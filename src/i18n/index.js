import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import esTranslation from './locales/es/translation.json'
import esLegal      from './locales/es/legal.json'
import enTranslation from './locales/en/translation.json'
import enLegal      from './locales/en/legal.json'
import ptTranslation from './locales/pt/translation.json'
import ptLegal      from './locales/pt/legal.json'
import itTranslation from './locales/it/translation.json'
import itLegal      from './locales/it/legal.json'
import frTranslation from './locales/fr/translation.json'
import frLegal      from './locales/fr/legal.json'
import deTranslation from './locales/de/translation.json'
import deLegal      from './locales/de/legal.json'
import faTranslation from './locales/fa/translation.json'
import faLegal      from './locales/fa/legal.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: esTranslation, legal: esLegal },
      en: { translation: enTranslation, legal: enLegal },
      pt: { translation: ptTranslation, legal: ptLegal },
      it: { translation: itTranslation, legal: itLegal },
      fr: { translation: frTranslation, legal: frLegal },
      de: { translation: deTranslation, legal: deLegal },
      fa: { translation: faTranslation, legal: faLegal },
    },
    fallbackLng: 'es',
    supportedLngs: ['es', 'en', 'pt', 'it', 'fr', 'de', 'fa'],
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'rosa_language',
    },
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'translation',
  })

i18n.on('languageChanged', (lng) => {
  const dir = i18n.dir(lng)
  document.documentElement.lang = lng
  document.documentElement.dir = dir
  // Update page title
  document.title = i18n.t('meta.title')
})

export default i18n
