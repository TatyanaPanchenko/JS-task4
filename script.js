// Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обработайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра
const calcSum = (a, b) => {
  if (typeof a === "undefined" || typeof b === "undefined") {
    console.log("Введите два параметра");
  } else if (typeof a !== "number" || typeof b !== "number") {
    console.log("Введенные данные не являются числами");
  } else console.log(a + b);
};
calcSum(7, 11);

// Задание 2

// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"
// square()
// // ДО: NaN
// // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
function square(a) {
  if (typeof a === "undefined") {
    console.error("Функция 'square' не может быть вызвана без аргумента");
  } else {
    console.log(a * a);
  }
}
square();

// Задание 3

// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.
function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

const guessNumber = (a) => {
  if (a >= 0 && a <= 10) {
    const random = getRandomInteger(1, 10);
    if (random === a) {
      return "Вы выиграли";
    } else {
      return `Вы не угадали, ваше число -  ${a},  а выпало число ${random}`;
    }
  } else {
    console.log("Число не соответствует заданному диапазону");
  }
};
console.log(guessNumber(3));

// Задание 4
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function copyArr(arr) {
  const newArr = arr.map((element) => element);
  return newArr;
}
console.log(copyArr(days));

// Задание 5
// Напишите функцию, которая принимает массив имен и возвращает новый массив, в котором каждое имя будет иметь приставку "Hello, "

function changeArr(arr) {
  const newArr = arr.map((element) => "Hello " + element);
  return newArr;
}
console.log(changeArr(days));

// Задание 6
// Напишите функцию, которая принимает массив объектов пользователей и возвращает новый массив, содержащий только их имена.
const users = [
  { name: "Olga", age: 26 },
  { name: "Sandra", age: 32 },
  { name: "John", age: 12 },
  { name: "David", age: 39 },
  { name: "Emily", age: 19 },
  { name: "Daniel", age: 22 },
];
function getNames(arr) {
  const arrNames = arr.map((element) => element.name);
  return arrNames;
}
console.log(getNames(users));

// Задание 7
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};
function sumObjectValues(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum = sum + obj[key];
    }
  }
  return sum;
}
console.log(sumObjectValues(objectWithNumbers));

// Задание 8
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.
const text =
  "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed badWord do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function ucFirst(str) {
  const newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}
console.log(ucFirst(text));

// Задание 9
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.
function checkSpam(str) {
  const findStr = str.toLowerCase();
  if (findStr.includes("badword") || findStr.includes("xxx")) {
    return true;
  } else return false;
}
console.log(checkSpam(text));
