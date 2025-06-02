"use strict";
/* TypeScript dasturlash tilida asosiy type lar (ya'ni primitive types)
   dasturda ma'lumotlarni to'g'ri ifodalash uchun ishlatiladi. */
// --- Srting ---
let ism = "Murod";
let salom = `Salom, mening ismim ${ism}`;
// --- Number ---
let yosh = 25;
let baho = 4.5;
// --- Boolean ---
let aktiv = true;
let tugallangan = false;
// --- Any ---
/* Har qanday turdagi qiymatga ruxsat beradi (ehtiyotkorlik bilan ishlatish kerak) */
let erkin = "text";
erkin = 42;
erkin = true;
// --- Unknown --- 
/* any ga o‘xshaydi, lekin xavfsizroq. Foydalanishdan oldin tekshiruv talab qiladi. */
let nomalum = "salom";
if (typeof nomalum === "string") {
    console.log(nomalum.toUpperCase());
}
// --- Void ---
/* Hech qanday qiymat qaytarmaydigan funksiyalar uchun ishlatiladi. */
function salomBer() {
    console.log("Salom!");
}
