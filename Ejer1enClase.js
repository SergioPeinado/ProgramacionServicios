/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cadenas(cadena){
    var _cadena = cadena;
    var _cadenaInvertida = function(){
    var resultado = "";
      for(var i= _cadena.length-1;i >= 0;i--)
          resultado += _cadena.charAt(i);
        return resultado;
    };
    /*var _cadenaInvertida="";
    (function(){
        for(var i= _cadena.legth -1; i>=0; i--)
            _cadenaInvertida += _cadena.charAt(i);
    })();
     */
    return{
        esCadena: function(){return isNaN(_cadena);},
        longitudCadena: function(){return _cadena.length;},
        cadenaMayuscula: function(){return _cadena.toUpperCase();},
        cadenaInversa: function(){return _cadenaInvertida();}
    }
}

var cadena1 = cadenas('123');
var cadena2 = cadenas('1a3');
var cadena3 = cadenas('abc');
console.log(cadena1.esCadena());
console.log(cadena2.esCadena());
console.log(cadena3.esCadena());
console.log(cadena1.longitudCadena());
console.log(cadena2.longitudCadena());
console.log(cadena2.cadenaMayuscula());
console.log(cadena3.cadenaMayuscula());
console.log(cadena3.cadenaInversa());