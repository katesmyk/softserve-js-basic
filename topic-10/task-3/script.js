// Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
// Якщо параметри типу Number відсутні, повертає число 0.
// function mul(/* ваш код */) {
//    // Ваш код
// }
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0


function mul(...args) {
  let result = 1;
  let hasNumber = false;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "number") {
      result *= args[i];
      hasNumber = true;
    }
  }
  return hasNumber ? result : 0;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
