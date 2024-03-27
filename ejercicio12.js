/*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados */
const duplicates = ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken', 'onion rings', 'pasta', 'soda'];
function removeDuplicates(param) {
   for (let a = 0; a < param.length; a++) {
      for (let b = 0; b < param.length; b++) {
         if (a != b && param[a] == param[b]) {
            param.splice(b, 1);
         }
      }
   }
   return param;
}

let result = removeDuplicates(duplicates);
console.log(result);
