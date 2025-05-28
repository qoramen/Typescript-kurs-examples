/* Type Guard — bu TypeScript’ga qiymatning turini aniqlashga yordam beruvchi kod qismi.
   U yordamida turga xos xususiyatlar yoki metodlarni ishlatish mumkin bo‘ladi. */

// --- typeof type guard ---

function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log("String:", value.toUpperCase());
    } else {
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

function speak(animal: Dog1 | Cat) {
    if (animal instanceof Dog1) {
        animal.bark();
    } else {
        animal.meow();
    }
}



// --- User-defined type guard (Funktsiyani qaytarish value is Type) ---

interface Bird {
    fly(): void;
}
interface Fish {
    swim(): void;
}

function isBird(pet: Bird | Fish): pet is Bird {
    return (pet as Bird).fly !== undefined;
}

function move(pet: Bird | Fish) {
    if (isBird(pet)) {
        pet.fly();
    } else {
        pet.swim();
    }
}