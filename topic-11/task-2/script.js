// Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. 
// Функція повинна повернути Promise, робота якого завершується поверненням добутку елементів масиву, 
// якщо вони є типу Numbers, або повідомленням "Error! Incorrect array!" 
// у випадку, якщо хоча б 1 елемент масиву нечисловий.
// Приклад застосування функції:
// calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
// // "Error! Incorrect array!"

function calcArrProduct(arr) {
    return new Promise(function(resolve, reject) {
        let result = 1;
        for (let i = 0; i < arr.length; i++) {
            // if (typeof arr[i] === "number") {
            //     result *= arr[i];
            // } else {
            //     reject("Error! Incorrect array!");
            // }
            if (isNaN(arr[i])) {
                reject("Error! Incorrect array!");
            } else {
            result *= arr[i];
            }
        }
        resolve(result);
    });
}

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));