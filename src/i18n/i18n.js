import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnJson from './translation/en.json';
import RuJson from './translation/ru.json';

const setLanguage = () => {
    const language = localStorage.getItem('i18nextLng');
    if (language) return language;

    localStorage.setItem('i18nextLng', 'en');
    return 'en'
}

const resources = {
    en: {
        translation: EnJson
    },
    ru: {
        translation: RuJson
    },
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: setLanguage(),
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        },

    });

export default i18n;