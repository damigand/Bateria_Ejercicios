/*Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. */
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
   let palabra = '';
   let longitud = 0;
   for (let a = 0; a < param.length; a++) {
      if (param[a].length > longitud) {
         palabra = param[a];
         longitud = param[a].length;
      }
   }
   return palabra;
}

let word = findLongestWord(avengers);
console.log(word);
