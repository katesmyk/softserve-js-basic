// 5.
// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), 
// dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
// 1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. 
// Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
//2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). 
// Вивести значення зарплати з цим коефіцієнтом.
//3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
//4) Вивести значення зарплати з новим experience.
//5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. 
// Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value 
//6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.


class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this._experience = 1.2;
  }

  showSalary() {
    return this.dayRate * this.workingDays;
  }

  showSalaryWithExperience() {
    return this.showSalary() * this._experience;
  }

  get experience() {
    return this._experience;
  }

  set experience(value) {
    this._experience = value;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);            
worker1.showSalary();
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

let workers = [worker1, worker2, worker3];

function sortWorkers(workers) {
  workers.sort((a, b) => b.showSalary() - a.showSalary());
  console.log('Sorted salary:');
  workers.forEach(worker => console.log(`${worker.fullName}: ${worker.showSalary()}`));
}

sortWorkers(workers);
