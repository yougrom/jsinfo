// Переменная – это «именованное хранилище» для данных.
// Сначала переменная объявляется, а потом используется.
// Объявление переменной – это создание переменной с определённым именем, например:
let message; // теперь переменная называется message
// Мы можем поместить в message любое значение:
message = 'Hello'; // сохраним строку
// Мы можем изменить значение:
message = 'World'; // значение изменено
// Для объявления переменной используются ключевые слова let и const.
// Переменные объявленные через let можно изменять, а переменные объявленные через const нельзя изменить.
// Переменную let можно использовать только после её объявления
let message2 = 'Hello';
console.log(message2); // Hello
message2 = 'World';
console.log(message2); // World
// Переменные объявленные через const нельзя изменить.
const message3 = 'Hello';
console.log(message3); // Hello
// message3 = 'World'; // Error
// Переменные объявленные через let и const видны только внутри блока, в котором они объявлены.
// Переменные объявленные через let и const не видны до объявления.


// Переменная let имеет блочную область видимости. 
// Переменные объявленные через let ведут себя по другому.
// Переменные объявленные через let видны только в блоке, в котором они объявлены.
// Переменные объявленные через let не видны за пределами блока.

// Переменная var имеет функциональную область видимости.
// Переменные объявленные через var ведут себя по другому.
// Переменные объявленные через var видны везде в функции.
// Переменные объявленные через var не видны за пределами функции.
// Переменные объявленные через var видны до объявления.
// Переменные объявленные через var можно изменить.
console.log(mes); // Undefined
var mes = 'Hello';

// Зарезервированные ключевые слова в ECMAScript 2015 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words