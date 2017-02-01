
/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные ей аргументы,
 * и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 * */

function solution1(x) {
  let string = '';
    return function(x){
      return string += x + ' ';
    }
}

let stringBuffer = solution1();

console.log(stringBuffer('Замыкания')); //Замыкания
console.log(stringBuffer('Использовать нужно')); // Замыкания Использовать нужно
console.log(stringBuffer('ПРивет')); // Замыкания Использовать нужно ПРивет

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку из скобочек и посчитайте,
 * что все скобочки закрываются корректно
 *
 * */
function validBraces(str){
  arr = str.split(''); 
  let tempArr=[];
  let openArray=['(','[','{'],
    closeArray = [')',']','}'];
    //debugger
      for (let i = 0;  arr.length > 1;){
        if (openArray.indexOf(arr[i]) === closeArray.indexOf(arr[i+1])){
          if( arr.length == 2){
          return true
          } else {
            arr.splice(arr[i],2);
            arr = tempArr.concat(arr);
            tempArr=[];
            i = 0;
            continue
          }
        }
        if (openArray.indexOf(arr[i]) != closeArray.indexOf(arr[i+1]) && openArray.filter(function(value){arr[i] === value;})){
              tempArr.push(arr[i]);
              arr.splice(arr[i],1)
              continue
        } else {
            return false
          }
       }
       return false 
  }



console.log(validBraces("(){}[]")); //=> returns true
console.log(validBraces( "(}" )); //=> returns false
console.log(validBraces( "[(])" ));// => returns false
console.log(validBraces( "([{{}[]}])" )); //=> returns true  

/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию,
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */


function makeCallback(fn) {
 
  for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000)
  }
  
setTimeout(function(){ fn();}, 11100)
}

makeCallback(function() {
  console.log('THE LAST LAST comment')
});

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму всех натуральных чисел
 * sum(5) //5+4+3+2+1
 * Вычисления должны кешироваться, если в функцию попадает закешированное значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */
 //debugger

 sum.cash={};

function sum(number){
  let value = number;
   for (let key in sum.cash){
     if (key == number){
       return sum.cash[key] + ' Значение взято из кеша';
    }
  }
   for (let i = value; i > 1; i--){
     value = value + (i - 1);
   }     
  sum.cash[number] = value;
  return sum.cash[number] + ' Значение кешировано'
}


console.log(sum(5)); // 15 Значение кешировано
console.log(sum(5)); // 15 Значение взято из кэша
console.log(sum(6)); // 21 Кешировано
console.log(sum(6)); // 21 Значение взято из кэша