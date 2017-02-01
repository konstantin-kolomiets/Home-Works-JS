//-----------task1-----------------------

let numbers = [25, 1];
let project = 'проект';
let team = 'команда';
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

let task1 = `${howMuch} ${sentence} ${numbers[0]}, ${numbers[1]}, ${team}`;

//----------task2-------------------------

let array = ['Он не был больше ни телом, к которому рано или поздно',
  'он обнаружил', 'Так, когда Будда достиг Просветления',
  '...', 'что больше не ощущает себя мишенью'];

let homeSentence = `${array[2]}, ${array[1]} ${array[4]}. ${array[0]} ${array[3]}`;

//-----------task3-------------------------

let myObj = {};
myObj['username'] = 'Vasya';
myObj.age = 20;
myObj.hobby = ['diving', 'hiking', 'singing'];
myObj['favorite music'] = 'rock';

//----------task4--------------------------

let sliceString = 'Ytube';
sliceString = sliceString.slice(0, 1) + 'ou' + sliceString[1].toUpperCase() + sliceString.slice(2);

console.log(sliceString);

//------------task5------------------------
let frameworks = [2, 'Angular', 'Angular2', 'React/Redux'];
let x = "google \
released " + 'new version\
 ' + frameworks[1] + Math.floor(frameworks[0]) + "\
But real speed is " + `${frameworks[frameworks.length - 1]}`;

x = `google released new version ${frameworks[1]}${frameworks[0]} But real speed is ${frameworks[3]}`;

console.log(x);
