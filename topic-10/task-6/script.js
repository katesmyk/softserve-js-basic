// За допомгою коду у нижче створюється масив, використовуючи цикл, до масиву записуються три функції. 
// Логіка функцій проста, в консоль виводиться значення лічильника на момент створення функції.
// На вигляд код виглядає логічним, але, якщо запустити цей код без змін, в консоль буде виведено двічі число 3.
// Використовуючи механізм замикання, внесіть у код зміни, щоб у консоль вивелися число 0 та число 2(відповідно до виклику). 

// var arr = [];

// for (var i = 0; i <= 2; i++) {
//    arr[i] = function () {
//       console.log(i);
//    };
// }

// arr[0](); // 0
// arr[arr.length - 1](); // 2

var arr = [];

for (var i = 0; i <= 2; i++) {
   arr[i] = (function (j) {
      return function () {
         console.log(j);
      };
   })(i);
}

arr[0](); // 0
arr[arr.length - 1](); // 2



// let arr = [];

// for (let i = 0; i <= 2; i++) {
//    arr[i] = function () {
//       console.log(i);
//    };
// }

// arr[0](); // 0
// arr[arr.length - 1](); // 2

