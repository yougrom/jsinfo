// Условное ветвление: if, '?'
// Инструкция «if»
// Инструкция if (...) принимает условие в скобках и выполняет код в фигурных скобках, если это условие верно.
// Если условие ложно, выполнение кода в фигурных скобках пропускается.
// Например:
let year = 2015;
if (year == 2015) {
    console.log('You are right!');
}

// Блок «else»
// Если условие в инструкции if ложно, то выполнится код в блоке else.

// Например:
let year1 = 2018;
if (year1 == 2015) {
    console.log('You are right!');
} else {
    console.log('You are wrong!'); // Любое значение кроме 2015
}

// Несколько условий: «else if»
// Инструкция else if позволяет задать несколько вариантов условий.
// Например:
let year2 = 2018;
if (year2 < 2015) {
    console.log('Too early...');
} else if (year2 > 2015) {
    console.log('Too late...');
} else {
    console.log('Exactly!');
}

// Example 
const year3= 2024;
let message3 = null;
if (year === 2024) {
  message3 = 'Start learn'; 
} else {
  message3 = 'End year';
}
console.log(message3);

// Example ?
const year4= 2024;
let message4 = year4 === 2024 
  ? 'Start learn' 
  : 'End year';
console.log(message4);

// Условный оператор „?“
// Инструкция if (...) else (...) можно заменить на условный оператор ?:
// Например:
let accessAllowed;
let age = 18;
if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
console.log(accessAllowed); // false

// Оператор представлен знаком вопроса ?. Его также называют «тернарный», так как этот оператор, единственный в своём роде, имеет три аргумента.
// Синтаксис:
let result = условие ? значение1 : значение2;
// Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2.
// Например:
let accessAllowed1 = age > 18 ? true : false;
console.log(accessAllowed1); // false
// Оператор вопросительного знака имеет низкий приоритет, поэтому он выполняется после сравнения >.

// В примере выше вы можете избежать использования оператора вопросительного знака ?, т.к. сравнение само по себе уже возвращает true/false:
// то же самое
let accessAllowed2 = age > 18;

// Несколько операторов „?“
// Если нужно проверить несколько условий, то можно использовать несколько операторов ?.
// Например:
let age1 = 18;
let message = age1 < 3 ? 'Hi, baby!' :
    age1 < 18 ? 'Hello!' :
        age1 < 100 ? 'Greetings!' :
            'What an unusual age!';
console.log(message); // Greetings!

// Нетрадиционное использование „?“
// Иногда оператор «вопросительный знак» ? используется в качестве замены if:
// Например:
let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ?
    console.log('Right!') : console.log('Wrong.');

// Задачa 1
// Выведется ли alert?
if ("0") {
  alert( 'Привет' ); // Привет - Выведется потому что строка не пустая
}

// Задачa 2
let value = 'ECMAScript1';
if ( value == 'ECMAScript') {
  console.log('верно!');
} else {
  console.log('неверно!');
}

// Задачa 3
// Перепишите конструкцию if с использованием условного оператора '?':

let result1;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result1 = a + b < 4 ? 'Мало' : 'Много';

// Задачa 4
// Перепишите if..else с использованием нескольких операторов '?'.

let message1;

if (login == 'Сотрудник') {
  message1 = 'Привет';
} else if (login == 'Директор') {
  message1 = 'Здравствуйте';
} else if (login == '') {
  message1 = 'Нет логина';
} else {
  message1 = '';
}

message1 = (login == 'Сотрудник') ? 'Привет' :
  login == 'Директор' ? 'Здравствуйте' :
  login == '' ? 'Нет логина' : 
  '';
