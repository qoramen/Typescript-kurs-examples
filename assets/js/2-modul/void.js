"use strict";
/* void — "bo‘sh" yoki "qaytarsiz" degan ma'noni bildiradi. JavaScript’da undefined qaytaradigan
   yoki hech narsa qaytarmaydigan funksiyalar TypeScript’da void deb belgilanadi. */
// --- Void funksiya misoli ---
function logMessage(message) {
    console.log("Log:", message);
}
/* Izoh:
  Bu funksiya hech qanday qiymat qaytarmaydi (return yo‘q yoki return undefined bo‘lsa ham void bo‘ladi).
*/
// --- Return qilsa ham void bo'lishi mumkin ---\
function doNothing() {
    return; // return hech narsa qaytarmayapti
}
const myLogger = (msg) => {
    console.log(msg);
};
// --- Arrow function bilan ---
const sayHi1 = () => {
    console.log("Hi!");
};
// --- void bilan undefined farqi ---
let a;
a = undefined; // ✅ OK
// a = null; // ❌ TS'da strict mode bo‘lsa, xatolik beradi
/* void — bu undefined qiymatini qabul qilishi mumkin, lekin faqatgina shu. */
// --- Voidni noto‘g‘ri ishlatish misoli ---
function returnString() {
    // return "hello"; // ❌ Xatolik: void funksiya hech narsa qaytarmasligi kerak
}
// --- Voidni setTimeout, event kabi holatlarda ishlatish ---
setTimeout(() => {
    console.log("3 soniyadan song!");
}, 3000);
