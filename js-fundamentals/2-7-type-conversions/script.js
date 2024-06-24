// Преобразование типов
// Строковое преобразование (String Conversion)
// String(value) — чтобы преобразовать значение к строке:
// Example
let value = true;
console.log(typeof value); // boolean
value = String(value); // теперь value это строка "true"
console.log(typeof value); // string

// Численное преобразование (Number Conversion)
// Number(value) — чтобы преобразовать значение к числу:
// Example
console.log("6" / "2"); // 3 - строки преобразуются в числа

// Example
let str = "123";
console.log(typeof str); // string
let num = Number(str); // становится числом 123
console.log(typeof num); // number

// Example
let age = Number("Любая строка вместо числа");
console.log(age); // NaN, преобразование не удалось

// Example undefined
let und = Number(undefined);
console.log(und); // NaN

// Example true
let bul = Number(true);
console.log(bul); // 1

// Example false
let bul2 = Number(false);
console.log(bul2); // 0

// Exumple null
let nul = Number(null);
console.log(nul); // 0

// Example
console.log(Number("   123   ")); // 123
console.log(Number("123z")); // NaN (ошибка на символе z)

// Логическое преобразование (Boolean Conversion)
// Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
// Все остальные значения становятся true.
// Boolean(value) — преобразует значение к логическому типу:
// Example
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true

// Summary
// Существуют три встроенных функции для преобразования типов:
// String(value) преобразует значение к строке.
// Number(value) преобразует значение к числу.
// Boolean(value) преобразует значение к логическому типу.

// Преобразование к строке происходит, когда нам нужно что-то вывести. 
// Мы также можем использовать функцию String(value) для явного преобразования в строку.