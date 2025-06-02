"use strict";
/* Class method — bu class ichida yozilgan funksiyalar bo‘lib, ular class obyektlariga tegishli bo‘ladi. */
// --- Oddiy class metodi ---
class Person1 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const user122 = new Person1("Ali");
user122.greet(); // Hello, my name is Ali
// --- Method parameter va return qiymat ---
class Calculator {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
}
const calc1 = new Calculator();
console.log(calc1.add(2, 3)); // 5
console.log(calc1.multiply(4, 5)); // 20
// --- Private method ---
class Bank {
    log(message) {
        console.log("Log:", message);
    }
    withdraw(amount) {
        this.log(`Withdrew ${amount}`);
    }
}
const bank = new Bank();
bank.withdraw(100);
// bank.log("Test"); ❌ Xato: private method
// --- Static method ---
class MathUtils {
    static square(x) {
        return x * x;
    }
}
console.log(MathUtils.square(6)); // 36
/* Static metodlar obyektga emas, class’ning o‘ziga tegishli bo‘ladi. */
// --- Method chaining (zanjirlangan metodlar) ---
class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
        return this;
    }
    decrement() {
        this.count--;
        return this;
    }
    print() {
        console.log("Count:", this.count);
        return this;
    }
}
new Counter().increment().increment().decrement().print(); // Count: 1
// --- Method overloading bilan ---
class Logger12 {
    log(value) {
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
