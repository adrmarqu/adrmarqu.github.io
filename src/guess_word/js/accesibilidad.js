const btn = document.querySelector("#btn-acc");
const nav = document.querySelector("#show");
const fondo = document.querySelector("#fondo");
const mas = document.querySelector("#mas");
const menos = document.querySelector("#menos");
const h2 = document.querySelector("h2");
const detalles = document.querySelectorAll(".detalles p");
const body = document.querySelector("body");
const reset = document.querySelector(".reset-btn");
const out = document.querySelector(".mostra");
const inp = document.querySelector(".inputs input");

let editor = false;

const setNav = () =>
{
    nav.classList.toggle("erase");
    editor = !editor;
};

const contraste = () =>
{
    if (!editor)
        return ;

    body.classList.toggle("bg-black");
    h2.classList.toggle("text-white");
    detalles.forEach(e => e.classList.toggle("text-white"));
};

const more = () =>
{
    const moreText = (obj, max, plus) =>
    {
        let size = window.getComputedStyle(obj);
        size = parseFloat(size.fontSize) + plus;

        if (size > max)
            size = max;
        return size;
    };

    const moreSize = () =>
    {
        const extraW = 20;
        const extraH = 8;
        const maxW = 250;
        const maxH = 72;

        let size = window.getComputedStyle(reset);
        let width = parseFloat(size.width) + extraW;
        let height = parseFloat(size.height) + extraH;

        if (width > maxW)
            width = maxW;
        if (height > maxH)
            height = maxH;

        reset.style.width = width + "px";
        reset.style.height = height + "px";
    }

    if (!editor)
        return ;

    let size = moreText(detalles[0], 26, 2);

    detalles.forEach(d => d.style.fontSize = size + "px");
    out.style.fontSize = moreText(out, 31, 3) + "px";
    reset.style.fontSize = moreText(reset, 23, 2) + "px";
    moreSize();
};

const less = () =>
{
    const lessText = (obj, min, plus) =>
    {
        let size = window.getComputedStyle(obj);
        size = parseFloat(size.fontSize) - plus;

        if (size < min)
            size = min;
        return size;
    };

    const lessSize = () =>
    {
        const extraW = 20;
        const extraH = 8;
        const minW = 100;
        const minH = 20;

        let size = window.getComputedStyle(reset);
        let width = parseFloat(size.width) - extraW;
        let height = parseFloat(size.height) - extraH;

        if (width < minW)
            width = minW;
        if (height < minH)
            height = minH;

        reset.style.width = width + "px";
        reset.style.height = height + "px";
    }

    if (!editor)
        return ;

    let size = lessText(detalles[0], 10, 2);

    detalles.forEach(d => d.style.fontSize = size + "px");
    out.style.fontSize = lessText(out, 10, 3) + "px";
    reset.style.fontSize = lessText(reset, 10, 2) + "px";
    lessSize();
};

/* Pulsar con el raton */
btn.addEventListener("click", setNav);
fondo.addEventListener("click", contraste);
mas.addEventListener("click", more);
menos.addEventListener("click", less);

/* Pulsar una tecla */
document.addEventListener("keyup", (e) => {if (e.key === "Alt") contraste();});
document.addEventListener("keyup", (e) => {if (e.key === "+") more();});
document.addEventListener("keyup", (e) => {if (e.key === "-") less();});
document.addEventListener("keyup", (e) => {if (e.key === "Escape") setNav();});

