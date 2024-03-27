/*Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. */
const alien = {
   name: 'Wormuck',
   race: 'Cucusumusu',
   planet: 'Eden',
   weight: '259kg',
};

for (let dato in alien) {
   console.log(alien[dato]);
}
