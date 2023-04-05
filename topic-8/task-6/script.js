// 8-6. 
// Напишіть функцію, яка перевіряє правильність логіна. 
// Правильний логін - рядок від 2 до 10 символів, 
// що містить лише букви та числа, номер не може бути першим. 
// Функція має приймати рядок і знаходити усі числа в цьому рядку, 
// включаючи числа з плаваючою комою (наприклад, 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true 
//1.1, 3

// checkLogin('ee1*1ret3');
// false 
//1, 1, 3


function checkLogin(login){
	const regexpLogin = /^(?!\d)[a-zA-Z]{1}([a-zA-Z0-9]|\d+(?:\.\d+)?){1,9}$/;
	const regexpNumber = /\d+(?:\.\d+)?/g;
	console.log(login.match(regexpNumber));
	return regexpLogin.test(login);
}

console.log(checkLogin('ee1.1ret3'));

// Я не зрозуміла як написати цю регулярку для логіну, щоб вона відповідала умовам завдання. ( це комбо із ретро домашки)