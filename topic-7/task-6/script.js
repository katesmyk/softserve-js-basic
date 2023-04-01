// Реалізуйте програму, яка відслідковуватиме зміну 
// розміру (ширини і висоти) вікна браузера 
// і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// https://user-images.githubusercontent.com/9075641/228463011-5302f615-86e6-41dc-b09a-62bed3564596.png

const body = document.querySelector('body');
const width = document.createElement('p');
const height = document.createElement('p');

body.appendChild(width);
body.appendChild(height);

window.addEventListener('resize', () => {
  width.textContent = `Width: ${window.innerWidth}`;
  height.textContent = `Height: ${window.innerHeight}`;
});