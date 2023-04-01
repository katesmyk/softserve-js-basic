// На сторінці потрібно реалізувати 2 випадаючих списки.
//  У першому містяться назви країн, у другому – назви міст. 
// Реалізувати роботу таким чином, щоб коли вибирається з лівого 
// випадаючого списку певна країна - в правому випадаючому  списку 
// з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. 
// Також потрібно нижче вивести назву обраної країни і місто.
// Код HTML-сторінки:
// <select name="country" id="country">
//         <option value="ger">Germany</option>
//         <option value="usa">USA</option>
//         <option value="ukr">Ukraine</option>
// </select>
                    
// <select name="cities" id="cities"></select>
// <p></p>

const country = document.getElementById('country');
const cities = document.getElementById('cities');
const p = document.querySelector('p');

const citiesList = {
  ger: ['Berlin', 'Salzburg', 'Potsdam'],
  usa: ['New York', 'Wasington', 'El Paso'],
  ukr: ['Kyiv', 'Lviv', 'Rivne']
};

// default view
citiesList[country.value].forEach(city => {
  let variant = document.createElement('option');
  variant.value = city;
  variant.textContent = city;
  cities.appendChild(variant);
});

country.addEventListener('change', () => {
  cities.innerHTML = '';
  citiesList[country.value].forEach(city => {
    let variant = document.createElement('option');
    variant.value = city;
    variant.textContent = city;
    cities.appendChild(variant);
  });
  
  p.textContent = `${country.options[country.selectedIndex].text} - ${cities.value}`;
});


cities.addEventListener('change', () => {
  p.textContent = `${country.value} - ${cities.value}`;
});



