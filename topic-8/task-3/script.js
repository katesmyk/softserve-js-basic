// 8-3. 
// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

function changeString(row){
	let regExp = /(\S+)\s(\S+)/;
	return row.replace(regExp, '$2, $1');
}

console.log(changeString('Java Script'));