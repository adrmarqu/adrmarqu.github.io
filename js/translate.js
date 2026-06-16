import { translations } from './data/translations.js';

let prevLang = "es";

export const translate = (lang) =>
{
    if (prevLang === lang) return ;
    prevLang = lang;

    if (!translations[lang]) return ;

    const elementsToTranslate = document.querySelectorAll("[data-key]");

    elementsToTranslate.forEach(element =>
    {
        const key = element.getAttribute("data-key");

        const translatedText = translations[lang][key];

        if (translatedText) element.innerText = translatedText;
    });
};