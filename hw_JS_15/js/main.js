/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/
function solution(str) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let i = 0; i < alphabet.length; i++) {
    if (str.indexOf(alphabet[i]) >= 0) {
      continue
    } else {
      return false
    }
  }
  return true
}
console.log(solution("wyyga")); // false
console.log(solution("qwertyuioplkjhgfdsazxcvbnm")); // true
console.log(solution("ejuxggfsts")); // false
console.log(solution("qpwoeirutyalskdjfhgmznxbcv")); // true
console.log(solution("1232454654cdefghijklmnoppo")); // false


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

console.log(openBrackets([], [[1, 2], [3, [4]], 5, 10]));
console.log(openBrackets([], [1, [2, [{ a: "b" }]]]));

//-------------------------------------------

let users = [
  { name: 'Иван', lastname: 'Петров', email: 'IvanPetrov@ec.ua' },
  { name: 'Сергей', lastname: 'Сергеев', email: 'SergeiSergeev@ec.ua' },
  { name: 'Иван', lastname: 'Иванов', email: 'IvanIvanov@ec.ua' },
  { name: 'Александр', lastname: 'Александров', email: 'AlexAlex@ec.ua' },
  { name: 'Алекс', lastname: 'Смирнов', email: 'AlexSmirnov@ec.ua' },
  { name: 'Сергей', lastname: 'Волков', email: 'VolkovSergey@ec.ua' },
  { name: 'Мария', lastname: 'Шарапова', email: 'MariyaSharapova@ec.ua' },
  { name: 'Александр', lastname: 'Винник', email: 'AlexVinnik@ec.ua' },
  { name: 'Дарий', lastname: 'Смирнов', email: 'DariySmirnov@ec.ua' },
  { name: 'Елена', lastname: 'Лещенко', email: 'ElenaLeshenko@ec.ua' },
  { name: 'Ольга', lastname: 'Новикова', email: 'OlgaNovikova@ec.ua' },
  { name: 'Наталья', lastname: 'Шемякина', email: 'ShemyakinaN@ec.ua' },
  { name: 'Анна', lastname: 'Донцова', email: 'AnnaDontsova@ec.ua' },
  { name: 'Влад', lastname: 'Яма', email: 'VladYama@ec.ua' },
  { name: 'Кира', lastname: 'Воробьева', email: 'Kira1990@ec.ua' },
  { name: 'Виктор', lastname: 'Кривенко', email: 'ViktorKriv@ec.ua' },
]

class TelephoneBook {
  constructor(column1, column2, column3) {
    this.tableHeaders = [column1, column2, column3];
    this.users = users;
  }

  new(elemName) {
    return document.createElement(elemName);
  }

  createTableHeader(table) {
    const thead = this.new('thead');
    const tr = this.new('tr');
    table.append(thead);
    thead.append(tr);
    this.tableHeaders.forEach(el => {
      const th = this.new('th');
      tr.append(th);
      th.textContent = el;
    })
  }

  createTableBody(table) {
    const tbody = this.new('tbody');
    table.append(tbody);
    this.users.forEach(el => {
      let user = el;
      const tr = this.new('tr');
      tbody.append(tr);
      for (let key in user) {
        const td = this.new('td');
        tr.append(td);
        td.textContent = user[key];
      }
    })
  }

  render() {
    const body = document.body;
    const main = this.new('main');
    const container = this.new('div');
    const table = this.new('table');

    container.classList.add('container');
    table.classList.add('table', 'table-hover', 'contacts');
    
    body.append(main);
    main.append(container);
    container.append(table);
    this.createTableHeader(table);
    this.createTableBody(table);
  }
}

let myTelephone = new TelephoneBook('Name', 'Last Name', 'Email');
myTelephone.render();



