// 1. 
// Напишіть клас Круг та реалізуйте функціонал:
// - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
// - Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
// - Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
// - Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
// - Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
// - Визначте метод перевірки попадання крапки до кола;
// - Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).


class Circle {
  constructor(radius, coordX, coordY) {
		this.radius = radius;
		this.coordX = coordX;
		this.coordY = coordY;
	}

  getCircleLength() {
    return 2 * Math.PI * this.radius;
  }

  static getCircleLenghtbyRadius(radius) {
    return 2 * Math.PI * radius;
  }

  static getCircleLenghtbyCoord(coordX, coordY) {
    return 2 * Math.PI * Math.sqrt(Math.pow(coordX, 2) + Math.pow(coordY, 2));
  }

  isPointInCircle(x, y) {
    const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
    return distance <= this.radius;
  }

  toString() {
    return `Circle with radius ${this.radius} and coordinates ${this.coordX}, ${this.coordY}`;
  }
}

let circle1 = new Circle(10, 20, 30);

console.log(circle1);
console.log(circle1.getCircleLength());
console.log(Circle.getCircleLenghtbyRadius(30));
console.log(Circle.getCircleLenghtbyCoord(20, 30));
console.log(circle1.isPointInCircle(2, 20));




