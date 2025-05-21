/* TypeScript’da array (massiv) turlari juda muhim va juda ko‘p qo‘llaniladi. 
   Array — bir xil turdagi elementlar to‘plami. */

// --- Oddiy array: number[], string[], va boshqalar ---

let sonlar: number[] = [1, 2, 3, 4];
let ismList: string[] = ["Ali", "Vali", "Laylo"];
let mantiqiy: boolean[] = [true, false, true];



// ---  Generic uslub: Array<type> shaklida ---

let baholar: Array<number> = [4.5, 3.8, 5.0];
let tillar: Array<string> = ["TypeScript", "JavaScript"];



// --- Array of objects (obyektlar massivi) ---

type User = {
    ism: string;
    yosh: number;
};

let foydalanuvchilar: User[] = [
    { ism: "Ali", yosh: 25 },
    { ism: "Laylo", yosh: 21 },
];



// --- Tuple (aniq tartibdagi turli type’li array) ---

let user2: [string, number] = ["Aziz", 30];

/* user[0] — string, user[1] — number. */



// --- Readonly array --- 

let raqamlar: readonly number[] = [1, 2, 3]; // raqamlar.push(4); ❌ Xato beradi



// --- Arrayga turli turlarni ruxsat berish (union type) ---

let aralash: (number | string)[] = [1, "ikki", 3, "to'rt"];



// --- Function array (funksiya turlarining array'i) ---

let funksiyalar: (() => void)[] = [
    () => console.log("A"),
    () => console.log("B"),
];



// --- Array bilan ishlash: map, filter, reduce va boshqalar ---

let nums: number[] = [1, 2, 3, 4, 5];

let juftlar = nums.filter((s) => s % 2 === 0); // [2, 4]
let kvadratlar = nums.map((s) => s * s);       // [1, 4, 9, 16, 25]
let summa = nums.reduce((a, b) => a + b, 0);   // 15



// --- Multidimensional array (ko‘p o‘lchovli array) ---

let matritsa: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6],
];
