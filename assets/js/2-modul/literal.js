"use strict";
/* Literal types — bu aniq qiymatni type sifatida belgilash.
   Ya'ni: "start", true, 42 — bularning o‘zlari type bo‘lib xizmat qiladi. */
// --- String literal type ---
let holat;
holat = "boshlash"; // ✅ OK
holat = "toxtatish"; // ✅ OK
// holat = "pauza";     ❌ Xatolik
// --- Number literal type ---
let baho2;
baho2 = 5; // ✅ OK
// baho = 6; // ❌ Xato: 6 ruxsat etilmagan
// --- Boolean literal type ---
let tugmaHolati;
tugmaHolati = true; // ✅ OK
function tekshir(ruxsat) {
    console.log("Sizda ruxsat:", ruxsat);
}
tekshir("yozish"); // OK
let tanlangan = "qizil";
/* Bu enumga o‘xshaydi, lekin kengroq foydalaniladi, ayniqsa: */
/* Props

   Validatsiya

   API javoblari

   React/NestJS loyihalarda */
// --- Function parametrlari bilan ---
function ishlovBerish(turi) {
    console.log("Tanlangan tur:", turi);
}
ishlovBerish("json"); // OK
function hisobla(a, b, amal) {
    if (amal === "qoshish")
        return a + b;
    else
        return a - b;
}
hisobla(5, 3, "ayirish"); // 2
// --- Readonly object literal (const assertion) ---
const sozlamalar1 = {
    til: "uzbek",
    mavzu: "dark",
}; // typeof sozlamalar.til => "uzbek" (literal type)
function Button({ variant }) {
    //   return <button className={variant}>Tugma</button>;
}
// --- Literal types + keyof typeof ---
const Holatlar = {
    Yangi: "new",
    Eski: "old",
    Qayta: "renewed",
};
