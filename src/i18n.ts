import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from './locales/english/translation.json'
import translationMS from './locales/malay/translation.json'
import translationZH from './locales/chinese/translation.json'

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translation: translationEN,
    },
    ms: {
      translation: translationMS,
    },
    zh: {
      translation: translationZH,
    },
  },
  debug: process.env.NODE_ENV === 'development',
  fallbackLng: 'en',
})

export default i18n
