"use strict";
/* never — bu funksiya hech qachon normal yakunlanmaydi (masalan, doim xato tashlaydi yoki cheksiz sikl
   ichida qoladi) yoki mumkin bo‘lmagan holatni ifodalaydi. */
// --- Hech qachon qaytmaydigan funksiya ---
function throwError(message) {
    throw new Error(message);
}
/* Bu funksiya hech qachon return qilmaydi, chunki u har doim xato tashlaydi. */
// --- Cheksiz sikl bilan ---
function infiniteLoop() {
    while (true) {
        console.log("Aylanmoqda...");
    }
}
function area(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.size ** 2;
        default:
            const _exhaustiveCheck = shape; // Agar yangi `kind` qo‘shilsa, TS xato beradi
            return _exhaustiveCheck;
    }
}
/* Bu usul exhaustiveness checking deyiladi — barcha mumkin bo‘lgan variantlarni qamrab
   olmaganingizda TypeScript sizga xato beradi. */
// --- never qanday holatlarda ishlatiladi? ---
/* Xatolik tashlaydigan funksiyalar (throw)

   Cheksiz sikllar (while(true))

   Exhaustiveness checking (switch-case yoki if-else bilan to‘liq tekshiruv)

   Mumkin bo‘lmagan qiymatlarni ifodalash */
// --- never bilan noto‘g‘ri ishlatish misoli ---
// function fn(): never {
//     return 123; // ❌ Xato: `never` hech qachon qiymat qaytarmaydi
// }
