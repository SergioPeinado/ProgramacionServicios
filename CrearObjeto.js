//crando un objeto sin propiedades
//posteriormente se añaden
var objeto1={}
objeto1.nombre = "Sergio";
objeto1.edad = 22;
console.log(objeto1);
//creando un objeto con propiedades
//posteriormente quitamos alguna de ellas
var objeto2 = {
    nombre:'Pancracio',
    edad: 18
}
console.log(objeto2);
delete objeto2.edad;//borrando objetos
console.log(objeto2);


