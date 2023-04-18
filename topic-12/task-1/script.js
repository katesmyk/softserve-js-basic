// Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення message і цілочисельне значення затримки delay (в мс) і повертає Promise, який чекає задану кількість часу (використовуючи аргумент delay) і завершується повідомленням message.
// Приклад застосування функції:
// getPromise("test promise", 2000).then(function(data) {
//     console.log(data);        
// });

getPromise("test promise", 2000).then(function(data) {
    console.log(data);        
});

function getPromise(message, delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}