// Написати умовну конструкцію, 
// яка в залежності від часу доби виводитиме відповідне привітання. 
// Потрібно отримати реальний час доби із системи. 
// Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.


let currentTime = new Date().getHours();
console.log(currentTime);

if (currentTime >= 23 || currentTime < 5) {
	console.log('Доброї ночі');
} else if (currentTime >= 5 && currentTime < 11) {
	console.log('Доброго ранку');
} else if (currentTime >= 11 && currentTime < 17) {
	console.log('Доброго дня');
} else if (currentTime >= 17 && currentTime < 23) {
	console.log('Доброго вечора');
}

switch (true) {
	case (currentTime >= 23 || currentTime < 5):
		console.log('Доброї ночі');
		break;
	case (currentTime >= 5 && currentTime < 11):
		console.log('Доброго ранку');
		break;
	case (currentTime >= 11 && currentTime < 17):
		console.log('Доброго дня');
		break;
	case (currentTime >= 17 && currentTime < 23):
		console.log('Доброго вечора');
		break;
}
