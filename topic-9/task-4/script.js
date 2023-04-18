// На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того,
// як користувач позначив будь-які 3 чекбокси, 
// всі чекбокси робить неактивними.

let checkbox = $('input[type="checkbox"]');
let count = 0;
checkbox.on('click', function(){
	count++;
	if(count >= 3){
		checkbox.attr('disabled', 'disabled');
	}
});
