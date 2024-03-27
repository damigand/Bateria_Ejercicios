/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante. */
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
   { name: 'Heura', isVegan: true },
   { name: 'Salmon', isVegan: false },
   { name: 'Tofu', isVegan: true },
   { name: 'Burger', isVegan: false },
   { name: 'Rice', isVegan: true },
   { name: 'Pasta', isVegan: true },
];

for (let food of foodSchedule) {
   if (!food.isVegan) {
      let random = Math.floor(Math.random() * fruits.length);
      let fruta = fruits[random];
      fruits.splice(random, 1);

      food.name = fruta;
      food.isVegan = true;
   }
}

console.log(foodSchedule);
