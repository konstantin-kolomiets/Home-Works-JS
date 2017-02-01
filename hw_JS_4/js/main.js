//-----------task1-----------------------
/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
*/

function numbersBetween(a, b) {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

        let arr = [];
        for (let i = a + 1; i < b; i++){
            arr.push(i);
        }
        return arr;
}

console.log(numbersBetween(1, 5)) // 2,3,4
console.log(numbersBetween(3, 6)) // 4,5
console.log(numbersBetween(12, 15)) // 13,14

//----------task2--------------------------
/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
     Расчет чисел должен идти до 100*/

for (let i = 0; i < 100; i++){
    console.log(fizzBuzz(i));
}

function fizzBuzz(myNumber) {
    let num = '';
    if (myNumber%3 == 0){
        num += 'Fizz';
    }
    if (myNumber%5 == 0){
        num += 'Buzz';
    }
    if (!num.length){
        num = myNumber;
    }
   return num;
}


//---------task3---------------------------

/*
 3. Напишите функцию которая принимает 1 аргумент - массив 
   И возвращает новый массив содержащий типы значений переменных
*/
let myArr = [5, 8, 'foo', null, false, '', 'string', undefined, NaN];

function makeArrayFromTypesOfElements(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
            newArr[i] = typeof arr[i];
        }
        return newArr;
}
console.log(makeArrayFromTypesOfElements(myArr));

/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты. 
 Напишите функцию которая внутри цикла проходится по каждому элементу массива 
    И проверяет какой тип данных содержит свойство age, если тип данных NaN, тогда добавляет данному объекту свойство unknownAge: true
    Далее создайте новый массив содержащий все объекты есть свойство unknownAge:true
*/
let array = Array.from({ length: 35 }).map((value, index) => index % 2 ? { age: index + 2 } : { age: NaN });
console.log(array); //[ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
console.log(array.length); // 35

function addPropertyToObject(arr){
    let newArr1 = [];
    for (let i = 0; i < arr.length; i++) {
            if (isNaN (arr[i].age)){
                arr[i].unknownAge = true;
                newArr1.push(arr[i]);
            }
    }
    return newArr1;
}

console.log(addPropertyToObject (array));

//------------------------------------
/*Написать функцию, которая возвращает 1 массив, содержащий внутри себя 2 массива.

Первый массив четные числа в обратном порядке. Второй массив нечетные числа в обычном порядке*/


let myArr1 = [1,2,3,4,5,6,7,8,9];

function evenOdd(arr) { 
    let evenArr = [];
    let oddArr = [];
    let reverseEvenArr=[];

        for ( let i = 0; i < arr.length; i++){
            if (arr[i] % 2 == 0){
                evenArr.push(arr[i]);
            }
            else {
                 oddArr.push(arr[i]);
            }
        }
         for (let j = evenArr.length - 1; j >= 0; j--){
            reverseEvenArr.push(evenArr[j]);
        }
        return [ evenArr, oddArr];
    }

console.log(evenOdd(myArr1)) //[ [8,6,4,2], [1,3,5,7,9]

let myArr2 = [1,2,3,4,5,6,7,8,9];

//--------------------variant2-------------------------
function evenOdd1(arr) { 
    let evenArr1 = [];
    let oddArr1 = [];

        for ( let i = 0; i < arr.length; i++){
            if (arr[i] % 2 == 0){
                evenArr1.push(arr[i]);
            }
            else {
                 oddArr1.push(arr[i]);
            }
        }
        evenArr1.reverse();
        return [ evenArr1, oddArr1];
    }

console.log(evenOdd1(myArr1)) //[ [8,6,4,2], [1,3,5,7,9]