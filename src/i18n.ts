import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "../public/locales/en";
import { uz } from "../public/locales/uz";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    debug: true,
    lng: "uz",
    resources: {
      en: { translation: en },
      uz: { translation: uz },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
