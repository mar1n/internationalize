import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Edit <1>src/App.js</1> and save to reload.",
            part2: "Learn React",
          },
          counter: "Changed language just once",
          counter_plural: "Changed language already{{count}} times"
        },
      },
      de: {
        translation: {
          description: {
            part1: "Ändere <1>src/App.js</1> und speichere um neu zu laden.",
            part2: "Lerne React",
          },
          counter: 'Die Sprache wurde erst ein mal gewechselt',
          counter_plural: 'Die Sprache wurde {{count}} mal gewechselt'
        },
      },
    },
  });

export default i18n;
