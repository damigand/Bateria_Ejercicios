/*Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript. */
const products = [
   'Camiseta de Pokemon',
   'Pantalón coquinero',
   'Gorra de gansta',
   'Camiseta de Basket',
   'Cinrurón de Orión',
   'AC/DC Camiseta',
];

for (let a = 0; a < products.length; a++) {
   if (products[a].includes('Camiseta')) {
      console.log(products[a]);
   }
}
