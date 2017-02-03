/* Task 0
Реализуйте функцию которая будет превращать трехмерный массив в двухмерный
а если массив двухмерный, тогда в трехмерный массив
// solution([ [1, a],[2, b],[3, c] ]) => [[1, 2, 3],[a, b, c]]
// solution([ [1, 3, 5],[2, 4, 6] ]) => [ [1, 2],[3, 4],[5, 6] ]
// solution([[]]) => []
*/
function solution(arr) {

  let cols = arr.length;
  let rows = arr[0].length;
  let newArr = [];
  if (cols == 2) {
    newArr = [[], [], []];
  }
  if (cols == 3) {
    newArr = [[], []];
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      newArr[j][i] = arr[i][j];
    }
  }
  return newArr
}

console.log(solution([[1, 3, 5], [2, 4, 6]]));
console.log(solution([[1, 'a'], [2, 'b'], [3, 'c']]));


/*
 2. Напишите функция которая преобразовывает открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [{a: "b"}]]] => [1, 2, {a: "b"}]
 
 */

function openBrackets(arr) {
  let newArr;
  for (let i = 0; i < arr.length; i++) {
    if (newArr === undefined) {
      newArr = [];
    }
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(openBrackets(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr
}

console.log(openBrackets([[1, 2], [3, [4]], 5, 10]));
console.log(openBrackets([1, [2, [{ a: "b" }]]]));


//-------------------------------------------
/*
Визуализируйте массив, если в коллекции есть свойство children, тогда создайте вложенный лист
name - свойство h1
children ul->li
Используйте innerHTML
*/

const navigation = [
  { name: 'Главная' },
  {
    name: 'Каталог',
    children: [
      { name: 'Компьютеры', children: [{ name: 'Ноутбуки' }, { name: 'Планшеты' }] }
    ]
  },
  { name: 'Профиль' }
];

const visualArray = (arr) => {
  let newList = `<ul>`;
  arr.forEach(el => {
    newList += `<li>`;
    let children = el.children;
    let name = el.name;
    if (name) {
      newList += `<h1>${name}</h1>`;
    }
    if (children) {
      newList += visualArray(children);
    }
    newList += `</li>`
  })
  return newList += `</ul>`
}

document.body.innerHTML = visualArray(navigation);
