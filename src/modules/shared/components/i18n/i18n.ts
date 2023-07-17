/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const supportedLanguages = ['en', 'id']

i18n.use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    ns: ['translations'], // have a common namespace used around the full app
    defaultNS: 'translations',
    keySeparator: false, // we do not use keys in form messages.welcome
    supportedLngs: supportedLanguages,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  })

export default i18n
