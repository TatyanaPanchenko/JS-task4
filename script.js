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
  const delcatsJane = catsJane.slice(1, 9);
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

// Задание 14

// Решить 4 задание из прошлой темы, используя метод filter

// Задание 4
// Есть массив произвольных чисел:
const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
numbers.filter((element, index) =>
  console.log(`Индексу ${index} соответствует число ${element}`)
);
// Определить массив, например
const arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
function filterFor(arr, a) {
  const newArr = arr.filter((element) => element >= a);
  return newArr;
}
console.log(filterFor(arr, 5));

// Задание 15
// Описать функцию, которая принимает массив строк и возвращает массив, содержащий только строки более 3-х символов. Проверить работу функции на примере:
const arrStrings = ["yes", "hello", "no", "easycode", "what"];

function findThreeSymbols(arr) {
  const newArr = [];
  arr.forEach((element) => {
    if (element.length > 3) {
      newArr.push(element);
    }
  });
  return newArr;
}
console.log(findThreeSymbols(arrStrings));

// Задание 16
// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной):
const bigArray = [[14, 45], [1], ["a", "c", "d"]];
// ПОДСКАЗКА. Для правильной сортировки метод sort принимает функцию, параметры которой a и b - это элементы массива. В данной задаче элементы массива, то есть параметры a и b, сами являются массивами и обладают всеми свойствами массивов.
const sortArray = bigArray.sort((a, b) => {
  return a.length - b.length;
});
console.log(sortArray);

// Задание 17
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:
// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7. (сделать через map)
// 2. Исключает всех кошек младше 18 человеческих лет. (сделать через filter)
// 3. Возвращает средний человеческий возраст для всех взрослых кошек. (сумму для среднего посчитать через reduce)
// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
const catAges = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const catAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

// В задании необходимо использовать методы массивов: map, filter, reduce

function getAverageHumanAge(arr) {
  const humanAge = arr.map((element) =>
    element <= 2 ? (element *= 10) : (element *= 7)
  );
  const excludeByAge = humanAge.filter((element) => element >= 18);
  const sumAge = excludeByAge.reduce((acc, element) => acc + element, 0);
  const averageAge = sumAge / excludeByAge.length;
  return averageAge;
}

console.log(getAverageHumanAge(catAges));
console.log(getAverageHumanAge(catAges2));
