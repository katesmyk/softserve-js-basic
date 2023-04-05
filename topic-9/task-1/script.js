// 9-1.
// Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону, потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.
//     <h2 class="head">header1</h2>
//     <h2 class="head">header2 <span class="inner">inner elem1</span></h2>
//     <h2>header3</h2>
//     <h2 class="head">header4<span>inner elem2</span></h2>
//     <h2>header5</h2>

// let h2 = document.querySelectorAll('h2.head');
// for(let i = 0; i < h2.length; i++){
// 	 h2[i].style.backgroundColor = 'green';
// }

// let inner = document.querySelectorAll('h2.head span.inner');
// for(let i = 0; i < inner.length; i++){
// 	inner[i].style.fontSize = '35px';
// }

let h2 = $('h2.head');
h2.css('background-color', 'green');

let inner = $('h2.head span.inner');
inner.css('font-size', '35px');


