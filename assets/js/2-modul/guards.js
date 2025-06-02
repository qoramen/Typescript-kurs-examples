"use strict";
/* Type Guard — bu TypeScript’ga qiymatning turini aniqlashga yordam beruvchi kod qismi.
   U yordamida turga xos xususiyatlar yoki metodlarni ishlatish mumkin bo‘ladi. */
// --- typeof type guard ---
function printValue(value) {
    if (typeof value === "string") {
        console.log("String:", value.toUpperCase());
    }
    else {
        console.log("Number:", value.toFixed(2));
    }
}
// --- instanceof type guard ---
class Dog1 {
    bark() { console.log("Woof!"); }
}
class Cat {
    meow() { console.log("Meow!"); }
}
function speak(animal) {
    if (animal instanceof Dog1) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
function isBird(pet) {
    return pet.fly !== undefined;
}
function move(pet) {
    if (isBird(pet)) {
        pet.fly();
    }
    else {
        pet.swim();
    }
}
