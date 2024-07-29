// Конструкция "switch"
// Синтаксис
// Конструкция switch имеет один или более блок case и необязательный блок default.

switch (x) {
  case 'value1': // if (x === 'value1')
    // Выполнить действие 1
    break;
  case 'value2': // if (x === 'value2')
    // Выполнить действие 2
    break;
  default:
  // Выполнить действие по умолчанию
}

// Переменная x проверяется на строгое равенство со значением в каждом случае.
// В случае совпадения с case выполняются действия, указанные после соответствующего case.
// Если ни один case не совпадает, выполняется (если есть) блок default.
// Если его нет, выполнение продолжится за пределами switch.

// Пример
let a = 2 + 2;

switch (a) {
  case 3:
    console.log('Маловато');
    break;
  case 4:
    console.log('В точку!');
    break;
  case 5:
    console.log('Перебор');
    break;
  default:
    console.log('Я таких значений не знаю');
}

// Группировка «case»
// Если несколько case предполагают выполнение одного и того же кода, они могут быть объединены в один блок:

let b = 3;

switch (b) {
  case 4:
    console.log('Правильно!');
    break;

  case 3: // (*) группируем оба case
  case 5:
    console.log('Неправильно!');
    console.log('Но все еще неплохо');
    break;

  default:
    console.log('Я таких значений не знаю');
}

// Тип имеет значение
// Строгое равенство === используется при сравнении значения переменной с case.
// Значения должны быть одного типа, чтобы выполнялось равенство.

// Для примера, давайте рассмотрим следующий код:
let arg = prompt('Введите число?');
switch (arg) {
  case '0':
  case '1':
    alert('Один или ноль');
    break;

  case '2':
    alert('Два');
    break;

  case 3:
    alert('Никогда не выполнится!');
    break;
  default:
    alert('Неизвестное значение');
}

// Задачи
// Задача 1
// Напишите if..else, соответствующий следующему switch:
switch (browser) {
  case 'Edge':
    alert("You've got the Edge!");
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert('Okay we support these browsers too');
    break;

  default:
    alert('We hope that this page looks ok!');
}

// if..else
if (browser == 'Edge') {
  console.log("You've got the Edge!");
} else if (
  browser == 'Chrome' ||
  browser == 'Firefox' ||
  browser == 'Safari' ||
  browser == 'Opera'
) {
  console.log('Okay we support these browsers too.');
} else {
  console.log('We hope that this page looks ok!');
}

// Задача 2 — Перепишите код с использованием одной конструкции switch:
const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}

// Solution
const number1 = +prompt('Введите число между 0 и 3', '');
switch (number1) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}
