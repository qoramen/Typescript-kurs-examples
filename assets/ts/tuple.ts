/* Tuple — bu TypeScript’ga xos bo‘lgan maxsus array bo‘lib, har bir elementining aniq turi va tartibi mavjud. */

// --- Oddiy tuple ---

let user3: [string, number] = ["Ali", 25];

/* user[0] — bu yerda string
   user[1] — bu yerda number */



// --- Tuple bilan functiondan qiymat qaytarish ---

function getUser(): [string, number] {
    return ["Laylo", 22];
}

const [ism1, yosh1] = getUser(); // Destructuring



// --- Optional elementli tuple ---

let message: [string, number?] = ["Xato ro'y berdi"];

/* Ikkinchi qiymat (number) majburiy emas. */



// --- Readonly tuple ---

const koordinatalar: readonly [number, number] = [40.7128, 74.006]; // koordinatalar[0] = 41; ❌ Xatolik beradi



// --- Tuple bilan type yoki interface ishlatish ---

type UserInfo = [string, number];

const user4: UserInfo = ["Aziz", 28];



// --- Tuple array (ya’ni ko‘p tuple elementlar) ---

let talabalar: [string, number][] = [
    ["Ali", 25],
    ["Laylo", 22],
];



// --- Label bilan (TypeScript 4.0+) – yanada tushunarli qiladi ---

type Koordinata = [x: number, y: number];

const nuqta: Koordinata = [10, 20];



// --- Tuple bilan rest operator (...) ---

type LogEntry = [string, ...number[]];

let kirish: LogEntry = ["Test boshlandi", 1, 2, 3, 4];

/* Bu yerda birinchi qiymat string, qolganlari esa number[]. */



// --- Tuple ichida function ---

type Tugma = [string, () => void];

const saveButton: Tugma = ["Saqlash", () => console.log("Saqlandi")];



// --- Tuple bilan destructuring ---

const foydalanuvchi1: [string, number] = ["Vali", 30];

const [ism2, yosh2] = foydalanuvchi1;
console.log(ism); // "Vali"
console.log(yosh); // 30