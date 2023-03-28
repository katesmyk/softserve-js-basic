// Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад:
 let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };

function propsCount(mentor) {
	return Object.keys(mentor).length;
}

propsCount(mentor);  // 3
console.log(propsCount(mentor));  // 3




