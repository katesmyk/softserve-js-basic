// 7-1. 
// За допомогою методів об’єкта window створити:
//         1) нове вікно розміром 300х300 пікселів.
//         2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
//         3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
//         4) із затримкою 2 сек закрийте вікно.


// const newWin = window.open('', '', 'width=300,height=300');

// setTimeout(() => {
//   newWin.resizeTo(500, 500);
// }, 2000);
// setTimeout(() => {
//   newWin.moveTo(200, 200);
// }, 2000);
// setTimeout(() => {
//   newWin.close();
// }, 3000);


// let interactFunc = () => {
//   newWin.resizeTo(500, 500);
//   newWin.moveTo(200, 200);
// };

// setTimeout(interactFunc, 2000);
// setTimeout(() => { newWin.close();}, 3000);


let newWindow= window.open("", "", "width=300, height=300");

setTimeout(() => {
  newWindow.resizeTo(500, 500);
  setTimeout(() => {
    newWindow.moveTo(200, 200);
    setTimeout(() => {
      newWindow.close();
    }, 2000);
  }, 2000);
}, 2000);