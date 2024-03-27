/*Completa la función que tomando dos números como argumento devuelva el más alto. */
function sum(numberOne, numberTwo) {
   if (numberOne >= numberTwo) {
      return numberOne;
   } else {
      return numberTwo;
   }
}

console.log(sum(5, 15)); // 15
console.log(sum(20, 20)); // 20
console.log(sum(50, 10)); // 50
