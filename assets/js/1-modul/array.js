"use strict";
/* TypeScript’da array (massiv) turlari juda muhim va juda ko‘p qo‘llaniladi.
   Array — bir xil turdagi elementlar to‘plami. */
// --- Oddiy array: number[], string[], va boshqalar ---
let sonlar = [1, 2, 3, 4];
let ismList = ["Ali", "Vali", "Laylo"];
let mantiqiy = [true, false, true];
// ---  Generic uslub: Array<type> shaklida ---
let baholar = [4.5, 3.8, 5.0];
let tillar = ["TypeScript", "JavaScript"];
let foydalanuvchilar = [
    { ism: "Ali", yosh: 25 },
    { ism: "Laylo", yosh: 21 },
];
// --- Tuple (aniq tartibdagi turli type’li array) ---
let user2 = ["Aziz", 30];
/* user[0] — string, user[1] — number. */
// --- Readonly array --- 
let raqamlar = [1, 2, 3]; // raqamlar.push(4); ❌ Xato beradi
// --- Arrayga turli turlarni ruxsat berish (union type) ---
let aralash = [1, "ikki", 3, "to'rt"];
// --- Function array (funksiya turlarining array'i) ---
let funksiyalar = [
    () => console.log("A"),
    () => console.log("B"),
];
// --- Array bilan ishlash: map, filter, reduce va boshqalar ---
let nums = [1, 2, 3, 4, 5];
let juftlar = nums.filter((s) => s % 2 === 0); // [2, 4]
let kvadratlar = nums.map((s) => s * s); // [1, 4, 9, 16, 25]
let summa = nums.reduce((a, b) => a + b, 0); // 15
// --- Multidimensional array (ko‘p o‘lchovli array) ---
let matritsa = [
    [1, 2],
    [3, 4],
    [5, 6],
];
