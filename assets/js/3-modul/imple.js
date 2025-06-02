"use strict";
/* TypeScript’da implements — bu class biror interface (yoki bir nechta interface) ni amalga oshirayotganini bildiradi.

   Ya’ni, class interface’da e’lon qilingan barcha property va methodlarni majburiy implement qilishi kerak. */
class Dog21 {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Woof!");
    }
}
const dog21 = new Dog21("Rex");
dog21.makeSound(); // Woof!
class Duck {
    fly() {
        console.log("Flying");
    }
    swim() {
        console.log("Swimming");
    }
}
// ❌ Xato: start() metod yo‘q
// class Car12 implements Vehicle21 {
//     // error: Property 'start' is missing
// }
// --- Interface bilan type checking ---
function startVehicle(v) {
    v.start();
}
// const car = new Car12(); // Car implements Vehicle
// startVehicle(car);     // ✅ ishlaydi
// --- Xulosa ---
/*
| Konsept       | Tavsif                                              |
| ------------- | --------------------------------------------------- |
| `implements`  | Class interface’dagi method/property’larni bajaradi |
| 1ta interface | `class X implements InterfaceName`                  |
| Nta interface | `class X implements A, B, C`                        |
| Foyda         | `interface` orqali kodga qat’iy tuzilma berish      |
*/ 
