// // - создать массив с 20 числами.
// let mas = [1,5,8,6,4,-1,0,82,4,21,3,5,1,0,23,4,7,8,9,10,3,10];
// // -- при помощи метода sort и колбека  отсортировать массив.
// mas.sort((a, b) => a - b );
// console.log(mas);
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// mas.sort((a, b) => b - a);
// console.log(mas);
// // -- при помощи filter получить числа кратные 3
// let filter = mas.filter(function(num) {
//    return num % 3 ===0 && num !==0;
// })
// console.log(filter);
// -- при помощи filter получить числа кратные 10
// let filt = mas.filter(num => num % 10 ===0&&num!==0);
// console.log(filt);
// // -- перебрать (проитерировать) массив при помощи foreach()
// mas.forEach(function (elem) {
//    console.log(elem);
// })
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let newmas = mas.map((item) => { return item *= 3 })
// console.log(newmas);
// - создать массив со словами на 15-20 элементов.
// let mas = ["false", "true", "Taras", "cat", "Vira", "tank", "map", "sort", "Obivan", "Bobko", "Duncan", "Maklaud", "bogdan", "Car", "false"]
// // -- отсортировать его по алфавиту в восходящем порядке.
// mas1 = mas.sort((a, b) => {
//    if (a.toLowerCase()>b.toLowerCase()) {
//       return 1
//    }
//    if (a.toLowerCase() < b.toLowerCase()) {
//       return -1
//    }
//    return 0;
// });
// console.log(mas1);
// -- отсортировать его по алфавиту  в нисходящем порядке.
// mas1 = mas.sort((a, b) => {
//    if (a.toLowerCase()>b.toLowerCase()) {
//       return -1
//    }
//    if (a.toLowerCase() < b.toLowerCase()) {
//       return 1
//    }
//    return 0;
// });
// console.log(mas);
// -- отфильтровать слова длиной менее 4х символов
// let filter = mas.filter((value) => {return value.length<4})
// console.log(filter);
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let map = mas.map((value) => {
//    return value + "!"
// })
// console.log(map);
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [
//    { name: 'vasya', age: 31, status: false },
//    { name: 'petya', age: 30, status: true },
//    { name: 'kolya', age: 29, status: true },
//    { name: 'olya', age: 28, status: false },
//    { name: 'max', age: 30, status: true },
//    { name: 'anya', age: 31, status: false },
//    { name: 'oleg', age: 28, status: false },
//    { name: 'andrey', age: 29, status: true },
//    { name: 'masha', age: 30, status: true },
//    { name: 'olya', age: 31, status: false },
//    { name: 'max', age: 31, status: true }];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a, b) => { return a.age - b.age })
// users.sort((a, b) => { return b.age - a.age })
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a, b) => { return a.name.length - b.name.length })
// users.sort((a, b) => { return b.name.length - a.name.length })
// console.log(users);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let map = users.map((value,index) => {
//       value.id = index;
//       return value
// })
// console.log(map);
// - відсортувати його за індентифікатором
// map.sort((a, b) => { return b.id - a.id });
// map.sort((a, b) => { return a.id - b.id });
// console.log(map);

// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calc(a,b,collback) {
//       return collback(a,b);
// }
// console.log(calc(2,1,(a,b)=>{return a+b}));
// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calc(a, b, c, callback) {
//       return callback(a, b, c);
// }
// console.log(calc(2, 2, 3, (a, b, c) => { return (a + b) * c }));

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




// let cars = [{ producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 }, { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 }, { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 }, { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 }, { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 }, { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 }, { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 }, { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 }, { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 }, { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 }, { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 }, { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 }, { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let cars1 = cars.filter((a,) => { return a.volume > 3 })
// console.log(cars1);
// // - двигун = 2л
// let cars2 = cars.filter((value) => { return value.volume === 2 })
// console.log(cars2);
// // - виробник мерс
// let cars3 = cars.filter((value) => { return value.producer === "mercedes" })
// console.log(cars3);
// // - двигун більше 3х літрів + виробник мерседес
// let cars4 = cars.filter((value) => { return value.volume > 3 && value.producer === "mercedes" });
// console.log(cars4);
// // - двигун більше 3х літрів + виробник субару
// let cars5 = cars.filter((value) => { return value.volume > 3 && value.producer === "subaru" });
// console.log(cars5);
// // - сили більше ніж 300
// let cars6 = cars.filter((value) => { return value.power > 300 });
// console.log(cars6);
// // - сили більше ніж 300 + виробник субару
// let cars7 = cars.filter((value) => { return value.power > 300 && value.producer === "subaru" });
// console.log(cars7);
// // - мотор серіі ej
// let cars8 = cars.filter((value) => {
//       let str = value.engine.toLowerCase().indexOf("ej");
//       if (str<0) {
//             console.log("not model");
//       } else {
//             return value;
//       }
// })
// console.log(cars8);
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let cars9 = cars.filter((value) => {
//       if (value.power > 300 && value.producer === "subaru" && value.engine.toLowerCase().indexOf("ej") > -1) {
//             return value
//       }
// })
// console.log(cars9);
// // - двигун меньше 3х літрів + виробник мерседес
// let car10 = cars.filter((value) => { return value.volume < 3 && value.producer === "mercedes" });
// console.log(car10);
// // - двигун більше 2л + сили більше 250
// let car11 = cars.filter((value) => { return value.volume > 2 && value.power > 250 });
// console.log(car11);
// // - сили більше 250  + виробник бмв
// let car12 = cars.filter((value) => { return value.power > 250 && value.producer === "bmw" })
// console.log(car12);



// // - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'ahevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'zhevchenko', number: 121}}];
// // -- отсортировать его по id пользователей
// usersWithAddress.sort((a, b) => { return a.id - b.id })
// // -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((a, b) => { return b.id - a.id })
// // -- отсортировать его по возрасту пользователей
// usersWithAddress.sort((a, b) => { return a.age - b.age });
// // -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((a, b) => { return b.age - a.age });
// // -- отсортировать его по имени пользователей
// // сортування по алфавіту зростанння
// usersWithAddress.sort((a, b) => {
//    if (a.name.toLowerCase()>b.name.toLowerCase()) {
//       return 1
//    }
//    if (a.name.toLowerCase() < b.name.toLowerCase()) {
//       return -1
//    }
//    return 0;
// })
// // сортування по довжині імені зростання
// usersWithAddress.sort((a, b) => { return a.name.length - b.name.length });
// // -- отсортировать его по имени пользователей в обратном порядке
// // сортування по алфавіту спадання
// usersWithAddress.sort((a, b) => {
//       if (a.name.toLowerCase() > b.name.toLowerCase()) {
//             return -1
//       }
//       if (a.name.toLowerCase() < b.name.toLowerCase()) {
//             return 1
//       }else {return 0}
// })
// // сортування по довжині імені спадання
// usersWithAddress.sort((a, b) => { return b.name.length - a.name.length });
// // -- отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort((a, b)=>{
//       if (a.address.street > b.address.street) {
//             return 1
//       }
//       if (a.address.street < b.address.street) {
//             return -1
//       }else {return 0}
// })
// // -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((a, b) => { return a.address.number - b.address.number });
// // -- отфильтровать (оставить) тех кто младше 30
// let mut = usersWithAddress.filter((value) => { return value.age < 30 });
// console.log(mut);
// // -- отфильтровать (оставить) тех у кого отрицательный статус
// let mut2 = usersWithAddress.filter((value) => { return value.status === false });
// console.log(mut2);
// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let mut3 = usersWithAddress.filter((value) => { return value.status === false && value.age < 30 });
// console.log(mut3);
// // -- отфильтровать (оставить) тех у кого номер дома четный
// let mut4 = usersWithAddress.filter((value) => { return value.address.number % 2 === 0 });
// console.log(mut4);


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// let cars = [
//       { marka: "subaru", power: 200, owner: { name: "Taras", age: 29, expirience: 3 }, price: 10000, age: 2020 },
//       { marka: "bmv", power: 250, owner: { name: "Igor", age: 25, expirience: 10}, price: 15000, age: 2015 },
//       { marka: "Mercedes",power: 120, owner: { name: "Bobko", age: 45, expirience:20 }, price: 9000, age: 1992 },
//       { marka: "Tesla", power: 300, owner: { name: "Taras", age: 29, expirience: 3 }, price: 30000, age: 2020 },
//       { marka: "Waz2106", power: 50, owner: { name: "Vasya", age: 20, expirience: 1 }, price: 500, age: 1960 },
//       { marka: "Volvo", power: 170, owner: { name: "Vova", age: 31, expirience: 7 }, price: 6000, age: 2010 },
//       { marka: "Shcoda", power: 300, owner: { name: "Zeca", age: 45, expirience: 28 }, price: 40000, age: 2020 },
//       { marka: "Hundey", power: 250, owner: { name: "Oleg", age: 18, expirience: 1 }, price: 8000, age: 2015 },
//       { marka: "Wolzwagen", power: 400, owner: { name: "Ilon", age: 45, expirience: 8 }, price: 30000, age: 2018 },
//       { marka: "Mustang", power: 500, owner: { name: "Taras", age: 29, expirience: 3 }, price: 80000, age: 2021 },
// ]
// // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// // Далі необхідно дати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let masNew = [{ name: "Bobko", age: 26, expirience: 4 }, { name:"KIrek", age: 27, expirience: 3 }, {name:"Sergey", age: 30, expirience: 10 }, {name:"Aroge", age: 18, expirience: 0 }, {name:"Jeki", age: 40, expirience: 12 }];
// let z = 0;
//       for (let i = 0; i < cars.length; i += 2) {
//             cars[i].owner = masNew[z];
//             z++;
//             cars[i].power = cars[i].power + cars[i].power / 100 * 10;
//             cars[i].price = cars[i].price + cars[i].price / 100 * 5;
// };
// cars.forEach((value) => {
//       if (value.owner.expirience<5&&value.owner.age>25) {
//             value.owner.expirience += 1;
//             return value
//       } else { return value };
// })
// console.log(cars);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
// function index(num) {
//       if (arr.includes(num)) { 
//             return `Min index = ${arr.indexOf(num)}, Max index = ${arr.lastIndexOf(num)}`
//       }
//       else {
//             return -1
//       }
// }
// console.log(index(4));
