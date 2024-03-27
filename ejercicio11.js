/*Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. */
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
   let sumaTotal = 0;
   let sumaNumber = 0;
   let sumaString = 0;
   for (let element of param) {
      if (typeof element == 'number') {
         sumaTotal += element;
         sumaNumber += element;
      }
      if (typeof element == 'string') {
         sumaTotal += element.length;
         sumaString += element.length;
      }
   }
   return [sumaTotal, sumaNumber, sumaString];
}

let result = averageWord(mixedElements);
console.log(`Suma total: ${result[0]}`);
console.log(`Suma number: ${result[1]}`);
console.log(`Suma string: ${result[2]}`);
