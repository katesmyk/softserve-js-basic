// 4. 
// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// - поле, яке зберігає колір маркера;
// - поле, яке зберігає кількість чорнила в маркері (у відсотках);
// - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. 
// Продемонструвати роботу написаних методів


class Marker {
  constructor( inkColor, inkPercentage) {
    this.inkColor = inkColor;
    this.inkPercentage = inkPercentage;
    this._inkMinVal = 0.5;
  }
  
  printMethod(row) {
    // потрібно порахувати кількість символів і чи вистачить чорнила
    // якщо вистачить, то вивести рядок відповідним кольором
    // якщо ні, то вивести повідомлення про те, що чорнила не вистачає
    // якщо чорнила взагалі немає, то вивести повідомлення про те, що маркер треба заправити
    
    if( row.trim().length === 0) {
      console.log('Add some text to print');
    } else {
      let rowLenght = row.split('').filter(el => el !== ' ').length;
      let inkNeed = rowLenght * this._inkMinVal;
      if (this.inkPercentage >= inkNeed) {
        this.inkPercentage -= inkNeed;
          console.log(`You can print this %c${row} in ${this.inkColor} color`,  `color: ${this.inkColor}`);
        } else {
          console.log(`You need to refill the marker, because you need ${inkNeed - this.inkPercentage}% more`);
        }
      }
    }
  }

class RefillableMarker extends Marker {
  constructor(inkColor, inkPercentage, _inkMinVal) {
    super(inkColor, inkPercentage, _inkMinVal);
    this.inkFullVal = 100;
  }
  refillMarker() {
    let refill = this.inkFullVal - this.inkPercentage;
    if (this.inkPercentage <= this._inkMinVal) {
      refill = this.inkFullVal;
    } else {
      this.inkPercentage += refill;
    }
    console.log(`Your marker is refilled on ${refill}%`)
  }
}


const marker = new RefillableMarker('blue', 12);
marker.printMethod('sakjfkasfjksdjfksdjdfvdfgfgdfgdfhdff');
marker.refillMarker();