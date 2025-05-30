/* Access Modifiers — kirish cheklovchilari
   TypeScript’da uchta asosiy access modifier mavjud: */
/*
| Modifier    | Tavsifi                                                                |
| ----------- | ---------------------------------------------------------------------- |
| `public`    | Hamma joydan foydalanish mumkin (`default` qiymat)                     |
| `private`   | Faqat class ichida ishlatiladi                                         |
| `protected` | Class va uning `child` classlarida ishlatiladi (lekin tashqarida emas) |
*/

// --- Misol: public, private, protected ---

class Person122 {
    public name: string;
    private age: number;
    protected country: string;

    constructor(name: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    getAge(): number {
        return this.age; // ✅ private ga class ichida kirish mumkin
    }
}

class Student122 extends Person122 {
    getCountry(): string {
        return this.country; // ✅ protected ga child class kirishi mumkin
    }
}

const p2 = new Person122("Ali", 25, "Uzbekistan");

console.log(p2.name);     // ✅ public
// console.log(p.age);   ❌ Error: private
// console.log(p.country);❌ Error: protected



/* Composition (tarkibiy tuzilma)
Composition — bu extendsdan farqli ravishda boshqa class ni o'z ichiga olish (has-a relationship).

Ya’ni: Car class Engine classga ega (lekin undan meros olmaydi). */

// --- Misol: Composition (has-a munosabat) ---

class Engine {
    start() {
        console.log("Engine started");
    }
}

class Car122 {
    private engine: Engine;

    constructor() {
        this.engine = new Engine();
    }

    startCar() {
        this.engine.start(); // Composition orqali boshqa classni ishlatmoqda
        console.log("Car is moving");
    }
}

const car12 = new Car122();
car12.startCar();
// Engine started
// Car is moving

/* Bu yerda Car → Engine ni "egalik qiladi" — ya’ni has-a munosabat.
   extends bo‘lmaganligi sababli Engine mustaqil ishlay oladi. */



// --- Composition vs Inheritance ---
/*
| Xususiyat        | Inheritance (`extends`)          | Composition (`has-a`)                        |
| ---------------- | -------------------------------- | -------------------------------------------- |
| Munosabat        | `is-a` (Student **is a** Person) | `has-a` (Car **has a** Engine)               |
| Moslashuvchanlik | Kamroq (qattiq bog‘liq)          | Ko‘proq (modullar mustaqil ishlaydi)         |
| Foydalanish      | O‘xshash obyektlar uchun         | Turli obyektlar ichida qayta ishlatish uchun |
*/



// --- Composition + Access modifier birgalikda ---

class Keyboard {
    type(): void {
        console.log("Typing...");
    }
}

class Computer {
    private keyboard: Keyboard;

    constructor() {
        this.keyboard = new Keyboard();
    }

    useKeyboard(): void {
        this.keyboard.type(); // private ichidan chaqirilyapti
    }
}

const pc = new Computer();
// pc.keyboard.type(); ❌ Error: keyboard private
pc.useKeyboard(); // ✅ "Typing..."



// --- Xulosa ---
/*
| Konsept       | Tavsifi                                             |
| ------------- | --------------------------------------------------- |
| `public`      | Hamma joydan ko‘rinadi                              |
| `private`     | Faqat class ichida                                  |
| `protected`   | Class va uning subclass ichida                      |
| `composition` | `has-a` aloqada — bir class boshqasini ichiga oladi |
*/