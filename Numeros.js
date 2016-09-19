var numero1 = 2; //tipo entero(number)
var numero2 = 2.2; //tipo real(number)
var cadena = 'hola mundo'; //tipo string
//********************************************
if (isNaN(numero1))
    console.log(numero1 +" No es un numero");
else
    console.log(numero1 +" Es un numero")

if (isNaN(numero2))
    console.log(numero2 +" No es un numero");
else
    console.log(numero2 +" Es un numero")

if (isNaN(cadena))
    console.log(cadena +" No es un numero");
else
    console.log(cadena +" Es un numero")
//operador typeof(te dice que tipo es cada uno)
console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof cadena);