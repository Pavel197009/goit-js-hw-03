/*Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). 
  Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
  Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
  В іншому випадку функція повинна повернути весь новий масив.

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи. */

function slugify(title) {
  let slug = title.toLowerCase().split(" ");    // создание массива slug в нижнем регистре
  return slug.join("-");                        // возврат строки, делимитированной тире
}   

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"