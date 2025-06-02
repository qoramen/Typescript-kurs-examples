"use strict";
/* null — bu “yo‘qlik”, “bo‘sh” degan ma’noni beruvchi qiymat. JavaScript va TypeScript’da u ob’ekt
   yo‘qligini yoki ma’lum qiymat yo‘qligini ko‘rsatadi. */
// --- null o‘zining tipi sifatida ---
let n = null;
n = null; // OK
// n = 5;    // ❌ Xato, faqat null bo'lishi mumkin
// --- null va boshqa turlar bilan birgalikda ishlatish (Union types) ---
let name1 = null;
name1 = "Ali"; // OK
name1 = null; // OK
/* Bu ko‘pincha ma’lumot yo‘qligini ifodalashda ishlatiladi. */
// --- strictNullChecks haqida ---
/* TypeScript’ning strictNullChecks flag’i yoqilganda:

   null va undefined faqat ular uchun aniq ko‘rsatilsa qabul qilinadi.

   Aks holda, string ga null ni tayinlash xato bo‘ladi. */
// let username1: string = null; // ❌ Xato (agar strictNullChecks yoqilgan bo‘lsa)
// --- null ishlatiladigan oddiy funksiya ---
function findUser(id) {
    if (id === 1) {
        return "Ali";
    }
    return null; // Foydalanuvchi topilmadi
}
// --- null bilan ishlashda xavfsizlik ---
/*
const userName: string | null = getUserName();

if (userName !== null) {
  console.log(userName.length);  // OK
} else {
  console.log("User not found");
}
*/ 
