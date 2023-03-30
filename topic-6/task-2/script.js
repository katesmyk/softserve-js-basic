// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
let bigHeader = document.querySelector('h1');
let firstParagraph = document.querySelector("#myDiv > p:nth-child(1)");
let secondParagraph = document.querySelector("#myDiv > p:nth-child(2)");
let thirdParagraph = document.querySelector("#myDiv > p:nth-child(3)");
let fourthParagraph = document.querySelector("#myDiv > p:nth-child(4)");
let list = document.querySelector("#myList");
let listItems = list.getElementsByTagName("li");
let invisibleList = document.querySelector("body > span");


bigHeader.style.fontSize = '50px';
bigHeader.style.background = 'rgba( 65, 229, 85 , 0.5)';
firstParagraph.style.fontWeight = 'bold';
secondParagraph.style.color = 'red';
thirdParagraph.style.textDecoration = 'underline';
fourthParagraph.style.fontStyle = 'italic';

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.display = 'inline-block';
  // TODO: join list items without spaces
  
}

invisibleList.style.display = 'none';