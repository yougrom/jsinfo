// Операторы сравнения
// Результат сравнения имеет логический тип.
// Операторы сравнения возвращают логическое значение true или false.
// Сравнение разных типов
// При сравнении значений разных типов JavaScript приводит каждое из них к числу.
// Example
console.log(5 == "5"); // true

// Логическое значение true становится 1, а false – 0.
// Example
console.log(true == 1); // true
console.log(false == 0); // true

// Строгое сравнение
// Для строгого сравнения используется оператор ===.
// Он сравнивает значения без приведения типов.
// Example
console.log(5 === "5"); // false

// Ещё есть оператор строгого неравенства !==, аналогичный !=
// Example
console.log(5 !== "5"); // true

// Сравнение null и undefined
// null равен только undefined и ничему другому.
// Example
console.log(null == undefined); // true
console.log(null === undefined); // false

// Странный результат сравнения null и 0
// При сравнении null и 0 результат false, так как null равен только undefined.
// Example
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// Несравненное значение undefined
// Сравнение с undefined возвращает false.
// Example
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

// Example
5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false
