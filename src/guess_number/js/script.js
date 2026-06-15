/* HEADER */
const contraste = document.querySelector("#contrast");
const up = document.querySelector("#font-up");
const down = document.querySelector("#font-down");

const body = document.querySelector("body");
const label = document.querySelectorAll("label");
const small = document.querySelectorAll("small");
const p = document.querySelectorAll("p");
const button = document.querySelectorAll("button");
const input = document.querySelectorAll("input");

/* PASO 1 */
const paso1 = document.querySelector("#paso1");
const name1 = document.querySelector("#nombre");
const b1 = document.querySelector("#continuar1");
const out1 = document.querySelector("#error1");

/* PASO 2 */
const paso2 = document.querySelector("#paso2");
const num1 = document.querySelector("#num1");
const enunciado = document.querySelector("#enunciado");
const numMin = document.querySelector("#numMin");
const b2 = document.querySelector("#continuar2");

const num2 = document.querySelector("#num2");
const numMax = document.querySelector("#numMax");
const b3 = document.querySelector("#continuar3");

const out2 = document.querySelector("#error2");
const out3 = document.querySelector("#error3");

const textEnunciado = "El juego consiste en lo siguiente: Tendras que indicarnos un número del 1 al 10, después otro del 30 al 40 y en ese momento el juego seleccionará de manera aleatoria otro dentro del reango comprendido entre las dos cifras que has introducido. Tendrás 5 intentos para adivinarlo.";

/* PASO 3 */
const paso3 = document.querySelector("#juegoBtns");
const nose = document.querySelector("#deNuevo");

const enunciado2 = document.querySelector("#enunciado2")
const botones = document.querySelector("#botones")

const reset = document.querySelector("#reset");
const salir = document.querySelector("#no");

const out4 = document.querySelector("#error4");

let nombre = "";
let numero;
let numero1;
let numero2;
let intento = 0;
let end = false;

const setLevel = (lvl) =>
{
    out1.innerHTML = "";
    out2.innerHTML = "";
    out3.innerHTML = "";
    out4.innerHTML = "";

    if (lvl === 1)
    {
        name1.value = nombre;
        paso3.classList.add("erase");
        paso3.innerHTML = "";
        nose.classList.add("erase");
        paso1.classList.remove("erase");
    }
    else if (lvl === 2)
    {
        paso1.classList.add("erase");
        paso2.classList.remove("erase");
    }
    else if (lvl === 3)
    {
        paso2.classList.add("erase");
        paso3.classList.remove("erase");
    }
};

const resetGame = () =>
{
    intento = 0;
    end = false;
    setLevel(1);
};

const exitGame = () =>
{
    nombre = "";
    resetGame();
};

const checkNumber = (obj) =>
{
    const num = obj.target.textContent;

    const setError = () =>
    {
        let igual;

        if (num < numero)
            igual = "menor";
        else if (num > numero)
            igual = "mayor";

        out4.innerHTML = `Has elegido el ${num}, tu número es ${igual} que el pensado. Intento ${intento} de 5`;
    };

    const def = () =>
    {
        obj.target.classList.add("desactivated");
        intento++;
        out4.style.color = "red";
        out4.style.textAlign = "center";
    };

    if (end)
        return ;

    def();
    
    if (num == numero)
    {
        nose.classList.remove("erase");
        out4.innerHTML = `Enhorabuena ${nombre}, has ganado. El número elegido era ${numero}.`;
        out4.style.color = "green";
        end = true;
        return ;
    }
    if (intento === 5)
    {
        nose.classList.remove("erase");
        out4.innerHTML = `Lo sentimos ${nombre}, has agotado tus intentos: El número era el ${numero}. ¡Suerte en tu próxima partida!`;
        end = true;
        return ;
    }
    setError();
}

const crearEnunciado = () =>
{
    enunciado2.innerHTML = `${nombre}, tus números son el ${numero1} y el ${numero2}.`;
    enunciado2.innerHTML += "<br>Adivina el número dentro de ese rango que ha pensado el juego de manera aleatoria. Este es tu intento 1 de 5";
};

const crearBotones = () =>
{
    console.log("N1: " + numero1);
    console.log("N2: " + numero2);
    for (let i = Number(numero1); i <= Number(numero2); i++)
    {
        console.log("IDX: " + i);
        const btn = document.createElement("button");

        btn.textContent = i;
        btn.addEventListener("click", checkNumber);

        botones.appendChild(btn);
    }
};

const esNumero = (n) =>
{
    for (let i = 0; i < n.length; i++)
        if (n[i] < '0' || n[i] > '9')
            return false;
    return true;
}

const estaEntre = (n, a, b) =>
{
    const nbr = Number(n);

    if (a > b)
    {
        const c = b;
        b = a;
        a = c;
    }

    if (nbr < a || nbr > b)
        return false;
    return true;
};

