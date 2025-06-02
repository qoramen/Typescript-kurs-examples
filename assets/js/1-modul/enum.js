"use strict";
/* enum – bu bir-biriga bog‘liq, nomlangan doimiy qiymatlar to‘plami. Odatda ular variantlar
   ro‘yxatini aniq ifodalashda ishlatiladi: kunlar, holatlar, rollar, ranglar, tugmalar holati, va hokazo. */ 7;
// --- Number-based enum (raqamli enum) ---
var Kun;
(function (Kun) {
    Kun[Kun["Dushanba"] = 0] = "Dushanba";
    Kun[Kun["Seshanba"] = 1] = "Seshanba";
    Kun[Kun["Chorshanba"] = 2] = "Chorshanba";
})(Kun || (Kun = {}));
let bugun = Kun.Seshanba;
console.log(bugun); // 1
// --- Enumga qiymat berish ---
var Holat;
(function (Holat) {
    Holat[Holat["Boshlash"] = 1] = "Boshlash";
    Holat[Holat["Yozish"] = 2] = "Yozish";
    Holat[Holat["Tugatish"] = 3] = "Tugatish";
})(Holat || (Holat = {}));
console.log(Holat.Tugatish); // 3
// --- String-based enum --- 
var Rang;
(function (Rang) {
    Rang["Qizil"] = "RED";
    Rang["Yashil"] = "GREEN";
    Rang["Kok"] = "BLUE";
})(Rang || (Rang = {}));
let tanlanganRang = Rang.Qizil;
console.log(tanlanganRang); // "RED"
// --- Enum’dan qiymatni olish (reverse mapping faqat number enumda ishlaydi) ---
var Holat1;
(function (Holat1) {
    Holat1[Holat1["Yangi"] = 0] = "Yangi";
    Holat1[Holat1["QabulQilindi"] = 1] = "QabulQilindi";
    Holat1[Holat1["BekorQilindi"] = 2] = "BekorQilindi";
})(Holat1 || (Holat1 = {}));
console.log(Holat1[1]); // "QabulQilindi"
/* ⚠️ Bu faqat number enumlarda ishlaydi. String enumlarda bu mavjud emas. */
// --- Enum’ni type sifatida ishlatish ---
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
function checkAccess(role) {
    if (role === Role.Admin) {
        console.log("Adminga ruxsat bor");
    }
}
checkAccess(Role.User); // "Adminga ruxsat bor" chiqmaydi
let tugma = 0 /* Tugma1.Bosildi */;
/* const enum ishlatilsa, kompilatsiyada enum o‘rniga oddiy raqamlar joylashtiriladi (performance uchun yaxshi). */
// --- Enum bilan switch ---
var Operatsiya;
(function (Operatsiya) {
    Operatsiya[Operatsiya["Qoshish"] = 0] = "Qoshish";
    Operatsiya[Operatsiya["Ayirish"] = 1] = "Ayirish";
    Operatsiya[Operatsiya["Kopaytirish"] = 2] = "Kopaytirish";
    Operatsiya[Operatsiya["Bolish"] = 3] = "Bolish";
})(Operatsiya || (Operatsiya = {}));
function hisobla(a, b, op) {
    switch (op) {
        case Operatsiya.Qoshish: return a + b;
        case Operatsiya.Ayirish: return a - b;
        case Operatsiya.Kopaytirish: return a * b;
        case Operatsiya.Bolish: return a / b;
    }
}
console.log(hisobla(10, 5, Operatsiya.Bolish)); // 2
// --- Enum’ni object yoki type sifatida almashtirish mumkinmi? ---
// Agar enum’lar haddan ortiq murakkab bo‘lsa, ba’zan quyidagilar o‘rniga ishlatiladi:
const Ruxsat = {
    OQISH: "read",
    YOZISH: "write",
    OCHIRISH: "delete",
};
/* Bu usul enum’ni string literal union type bilan almashtirish hisoblanadi.*/
// --- Enum arrayda ishlatish ---
var Baho;
(function (Baho) {
    Baho[Baho["Yomon"] = 1] = "Yomon";
    Baho[Baho["Orta"] = 2] = "Orta";
    Baho[Baho["Alo"] = 3] = "Alo";
})(Baho || (Baho = {}));
let baholar3 = [Baho.Yomon, Baho.Alo];
// --- Enumni JSON orqali serialize qilish ---
(function (Holat) {
    Holat["Yangi"] = "new";
    Holat["Eskirgan"] = "old";
})(Holat || (Holat = {}));
let obj = {
    nom: "Kitob",
    holat: Holat.Yangi,
};
console.log(JSON.stringify(obj)); // {"nom":"Kitob","holat":"new"}
