/*Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false */
const nameFinder = ['Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'];
function finderName(param, name) {
   let result = param.indexOf(name);
   if (result == -1) {
      return false;
   } else {
      return [true, result];
   }
}

console.log(finderName(nameFinder, 'Steve')); //[true, 1]
console.log(finderName(nameFinder, 'David')); //false
console.log(finderName(nameFinder, 'Bruce')); //[true, 7]
