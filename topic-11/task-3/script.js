// Створіть наступний асинхронний ланцюжок promise:
// new Promise(function (resolve, reject) {
//    // Запитуємо у користувача number за допомогою prompt()
//    // Якщо користувач ввів не число - викликаємо reject()
//    // Якщо користувач ввів число- викликаємо resolve(number)
// }).catch(function (error) {
//    return new Promise(function (resolve, reject) {
//       // Запитуємо у користувача number, до тих пір, поки він його не введе
//       // Після вводу числа - викликаємо resolve(number)
//    });
// }).then(function (result) {
//    // Вивід number у консоль
// });


new Promise(function (resolve, reject) {
    let number = prompt("Enter number");
    if (isNaN(number)) {
        reject("Error! Incorrect array!");
    } else {
        resolve(number);
    }

}).catch(function (error) {
    let number = "";
    return new Promise(function (resolve, reject) {
        function askNumber() {
            number = prompt("Enter a valid number");
            // TODO empty string isn't working
            if (number === null || number.trim() === "") {
                reject("Error! No data entered!");
            } else if (isNaN(number)) {
                askNumber();
            } else {
                resolve(number);
            }
        }
        askNumber();
    });
}).then(function (result) {
    console.log(result);
});