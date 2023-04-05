// 8-4. 
// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

function checkCard(card){
	let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
	if(regExp.test(card)){
		return true;
	}else{
		return false;
	}
}

console.log(checkCard('9999-9999-9999-9999'));