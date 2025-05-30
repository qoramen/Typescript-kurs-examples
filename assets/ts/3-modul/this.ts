/* this — bu jorda ishlatilayotgan kontekstga ishora qiluvchi kalit so‘z. U:

   classdagi obyektga,

   methodni chaqirgan obyektga,

   yoki hozirgi kontektga bog‘liq holda har xil qiymatga ega bo‘ladi. */

// --- Misol: Class ichida this ---

class Person13 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const p11 = new Person13("Ali");
p11.greet(); // Hello, my name is Ali

/* Bu yerda this.name — obyektning name xususiyatini bildiradi. */



// --- Muammo: this kontekstini yo‘qotish ---
/*
class Timer {
    seconds = 0;

    start() {
        setInterval(function () {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    }
}

const t = new Timer();
t.start(); // ❌ NaN yoki undefined chiqadi
*/

/* Nega? Chunki function () – bu this ni global kontekstga bog‘laydi. */



// --- Yechim: arrow function bilan thisni saqlab qolish ---

class Timer {
    seconds = 0;

    start() {
        setInterval(() => {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    }
}

/* Arrow function thisni atrofdagi kontekstdan oladi – ya'ni Timer klassining obyektidan. */



// --- this boshqa joylarda ---

/* 1. Obyekt methodida: */
const user14 = {
    name: "Sara",
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    },
};
user14.greet(); // Hi, I'm Sara


/* 2. Alohida funksiya sifatida chaqirilsa: */
/*
function sayName() {
    console.log(this);
}
sayName(); // Node.js: global, Browser: window
*/


/* 3. bind, call, apply orqali thisni o‘zgartirish: */
const person = { name: "John" };
function sayHello(this: any) {
    console.log("Hi " + this.name);
}
sayHello.call(person); // Hi John



// ---  TypeScript bilan this type-ni aniqlash ---

function greet(this: { name: string }) {
    console.log("Hi " + this.name);
}

const user15 = { name: "Ali", greet };
user15.greet(); // Hi Ali

/* TypeScript’da this uchun aniq tip berish imkoniyati bor. */



// --- Xulosa ---
/*
| Holat                   | `this` nimani bildiradi?             |
| ----------------------- | ------------------------------------ |
| Class ichida            | O‘sha obyektni                       |
| Obyekt methodi          | Obyektda ishlatiladi                 |
| Oddiy funksiya          | Global kontekst (`window`, `global`) |
| Arrow function          | Tashqi `this` dan foydalanadi        |
| `call`, `bind`, `apply` | `this`ni qo‘lda o‘zgartirish mumkin  |
*/