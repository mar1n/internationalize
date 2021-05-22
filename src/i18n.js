
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';
import LastUsed from 'locize-lastused';
import { locizePlugin } from 'locize';
import { DateTime } from 'luxon';

const isProduction = 'production';

const locizeOptions = {
  projectId: '8443747a-674e-4c1d-afe1-4d10e706d9e9',
  apiKey: 'd2cd0f1d-fd2c-41fa-9513-06ac4e6c2d13', 
  referenceLng: 'en',
  version: process.env.REACT_APP_LOCIZE_VERSION
};

if (!isProduction) {
  // locize-lastused
  // sets a timestamp of last access on every translation segment on locize
  // -> safely remove the ones not being touched for weeks/months
  // https://github.com/locize/locize-lastused
  i18n.use(LastUsed);
}

i18n
  // locize-editor
  // InContext Editor of locize
  .use(locizePlugin)
  // i18next-locize-backend
  // loads translations from your project, saves new keys to it (saveMissing: true)
  // https://github.com/locize/i18next-locize-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format: (value, format, lng) => {
        if (value instanceof Date) {
          return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
        }
        return value;
      }
    },
    backend: locizeOptions,
    locizeLastUsed: locizeOptions,
    saveMissing: !isProduction // you should not use saveMissing in production
  });

export default i18n;
