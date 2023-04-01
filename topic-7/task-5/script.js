// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", 
// при наведенні на кнопку виводитиме повідомлення "Mouse on me!", 
// а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
// Приклад роботи:
// https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png 

const btn = document.getElementById('btn');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  let message = document.createElement('p');
  message.textContent = 'I was pressed!';
  body.appendChild(message);
});

btn.addEventListener('mouseover', () => {
  let message = document.createElement('p');
  message.textContent = 'Mouse on me!';
  body.appendChild(message);
});

btn.addEventListener('mouseout', () => {
  let message = document.createElement('p');
  message.textContent = 'Mouse is not on me!';
  body.appendChild(message);
});

