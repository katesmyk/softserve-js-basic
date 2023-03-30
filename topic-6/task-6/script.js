 // Реалізувати логіку підрахунку ціни товару по його варіаціях
//  (шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.


const colorsButtonContainer = document.querySelector('.colors');
const sizeButtonContainer = document.querySelector('.sizes');
let currentShoeImg = document.querySelector('.shoe [color]:first-child');
const price = document.getElementById('outprice');

colorsButtonContainer.addEventListener('click', (event) => changeColor(event));


function changeColor(event) {
  if (event.target.classList.contains('color')) {
    const activeColor = document.querySelector('.colors .active');
    if (activeColor) {
      activeColor.classList.remove('active');
    }
    event.target.classList.add('active');
    const shoeColor = event.target.getAttribute('color');
    const newShoeImg = document.querySelector(`.shoe[color='${shoeColor}']`);
    if (currentShoeImg) {
      currentShoeImg.classList.remove('show');
    }
    if (newShoeImg) {
      newShoeImg.classList.add('show');
      currentShoeImg = newShoeImg;
    }
    price.textContent = event.target.dataset.price;

    const sizesContainer = document.querySelector('.sizes');
    const sizes = sizesContainer.querySelectorAll('.size');
    sizes.forEach(size => {
      const sizeColor = size.getAttribute('color');
      if (sizeColor === shoeColor) {
        size.style.display = 'inline-block';
      } else {
        size.style.display = 'none';
      }
    });
  }
}

const defaultColor = document.querySelector('.colors .active');
const defaultColorValue = defaultColor.getAttribute('color');
const sizes = document.querySelectorAll('.size');
sizes.forEach(size => {
  const sizeColor = size.getAttribute('color');
  if (sizeColor === defaultColorValue) {
    size.style.display = 'inline-block';
  } else {
    size.style.display = 'none';
  }
});

sizeButtonContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('size')) {
    const activeSize = document.querySelector('.sizes .active');
    if (activeSize) {
      activeSize.classList.remove('active');
    }
    event.target.classList.add('active');
    const sizePrice = event.target.dataset.price;
    if (sizePrice) {
      price.textContent = sizePrice;
    }
  }
});



changeColor({target: document.querySelector('.color')});

// Робила з AI, бо важко було трохи. І я не зрозуміла шо з ціною Buy now треба зробити.
