// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і
//  реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. 
//          При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.
// https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png


const btnBlue = document.getElementById('btnBlue');
const btnPink = document.getElementById('btnPink');
const btnBrown = document.getElementById('btnBrown');
const link = document.getElementById('link');
const container = document.getElementsByClassName('btns-container')[0];

// btnBlue.addEventListener('click', () => {
//   container.style.backgroundColor = 'blue';
// });

// btnPink.addEventListener('dblclick', () => {
//   container.style.backgroundColor = 'pink';
// });

// btnBrown.addEventListener('mousedown', () => {
//   container.style.backgroundColor = 'brown';
// });

// btnBrown.addEventListener('mouseup', () => {
//   container.style.backgroundColor = 'white';
// });

// link.addEventListener('mouseover', () => {
//   container.style.backgroundColor = 'yellow';
// });

// link.addEventListener('mouseout', () => {
//   container.style.backgroundColor = 'white';
// });


function changeColor(color) {
  container.style.backgroundColor = color;
}

btnBlue.addEventListener('click', () => {
  changeColor('blue');
});

btnPink.addEventListener('dblclick', () => {
  changeColor('pink');
});

btnBrown.addEventListener('mousedown', () => {
  changeColor('brown');
});

btnBrown.addEventListener('mouseup', () => {
  changeColor('white');
});

link.addEventListener('mouseover', () => {
  changeColor('yellow');
});

link.addEventListener('mouseout', () => {
  changeColor('white');
});
