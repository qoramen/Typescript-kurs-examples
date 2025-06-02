"use strict";
/* Generic — bu ma’lum bir turga bog‘liq bo‘lmagan, lekin tur aniqligini saqlovchi yozuv.
   Ya’ni, qayta ishlatiladigan va har xil typelarga mos keladigan kod yozish imkonini beradi.

   🔧 Oddiy qilib:
   Generic — bu “tur kiritiladigan o‘zgaruvchi”, masalan: <T>, <U>, <K, V>, va h.k. */
// --- Misol: Generic bilan funksiyalar ---
function identity(value) {
    return value;
}
console.log(identity("Salom")); // "Salom"
console.log(identity(42)); // 42
/* Bu yerda T — bu har qanday type bo‘lishi mumkin, lekin u saqlanadi: kiritgan type chiqadi. */
// --- Generic bo‘lmagan yondashuv ---
function identity1(value) {
    return value;
}
let result1 = identity(5); // number kiradi
// result1.toUpperCase(); ❌ TypeScript bu xatoni ushlay olmaydi
/* any type — type xavfsizligini buzadi. Generic esa buni to‘g‘rilaydi ✅ */
// --- Generic Array ---
function getFirst(arr) {
    return arr[0];
}
const num = getFirst([1, 2, 3]); // number
const str = getFirst(["a", "b"]); // string
const box1 = { content: "Kitob" };
const box2 = { content: 123 };
// --- Generic bilan Class ---
class DataStore {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
}
const users = new DataStore();
users.add("Ali");
users.add("Vali");
const numbers = new DataStore();
numbers.add(1);
numbers.add(2);
// --- Generic Constraints (cheklash) ---
function printLength(item) {
    console.log(item.length);
}
printLength("Hello"); // 5
printLength([1, 2, 3]); // 3
// printLength(123); ❌ numberda length yo‘q
/* T extends {...} — bu orqali qanday typelarni qabul qilish mumkinligini cheklaysiz. */
// --- Reusable va Type-Safe kodlar ---
/* Generic yordamida yozilgan kod:

   Qayta ishlatiladi (reusable)

   Aniq typelarni saqlaydi (type-safe)

   Katta loyihalarda xavfsizlikni oshiradi */
// --- Xulosa ---
/*
| Afzalliklar    | Tushuntirish                                   |
| -------------- | ---------------------------------------------- |
| Reusability    | Bir nechta tur uchun bir kod yozasiz           |
| Type-safety    | Har xil xatoliklarni kompilyatsiyada aniqlaydi |
| Oson debugging | Type aniqligi tufayli xatoliklarni topish oson |
| IntelliSense   | IDE orqali to‘liq yordam beradi                |
*/ 
