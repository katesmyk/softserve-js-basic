// Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. 
// Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, 
// ключами якого є значення з першого масиву, 
// а значеннями Map - значення з другого масиву. 
// Після цього функція повертає даний об'єкт Map.
// Приклади використання функції:

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder(keys, values) {
  let map = new Map();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], values[i]);
  }
  return map;
}


let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"