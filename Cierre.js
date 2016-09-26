/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function persona(nombre, apellido, edad){
    var _nombre = nombre;
    var _apellido = apellido;
    var _edad = edad;
    return{
        nombrar: function() {return _nombre +" "+_apellido;},
        nombrarOficial: function() {return _apellido +" "+_nombre;}
    };
}
    var persona1 = persona("Sergio","Peinado");
    var persona2 = persona("Pepe", "Litronas");
    console.log(persona1.nombrar());
    console.log(persona1.nombrarOficial());
    console.log("****************")
    console.log(persona2.nombrar());
    console.log(persona2.nombrarOficial());
