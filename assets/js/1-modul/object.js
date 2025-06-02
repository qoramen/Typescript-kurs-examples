"use strict";
/* TypeScript’da object type — bu obyektlarning tuzilmasini (ya’ni qanday xossalari borligini
   va ularning turini) aniqlash uchun ishlatiladi. */
// --- Oddiy object type ---
let foydalanuvchi = {
    ism: "Ali",
    yosh: 25,
};
/* Bu yerda foydalanuvchi obyekt bo‘lib, ism – string, yosh – number.*/
// --- Optional (majburiy bo‘lmagan) property ---
let user = {
    ism: "Ali",
};
/* email? — bu xossa bo‘lishi shart emas. */
// --- readonly (o‘zgartirib bo‘lmaydigan) property ---
let product = {
    id: 1,
    nom: "Noutbuk",
}; // product.id = 2; ❌ Xatolik beradi, chunki readonly
// --- Function ichida object type sifatida foydalanish ---
function foydalanuvchiniChopEt(user) {
    console.log(`${user.ism} - ${user.yosh} yoshda`);
}
foydalanuvchiniChopEt({ ism: "Aziz", yosh: 22 });
let user1 = { ism: "Kamol", yosh: 30 };
let m1 = {
    model: "Malibu",
    yil: 2023,
};
let t1 = {
    ism: "Laylo",
    manzil: {
        shahar: "Toshkent",
        kocha: "Amir Temur",
    },
};
// --- Index signature (kalit nomlari oldindan noma’lum bo‘lsa) ---
let sozlamalar = {
    til: "uz",
    mavzu: "qora",
};
let counter = {
    qiymat: 0,
    oshirish() {
        this.qiymat++;
    },
};
