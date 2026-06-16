import { translate } from "./translate.js";

/* Contrast */
const body = document.querySelector("body");
const darkBtn = document.getElementById("theme-toggle");

/* Language */
const dropdown = document.getElementById("lang-dropdown");
const langRes = document.getElementById("lang");
const langEs = document.getElementById("lang-es");
const langCa = document.getElementById("lang-ca");
const langEn = document.getElementById("lang-en");

// Contrast
let mode = false;
// Language
let lang = 'es';

/* Change contrast */
const handleContrast = () =>
{
    body.classList.toggle("light-mode");
    mode = !mode;

    if (mode) darkBtn.innerText = "☀️";
    else darkBtn.innerText = "🌙";
};

/* Open dropdown with button */
const handleDropdown = () => dropdown.classList.toggle("open");
/* Close dropdown */
const closeDrop = () => dropdown.classList.remove("open");

/* Close dropdown with click outside dropdown */
const handleDropClick = (target) =>
{
    if (!dropdown.contains(target) && target !== langRes) closeDrop();
};

/* Change the language */
const changeLanguage = (obj) =>
{
    lang = obj.value;
    dropdown.classList.remove("open");
    translate(lang);
};

/* Contrast event */
darkBtn.addEventListener("click", handleContrast);

/* Dropdown event */
langRes.addEventListener("click", handleDropdown);
document.addEventListener("click", (e) => handleDropClick(e.target));

/* Language event */
langEs.addEventListener("click", (e) => changeLanguage(e.currentTarget));
langCa.addEventListener("click", (e) => changeLanguage(e.currentTarget));
langEn.addEventListener("click", (e) => changeLanguage(e.currentTarget));