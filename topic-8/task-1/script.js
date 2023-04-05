// 8-1. 
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
// Приклад роботи:
// upperCase('regexp'); 
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"

function upperCase(row){
	let regExp = /^[A-Z]/;
	if(regExp.test(row)){
		return "String's starts with uppercase character";
	}else{
		return "String's not starts with uppercase character";
	}
}

console.log(upperCase('Examples of using metacharacters and quantifiers'));