const seleccionarNumero2 = () =>
{
    const setError = (msg, color) =>
    {
        out3.innerHTML = msg;
        out3.style.color = color;
    };

    const nbr = numMax.value.trim();
    const error = "Introduce un número del 30 al 40";
    
    if (nbr === "" || !esNumero(nbr) || !estaEntre(nbr, 30, 40))
        return setError(error, "red");

    const numbr = `Tu segundo número es el: ${nbr}`;
    setError(numbr, "orange");
    numero2 = nbr;

    setTimeout(() =>
    {
        crearEnunciado();
        crearBotones();
        numero = Math.floor(Math.random() * (numero2 - numero1) + 1);
        setLevel(3);
    }, 1500);
};

const seleccionarNumero1 = () =>
{
    const setError = (msg, color) =>
    {
        out2.innerHTML = msg;
        out2.style.color = color;
    };

    const nbr = numMin.value.trim();
    const error = "Introduce un número del 1 al 10";
    
    if (nbr === "" || !esNumero(nbr) || !estaEntre(nbr, 1, 10))
        return setError(error, "red");

    const numbr = `Tu primer número es el: ${nbr}`;
    setError(numbr, "orange");
    numero1 = nbr;

    num2.classList.remove("erase");
};

const pedirNombre = () =>
{
    const setError = () =>
    {
        out1.innerHTML = "Nombre no válido, vuelve aprobar teniendo en cuenta que no puedes introducir carácteres númericos."
        out1.style.color = "red";
    };

    const hayNumero = () =>
    {
        for (let i = 0; i < nombre.length; i++)
            if (nombre[i] >= '0' && nombre[i] <= '9')
                return true;
        return false;
    };

    const nextLevel = () =>
    {
        out1.innerHTML = `Bienvenido ${nombre}`;
        out1.style.color = "orange";
    };

    nombre = name1.value.trim();

    if (nombre === "" || hayNumero(nombre))
        return setError();

    nextLevel();
    setTimeout(() =>
    {
        enunciado.innerHTML = `Bienvenid@ ${nombre}. ${textEnunciado}`;
        numMin.value = "10";
        numMax.value = "30";
        num2.classList.add("erase");
        setLevel(2);
    }, 1500);
};

const makeContrast = () =>
{
    body.classList.toggle("bg-black");
    label.forEach(l => l.classList.toggle("text-white"));
    p.forEach(p => p.classList.toggle("text-white"));
    enunciado2.classList.toggle("text-white");
};

const font = (val) =>
{
    const getSize = (obj, val, min, max) =>
    {
        let size = window.getComputedStyle(obj);
        size = parseFloat(size.fontSize) + val;

        if (size > max)
            size = max;
        else if (size < min)
            size = min;
        return size;
    };

    const moreSize = (obj, val) =>
    {
        let val2;

        if (val > 0)
            val2 = 10;
        else
            val2 = -10;
        let size = window.getComputedStyle(obj);
        let width = parseFloat(size.width) + val;
        let height = parseFloat(size.height) + val;

        if (width > 70)
            width = 70;
        else if (width < 35)
            width = 35;

        if (height > 60)
            height = 60;
        else if (height < 30)
            height = 30;

        obj.style.width = width + "px";
        obj.style.height = height + "px";
    };

    const min = [16, 13];
    const max = [31, 25];

    label.forEach(e => e.style.fontSize = getSize(e, val, min[0], max[0]) + "px");
    p.forEach(e => e.style.fontSize = getSize(e, val, min[0], max[0]) + "px");
    
    input.forEach(e => e.style.fontSize = getSize(e, val, min[1], max[1]) + "px");
    button.forEach(e => e.style.fontSize = getSize(e, val, min[1], max[1]) + "px");

    for (let i = 0; i < botones.children.length; i++)
    {
        console.log(botones.children[i]);
        moreSize(botones.children[i], val);
    }

    small.forEach(e => e.style.fontSize = getSize(e, val, min[1], max[1]) + "px");
    
    enunciado2.style.fontSize = getSize(enunciado2, val, min[0], max[1]) + "px";


};

b1.addEventListener("click", pedirNombre);
b2.addEventListener("click", seleccionarNumero1);
b3.addEventListener("click", seleccionarNumero2);
reset.addEventListener("click", resetGame);
salir.addEventListener("click", exitGame);

contraste.addEventListener("click", makeContrast);
up.addEventListener("click", () => font(3));
down.addEventListener("click", () => font(-3));

contraste.addEventListener("keydown", (e) => 
{
    if (e.key === "Enter" || e.key === " ")
    {
        e.preventDefault();
        makeContrast();
    }
});

down.addEventListener("keydown", (e) => 
{
    if (e.key === "Enter" || e.key === " ")
    {
        e.preventDefault();
        font(-3);
    }
});

up.addEventListener("keydown", (e) => 
{
    if (e.key === "Enter" || e.key === " ")
    {
        e.preventDefault();
        font(3);
    }
});