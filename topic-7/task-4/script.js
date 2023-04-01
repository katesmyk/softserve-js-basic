// Реалізуйте програму, 
// яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.
// https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png

const select = document.getElementById('names');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  select.remove(select.selectedIndex);
  if (select.length === 0) {
    btn.style.display = 'none';
    select.style.display = 'none';
  }
});
