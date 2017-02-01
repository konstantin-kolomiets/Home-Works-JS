//-----------task1-----------------------
/*
1. Переместите 0 в конец массива, остальные числа должны остаться неизменными*/
let myArr = [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ];
function moveZeroToTheEnd(arr) {
    let arrayOfZeros = [];
    let zero = 0;
    for (let i = 0; i < arr.length;){
        if (arr[i] === 0){
        arr.splice(i, 1);
        arrayOfZeros.push(zero); 
        continue
        }
        else { 
            i++;
        }
    }
    return arr.concat(arrayOfZeros);
}
console.log(moveZeroToTheEnd(myArr));

//-----------task2-----------------------
/*
2. Верните сумму двух найменьших чисел в массиве*/
let arr1 = [0,200,10,25,15];
function sumOfLeastNumbers(arr){
    function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    }
    let arrSorted = arr1.sort(compareNumeric);
    let sum = arrSorted[0] + arrSorted[1];
    return sum;
}

console.log(sumOfLeastNumbers(arr1))

//-----------task3-----------------------

/*3. Напишите функцию которая меняет местами имя и фамилию*/

function nameShuffler(name){
    let arrFromNameSername = name.split (' ');
    arrFromNameSername.reverse();
    return arrFromNameSername.join(' ');
}

console.log(nameShuffler('john McClane'));// "McClane john"

//------------task4-------------------------

/*
4. Напишите функцию которая принимает массив с именами и возвращает массив
   в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/
let arrNames = ['KARLY', 'DANIEL', 'KELSEY'];
function capMe(arr){
    for (let i = 0; i < arr.length; i++){
        let name = arr[i];
        arr[i] = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
    }
    return arr;
}

console.log(capMe(arrNames));

//-----------------------------------
//@SUPER


/* 1. Найдите число отсутствующее в заданной последовательности*/
  

 let arr2 = [1,3,5,9];
 let arr3 = [0,8,16,32];
 let arr4 =[4,6,8,10];
 function findSkippedNumber(arr){
    let temp, step, index, skippedNumber;
    let tempArr =[];
    for(let i = 0; i < arr.length-1; i++){
        temp = arr[i+1] - arr[i];
        tempArr.push(temp);
        }
        for(let i = 0; i < tempArr.length-1; i++){
            if (tempArr[i] == tempArr[i+1]){
                step = tempArr[i];
                continue
            }
             if (tempArr[i] > tempArr[i+1]){
                step = tempArr[i+1];
                index = i;
            }
            else
            {
                step = tempArr[i];
                index = i+1;
            }
        }
        if(!index && arr[0] - step > 0){
            return skippedNumber= arr[0] - step;
        }
        if(!index && arr[0] - step < 0){
            return skippedNumber= arr[arr.length-1] + step;
        }
        return skippedNumber = arr[index]+step;
    }

console.log(findSkippedNumber(arr2));
console.log(findSkippedNumber(arr3));
console.log(findSkippedNumber(arr4));
//----------------------------------

/*
 2. Напишите функция которая преобразовывает открывает скобки всех вложенных внутри массивов
    Необходимо реализовать рекурсивный фызов функции.
    Функция должна открывать любое количество внутренних массивов
   
   example:
    [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
    [25,10,[10,[15]]] => [25,10,10,15]
 
 */

let arr5 = [[1,2],[3,[4]],5, 10];

function openBrackets(arr, item){
    //debugger;
    if(item.constructor === Array){
        for(let i = 0; i < item.length; i++){
            arr.concat(openBrackets(arr, item[i]));
        }
    }
    else{
        arr.push(item)
    }   
    return arr;
}

console.log(openBrackets([],arr5));