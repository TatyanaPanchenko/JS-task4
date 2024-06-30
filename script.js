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

// Задание 10
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет, Женя» -> «янеЖ ,тевирп»
// Обратите внимание: метод reverse существует только у массивов.
const reverseString = (str) => {
  const changeStr = str.split("").reverse().join("");
  return changeStr;
};
console.log(reverseString(text));

// Задание 11
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком.

const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
// ПОДСКАЗКА:
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

const getStation = (arr) => {
  let kodSt;
  let NameSt;

  for (let element of arr) {
    kodSt = element.slice(0, 3);
    const indexArr = element.indexOf(";");
    NameSt = element.slice(indexArr + 1);
    console.log(`${kodSt} ${NameSt}`);
  }
};
getStation(stations);

// Задание 12
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
const strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"
// ПОДСКАЗКА
// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.

function unique(arr) {
  const newArr = [];
  for (let element of arr) {
    const searchElement = newArr.indexOf(element);
    if (searchElement === -1) {
      newArr.push(element);
    }
  }
  return newArr;
}
console.log(unique(strings));

// Задание 13

// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.
// 2. Создайте общий массив с данными Жени (исправленными) и Юли.
// 3. Для каждой кошки этого общего массива выведите в консоль текст:
// - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
// - если котёнок - Кошка № 2 ещё котёнок
// 4. Вызовите функцию для двух наборов тестовых данных.
// Тестовые данные:
const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

const catsJane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const catsJulia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

// В задании необходимо использовать методы массивов: forEach, slice, concat

function verifyCats(catsJane, catsJulia) {
  catsJane.shift();
  catsJane.pop();
  const generalArr = catsJane.concat(catsJulia);
  generalArr.forEach((element, index) => {
    if (element < 2) {
      console.log(`Кошка № ${index} ещё котёнок`);
    } else {
      console.log(`Кошка № ${index} взрослая, ей ${element} лет`);
    }
  });
}
verifyCats(catsJane, catsJulia);
verifyCats(catsJane2, catsJulia2);
