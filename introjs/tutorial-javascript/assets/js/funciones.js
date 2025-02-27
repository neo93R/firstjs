const botonesDiv = document.getElementById('botones');
const resultadoDiv = document.getElementById('resultado');

resultadoDiv.innerHTML = "Empezamos Funciones hoy!";
botonesDiv.innerHTML = `
    <button class="btn btn-primary" onclick="saludar()">Saludar</button>
    <button class="btn btn-primary" onclick="letraRepeat()">Repetir Letra</button>
    <button class="btn btn-primary" onclick="sumar()">sumar</button>
    <button class="btn btn-primary" onclick="division()">division</button> <br> <br>
    <button class="btn btn-primary" onclick="rotulo()">rotulo</button>

`;

function letraRepeat() {
    let letra = prompt("Ingrese una letra");
    let veces = parseInt(prompt("Ingrese la cantidad de veces que se repetirá la letra"));
    resultadoDiv.innerHTML = "";
    for (let i = 1; i <= veces; i++){
        resultadoDiv.innerHTML += letra;
    }
}

function saludar() {
    resultadoDiv.innerHTML = "Hola a todos!";
}

function sumar (){
    
    let a = parseInt(prompt("Ingrese el primer número"));
    let b = parseInt(prompt("Ingrese el segundo número"));
     let resultado = a + b;
    resultadoDiv.innerHTML = `El resultado de la suma es: ${resultado}`;
 }
 
 function division (){
    
    let a = parseInt(prompt("Ingrese el primer número"));
    let b = parseInt(prompt("Ingrese el segundo número"));
     let resultado = a / b;
    resultadoDiv.innerHTML = `El resultado de la división es: ${resultado}`;
 }

 function rotulo(){
    let texto = prompt("Ingrese el texto que desea rotular");
    let ancho = 50;
    let margen = (ancho - texto.length) / 2;
    let meida_margen= "";
    let letra = "-"
    for (let i = 0; i < texto.length; i++){
        meida_margen += letra
    }
    resultadoDiv.innerHTML = `<div class="text-center">${meida_margen}${texto}${meida_margen}</div><hr>`;
 }