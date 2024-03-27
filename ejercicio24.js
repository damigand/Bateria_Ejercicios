/*Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos. */
const products = [
   { name: 'Funko Dr. Strange', sellCount: 10 },
   { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
   { name: 'Sable laser FX', sellCount: 23 },
   { name: 'Varita de Voldemort', sellCount: 6 },
];

//uso for in para variar un poco, aunque sería mejor for of
totalSellCount = 0;
for (let product in products) {
   totalSellCount += products[product].sellCount;
}

console.log(`Ventas totales: ${totalSellCount}`);
