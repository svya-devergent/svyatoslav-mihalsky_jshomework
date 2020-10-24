// Завдання 1


// const name = "Генератор захисного поля";
// let price = 1000;
// console.log(`Обрано «${name}», ціна за штуку ${price} кредитів`);
// price = 2000;
// console.log(`Обрано «${name}», ціна за штуку ${price} кредитів`);
// console.log(Math.round(Math.random() * 1000));



// Завдання 2


  
// let input = prompt("Введіть свою країну");
// // .toUpperCase()
// // .toLowerCase()
// input = input.toLowerCase();
// let cost = 0;
// switch (input) {
//   case "китай":
//     cost = 100;
//     break;
//   case "чилі":
//     cost = 250;
//     break;
//   case "австралія":
//     cost = 170;
//     break;
//   case "індія":
//     cost = 80;
//     break;
//   case "ямайка":
//     cost = 120;
//     break;
//   default:
//     alert("У вашій країні доставка недоступна");
// }
// console.log(`Доставка в ${input} буде коштувати ${cost} кредитів`);



// Завдання 3


// const credits = 23580;
// const pricePerDroid = 3000;

// let numberOfDroids = prompt("Введіть кількість дроїдів");
// let totalPrice = pricePerDroid * numberOfDroids;

// if (numberOfDroids === null) {
//   console.log("Скасовано користувачем");
// } else if (totalPrice > credits) {
//   console.log("недостатньо коштів на рахунку");
// } else {
//   console.log(
//     `Ви купили ${numberOfDroids} дроїдів, на рахунку залишилося ${
//       credits - totalPrice
//     } кредитів.`
//   );
// }



// Завдання 4


// const ADMIN_PASSWORD = "goit";
// let message;

// let input = prompt("Введіть пароль");

// if (input === null) {
//   message = "Скасовано користувачем!";
// } else if (input === ADMIN_PASSWORD) {
//   message = "Ласкаво просимо!";
// } else {
//   message = "Доступ заборонений, невірний пароль!";
// }
// alert(message);


// Завдання 5

// let total = 0;
// let canInput = true;

// while (canInput) {
//   const userInput = prompt("Введіть число");
//   if (userInput === null) {
//     canInput = false;
//     console.log(`Total: ${total}`);
//   } else {
//     const numberToAdd = parseInt(userInput);
//     total += numberToAdd;
//   }
// }
