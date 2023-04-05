// 8-2. 
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на 
// їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true


function checkEmail(email){
	let regExp = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
	return regExp.test(email);
}

console.log(checkEmail(".`11222#$%^&Loca-lhost2@local-host.gmail"));