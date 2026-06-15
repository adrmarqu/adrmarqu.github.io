const hint = document.querySelector(".pista span");
const left = document.querySelector(".restantes span");
const err = document.querySelector(".letrasErroneas span");
const inputs = document.querySelector(".inputs");

let intentos;
let end;

/* Donde se guardan las letras equivocadas */
const arrayLetras = [];

/* Donde se guardan las letras de la palabra que faltan */
const arrayPalabra = [];

/* La lista de inputs que forman la palabra */
let wordInputs;

const startGame = () =>
{
    const num = Math.floor(Math.random() * listado.length);

    palabra = listado[num].palabra;
    hint.innerHTML = listado[num].pista;

    if (palabra.length < 7)
        intentos = 6;
    else
        intentos = 8;

    left.innerHTML = intentos;
    left.style.color = "orangered";

    inputs.innerHTML = "";
    out.innerHTML = "";
    err.innerHTML = "";
    err.style.color = "orangered";
    arrayPalabra.length = 0;
    arrayLetras.length = 0;

    for (let i = 0; i < palabra.length; i++)
    {
        arrayPalabra.push(palabra[i]);

        const input = document.createElement("input");
        input.type = "text";
        input.readOnly = true;
        input.tabIndex = -1;

        inputs.appendChild(input);
    }

    wordInputs = document.querySelectorAll(".inputs input");
    end = 0;
};

const winGame = () =>
{
    console.log(msg);
    const num = Math.floor(Math.random() * msg.length);
    out.innerHTML = msg()[num];
    left.innerHTML = "Haz click en volver a empezar";
    err.innerHTML = "Has ganado";

    left.style.color = "green";
    err.style.color = "green";
    out.style.color = "green";

    end = 1;
};

const loseGame = () =>
{
    const num = Math.floor(Math.random() * msgError.length);
    out.innerHTML = msgError()[num];
    out.style.color = "red";
    err.innerHTML = "No tienes mas intentos";

    /* Completar palabra */
    for (let i = 0; i < palabra.length; i++)
        wordInputs[i].value = palabra[i].toUpperCase();

    out.style.color = "red";
    end = 1;
};

const checkInput = (event) =>
{
    const win = () =>
    {
        for (let i = 0; i < arrayPalabra.length; i++)
            if (arrayPalabra[i] != 0)
                return false;
        return true;
    };

    const letra = event.key;

    if (!(/^[a-zA-Z]$/.test(letra)) || end || editor)
        return ;

    /* Mirar si la letra existe */

    let found = false;
    for (let i = 0; i < palabra.length; i++)
    {
        if (palabra[i] === letra)
        {
            found = true;
            arrayPalabra[i] = 0;
            wordInputs[i].value = letra.toUpperCase();
        }
    }

    /* Mirar si ya has fallado esa letra */

    for (let i = 0; i < arrayLetras.length && !found; i++)
        if (arrayLetras[i] === letra)
            found = true;


    /* Si has fallado una nueva letra */

    if (!found)
    {
        intentos--;
        left.innerHTML = intentos;
        arrayLetras.push(letra);
    
        err.innerHTML = arrayLetras.join(", ");
    }

    /* Mirar si la partida acaba */

    if (intentos === 0)
        loseGame();
    else if (win())
        winGame();
    
};

document.addEventListener("DOMContentLoaded", startGame);
reset.addEventListener("click", startGame);
document.addEventListener("keyup", checkInput);