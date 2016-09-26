/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var a = function add(numero1, numero2){
    return numero1 + numero2;
}
console.log(a(5,3))

function suma(){
    var resultado = 0;
    var i = 0;
    var nArgumentos = arguments.length;
    while(i < nArgumentos){
        resultado += arguments[i];
        i++;
    }
    return resultado;
}
console.log(suma());

var objeto = {};
objeto.nombre = 'Sergio';
objeto.apellidos= 'Peinado Perez';
objeto.nombrar = function (){
    return objeto.nombre+' ' +objeto.apellidos;
}
console.log(objeto.nombrar());