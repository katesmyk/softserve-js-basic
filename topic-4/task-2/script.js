// Створіть функцію checkAge(), яка запитує у користувача його ім'я, 
// вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, 
// якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь-якому полі
//  (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). 
//  У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. 
//  У всіх інших випадках користувач отримає доступ до перегляду фільму.
// У блоці catch передбачена можливість виведення назви та опису помилки.


let userName = prompt('Введіть ім\'я');
let userAge = prompt('Введіть вік');
let userStatus = prompt('Введіть статус');

function checkAge() {
	try {
		if(!userName || !userAge || !userStatus) {
				throw new Error('The field is empty! Please enter your age');
			} else if (userAge < 18 || userAge >= 70) {
				throw new RangeError('Ви не відповідаєте віковим критеріям');
			} else if (userStatus !== 'адмін' || userStatus !== 'модератор' || userStatus !== 'користувач') {
				throw new EvalError('Ви не відповідаєте статусу');
			} else if (isNaN(userAge)) {
				throw new EvalError('Введіть число');
			} else {
				alert('Доступ надано');
			}	
		} catch (e) {
			alert(e.name + ': ' + e.message);
			return
		}
		alert('Доступ надано');
	}

	checkAge();