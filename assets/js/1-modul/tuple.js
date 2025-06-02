"use strict";
/* Tuple — bu TypeScript’ga xos bo‘lgan maxsus array bo‘lib, har bir elementining aniq turi va tartibi mavjud. */
// --- Oddiy tuple ---
let user3 = ["Ali", 25];
/* user[0] — bu yerda string
   user[1] — bu yerda number */
// --- Tuple bilan functiondan qiymat qaytarish ---
function getUser() {
    return ["Laylo", 22];
}
const [ism1, yosh1] = getUser(); // Destructuring
// --- Optional elementli tuple ---
let message = ["Xato ro'y berdi"];
/* Ikkinchi qiymat (number) majburiy emas. */
// --- Readonly tuple ---
const koordinatalar = [40.7128, 74.006]; // koordinatalar[0] = 41; ❌ Xatolik beradi
const user4 = ["Aziz", 28];
// --- Tuple array (ya’ni ko‘p tuple elementlar) ---
let talabalar = [
    ["Ali", 25],
    ["Laylo", 22],
];
const nuqta = [10, 20];
let kirish = ["Test boshlandi", 1, 2, 3, 4];
const saveButton = ["Saqlash", () => console.log("Saqlandi")];
// --- Tuple bilan destructuring ---
const foydalanuvchi1 = ["Vali", 30];
const [ism2, yosh2] = foydalanuvchi1;
console.log(ism); // "Vali"
console.log(yosh); // 30
