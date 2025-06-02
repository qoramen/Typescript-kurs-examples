"use strict";
/* extends – bir class boshqa bir class'dan meros olishini bildiradi (parent → child).

   super – ota class (parent class) metod yoki konstruktorini chaqirish uchun ishlatiladi. */
// --- Oddiy extends misol ---
class Animal22 {
    move() {
        console.log("Animal is moving");
    }
}
class Dog22 extends Animal22 {
    bark() {
        console.log("Woof!");
    }
}
const dog22 = new Dog22();
dog22.bark(); // Woof!
dog22.move(); // Animal is moving (meros olgan)
/* Dog class’i Animal class’dagi move() metodini meros qilib oladi. */
// --- super() – parent constructor’ini chaqirish ---
class Person11 {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person11 {
    constructor(name, grade) {
        super(name); // parent constructor’ini chaqirish
        this.grade = grade;
    }
    info() {
        console.log(`${this.name} is in grade ${this.grade}`);
    }
}
const s = new Student("Ali", 9);
s.info(); // Ali is in grade 9
/* super(name) yordamida Person class’dagi constructor ishga tushiriladi. */
// --- Parent metodini chaqirish (super.method()) ---
class Logger121 {
    log(msg) {
        console.log("LOG:", msg);
    }
}
class FileLogger extends Logger121 {
    log(msg) {
        super.log(msg); // ota klassdagi log
        console.log("Saved to file:", msg);
    }
}
const logger12 = new FileLogger();
logger.log("Error occurred");
// LOG: Error occurred
// Saved to file: Error occurred
/* super.log(msg) — ota class’dagi log() metodni chaqiradi. */
// --- Real hayotga yaqin misol ---
class Vehicle {
    start() {
        console.log("Starting vehicle...");
    }
}
class Car12 extends Vehicle {
    start() {
        super.start(); // "Starting vehicle..."
        console.log("Starting car engine...");
    }
}
const myCar = new Car12();
myCar.start();
// Starting vehicle...
// Starting car engine...
// --- Xulosa ---
/*
| Keyword          | Ma’nosi                                                   |
| ---------------- | --------------------------------------------------------- |
| `extends`        | Child class parent class'dan meros oladi                  |
| `super()`        | Parent class constructor'ini chaqiradi                    |
| `super.method()` | Parent class’dagi metodni chaqiradi                       |
| Foyda            | Kodni qayta ishlatish, umumiy xatti-harakatlarni ajratish |
*/ 
