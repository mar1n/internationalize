import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { DateTime } from "luxon";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (value instanceof Date) {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime[format]);
        }
        return value;
      },
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Edit <1>src/App.js</1> and save to reload.",
            part2: "Learn React",
          },
          counter: "Changed language just once",
          counter_plural: "Changed language already{{count}} times",
          footer: {
            date: "Today is {{date, DATE_HUGE}}",
            date_morning:
              "Good morning! Today is {{date, DATE_HUGE}} | Have a nice day!",
            date_afternoon: "Good afternoon! It's {{date, DATE_HUGE}}",
            date_evening: "Good evening! Today was the {{date, DATE_HUGE}}",
          },
        },
      },
      de: {
        translation: {
          description: {
            part1: "Ändere <1>src/App.js</1> und speichere um neu zu laden.",
            part2: "Lerne React",
          },
          counter: "Die Sprache wurde erst ein mal gewechselt",
          counter_plural: "Die Sprache wurde {{count}} mal gewechselt",
          footer: {
            date: "Heute ist {{date, DATE_HUGE}}",
            date_morning:
              "Guten Morgen! Heute ist {{date, DATE_HUGE}} | Wünsche einen schönen Tag!",
            date_afternoon: "Guten Tag! Es ist {{date, DATE_HUGE}}",
            date_evening: "Guten Abend! Heute war {{date, DATE_HUGE}}",
          },
        },
      },
    },
  });

export default i18n;
