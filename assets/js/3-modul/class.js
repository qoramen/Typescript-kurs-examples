"use strict";
/* class bu obyektlar (instansiyalar) uchun shablon (template) hisoblanadi.
   U xususiyatlar (properties) va metodlar (methods) ni o‘z ichiga oladi. */
// --- Oddiy class yaratish ---
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}
const user33 = new Person("Ali", 25);
user33.greet(); // Hi, my name is Ali and I'm 25 years old.
// --- Access modifier’lar (private, public, protected) --- 
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    updateLog() {
        console.log("Log updated");
    }
}
const account = new BankAccount("Zafar", 1000);
console.log(account.getBalance()); // 1000
// account.balance ❌ xato: private field
// --- Readonly property ---
class User22 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const u = new User22(1, "Lola");
// u.id = 2 ❌ Xato: id readonly
// --- Inheritance (meros olish) ---
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Some generic sound");
    }
}
class Dog2 extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
const dog = new Dog2("Rex");
dog.makeSound(); // Woof!
// --- Abstract class ---
class Shape1 {
    printArea() {
        console.log("Area is: " + this.getArea());
    }
}
class Circle extends Shape1 {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
const c = new Circle(5);
c.printArea(); // Area is: 78.539816...
// --- Static field va metodlar ---
class MathHelper {
    static square(x) {
        return x * x;
    }
}
MathHelper.PI = 3.14;
console.log(MathHelper.PI); // 3.14
console.log(MathHelper.square(4)); // 16
// --- Parameter properties (qisqa yozish) ---
class Car {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
const car = new Car("BMW", 50000);
console.log(car.brand); // BMW
console.log(car.getPrice()); // 50000
// --- Xulosa ---
/*
| Konsepsiya       | Tavsif                                               |
| ---------------- | ---------------------------------------------------- |
| `class`          | Ob’ektlar uchun shablon                              |
| `constructor`    | Ob’ekt yaratilganda chaqiriladi                      |
| `public/private` | Field’ga tashqi kirishni cheklash                    |
| `readonly`       | Field faqat constructor’da berilishi mumkin          |
| `extends`        | Meros olish (inheritance)                            |
| `abstract`       | Shablon class, to‘g‘ridan-to‘g‘ri chaqirib bo‘lmaydi |
| `static`         | Class darajasidagi metod/field                       |
*/ 
