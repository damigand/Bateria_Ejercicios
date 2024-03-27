/*Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  */
const counterWords = ['code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'upgrade', 'code'];
function repeatCounter(param) {
   //Creo un array para guardar [palabra - contador].
   let finalCounter = [];
   for (let word of param) {
      let repetida = false;
      //Recorro el array finalCounter para sumar los contadores de las palabras repetidas.
      for (let counter of finalCounter) {
         if (counter[0] == word) {
            counter[1] += 1;
            repetida = true;
         }
      }
      //Si en el anterior bucle no ha habido ninguna coincidencia, significa que es una palabra nueva y la añado.
      if (!repetida) {
         finalCounter.push([word, 1]);
      }
   }
   return finalCounter;
}

let a = repeatCounter(counterWords);
console.log(a);
