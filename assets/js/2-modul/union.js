"use strict";
/* Union — bu bir nechta turdagi qiymatlarni qabul qilishga ruxsat beruvchi type.
   Masalan, o‘zgaruvchi string yoki number bo‘lishi mumkin. */
// --- Oddiy union type ---
let id;
id = 101; // ✅ OK
id = "abc123"; // ✅ OK
// id = true;   ❌ Xato
// --- Function parametri uchun union ---
function yoz(xabar) {
    console.log("Xabar:", xabar);
}
yoz("Salom"); // OK
yoz(12345); // OK
let userId = "user_001";
userId = 456; // OK
function tekshir1(action) {
    console.log(`Sizga ${action} ruxsati bor`);
}
tekshir1("oqish"); // ✅ OK
tekshir1("ochirish"); // ✅ OK
// tekshir("kiritish"); ❌ Xato
// --- Union bilan array ---
let qiymatlar = ["Salom", 123, "Dunyo", 456];
/* Bu yerda har bir element string yoki number bo‘lishi mumkin. */
// --- Union bilan function return type ---
function natija(ballar) {
    if (ballar >= 60)
        return "O'tdi";
    else
        return ballar; // noto‘g‘ri ball qaytariladi
}
// --- typeof bilan tekshiruv (type narrowing) ---
function kvadrat(x) {
    if (typeof x === "number") {
        return x * x;
    }
    else {
        return parseInt(x) ** 2;
    }
}
function korsat(f) {
    if (f.turi === "pdf") {
        console.log("PDF hajmi:", f.hajm);
    }
    else {
        console.log("Rasm o'lchami:", f.kenglik, "x", f.balandlik);
    }
}
let user11 = { ism: "Ali", parol: "12345" };
let user22 = { ism: "Vali", token: "abc123" };
function Button1(props) {
    if (props.variant === "link") {
        // return <a href={ props.href }> Havola </a>;
    }
    // return <button onClick={ props.onClick }> Jo‘natish </button>;
}
/*  Qo‘shimcha: union vs intersection (&) */
/* Union (|): yoki bu yoki u

   Intersection (&): ikkalasining birlashmasi */ 
