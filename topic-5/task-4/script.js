// 4. 
// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// - поле, яке зберігає колір маркера;
// - поле, яке зберігає кількість чорнила в маркері (у відсотках);
// - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. 
// Продемонструвати роботу написаних методів

class Marker {
  constructor(inkColor, inkPercentage) {
    this.inkColor = inkColor;
    this.inkPercentage = inkPercentage;
    this._inkMinVal = 0.5;
  }

  printMethod(row) {
    if (row.trim().length === 0) {
      console.log('Add some text to print');
    } else {
      let rowLength = row.split('').filter(el => el !== ' ').length;
      let inkNeed = rowLength * this._inkMinVal;
      if (this.inkPercentage >= inkNeed) {
        this.inkPercentage -= inkNeed;
        console.log(`You can print this %c${row}`, `color: ${this.inkColor}`);
      } else if (inkNeed > this.inkPercentage && this.inkPercentage >= this._inkMinVal) {
        let maxChars = Math.floor(this.inkPercentage / this._inkMinVal);
        let printRow = row.slice(0, maxChars);
        console.log(`Please refill your marker, you have inks only on this part of your text %c${printRow}`, `color: ${this.inkColor}`);
        this.inkPercentage = 0;
      } else {
        console.log(`Not enough ink in the ${this.inkColor} marker.`);
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
marker.printMethod('Mark is awesome. He like play football and drink juice, eat banana and candies');
marker.refillMarker();