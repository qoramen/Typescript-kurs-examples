/* Class method — bu class ichida yozilgan funksiyalar bo‘lib, ular class obyektlariga tegishli bo‘ladi. */

// --- Oddiy class metodi ---

class Person1 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const user122 = new Person1("Ali");
user122.greet(); // Hello, my name is Ali



// --- Method parameter va return qiymat ---

class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }
}

const calc1 = new Calculator();
console.log(calc1.add(2, 3));       // 5
console.log(calc1.multiply(4, 5));  // 20



// --- Private method ---

class Bank {
    private log(message: string): void {
        console.log("Log:", message);
    }

    withdraw(amount: number): void {
        this.log(`Withdrew ${amount}`);
    }
}

const bank = new Bank();
bank.withdraw(100);
// bank.log("Test"); ❌ Xato: private method



// --- Static method ---

class MathUtils {
    static square(x: number): number {
        return x * x;
    }
}

console.log(MathUtils.square(6)); // 36

/* Static metodlar obyektga emas, class’ning o‘ziga tegishli bo‘ladi. */



// --- Method chaining (zanjirlangan metodlar) ---

class Counter {
    count: number = 0;

    increment(): this {
        this.count++;
        return this;
    }

    decrement(): this {
        this.count--;
        return this;
    }

    print(): this {
        console.log("Count:", this.count);
        return this;
    }
}

new Counter().increment().increment().decrement().print(); // Count: 1



// --- Method overloading bilan ---

class Logger12 {
    log(message: string): void;
    log(errorCode: number): void;

    log(value: any): void {
        console.log("Log:", value);
    }
}

const logger = new Logger12();
logger.log("System started");
logger.log(404);



// --- Xulosa ---
/*
| Tur                | Tavsif                                        |
| ------------------ | --------------------------------------------- |
| `method()`         | Oddiy metod – obyektga tegishli               |
| `private method()` | Faqat class ichida chaqiriladi                |
| `static method()`  | Class darajasida, obyektga emas               |
| `return this`      | Method chaining uchun imkoniyat               |
| `overload`         | Bir nechta turdagi argumentlarni qabul qilish |
*/