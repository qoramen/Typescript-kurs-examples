/* unknown — "har qanday qiymat bo‘lishi mumkin, lekin xavfsizlikni talab qiladi" degan ma’noni anglatadi. */

// --- Oddiy misol ---

let userInput: unknown;

userInput = "salom";     // OK
userInput = 42;          // OK
userInput = true;        // OK

/* unknown — bu har qanday turdagi qiymatni qabul qiladi, lekin uni bevosita ishlatib bo‘lmaydi: */

let input: unknown = "Hello";

// let str: string = input; // ❌ Xato: type-check yo‘q



// --- Type check orqali foydalanish ---

let input1: unknown = "Hello";

if (typeof input1 === "string") {
    let upper = input1.toUpperCase(); // ✅ Endi ishlaydi
}



// --- Foydalanishdan oldin tekshiruv qilish majburiy ---

function handle(value: unknown) {
    if (typeof value === "number") {
        console.log(value.toFixed(2)); // ✅
    } else {
        console.log("Son emas");
    }
}



// --- Function return type sifatida ---

function getData(): unknown {
    return Math.random() > 0.5 ? "hello" : 42;
}

let result = getData();
// result.toUpperCase(); // ❌ Xato

/* unknown qiymatni ishlatishdan oldin uni tekshirish majburiy. */



// --- Praktik misol: API response ---

function fetchData(): unknown {
    return { name: "Ali", age: 25 };
}

const data = fetchData();

if (typeof data === "object" && data !== null && "name" in data) {
    console.log((data as { name: string }).name); // ✅ To‘g‘ri ishlaydi
}



// --- Type narrowing bilan kuchli kombinatsiya ---

function printUnknown(value: unknown) {
    if (typeof value === "string") {
        console.log("Matn uzunligi:", value.length);
    } else if (typeof value === "number") {
        console.log("Kvadrati:", value * value);
    } else {
        console.log("Nomalum type:", typeof value);
    }
}