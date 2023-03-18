// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, 
// але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr);
//  /* 

// [5, 12, 99, 2, 2, 4, 3],
// [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”] 


let arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];

let arrNew = function(arr) {
  let filtredArrayOnlyNumbers = [];
  let filtredArrayOtherData = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      filtredArrayOnlyNumbers.push(arr[i]);
    } else if (Array.isArray(arr[i])) { 
      for (let j = 0; j < arr[i].length; j++) {
        if (typeof arr[i][j] === 'number') {
          filtredArrayOnlyNumbers.push(arr[i][j]);
        } else {
          filtredArrayOtherData.push(arr[i][j]);
        }
      }
    } else {
      filtredArrayOtherData.push(arr[i]);
    }
  }
  return [filtredArrayOnlyNumbers, filtredArrayOtherData];
}

let arrNewResult = arrNew(arr);
console.log(arrNewResult);
