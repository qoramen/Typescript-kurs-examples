/* TypeScript’da implements — bu class biror interface (yoki bir nechta interface) ni amalga oshirayotganini bildiradi.

   Ya’ni, class interface’da e’lon qilingan barcha property va methodlarni majburiy implement qilishi kerak. */

// --- Oddiy implements misol ---

interface Animal {
    name: string;
    makeSound(): void;
}

class Dog21 implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Woof!");
    }
}

const dog21 = new Dog21("Rex");
dog21.makeSound(); // Woof!

/* Dog class’i Animal interface’dagi name va makeSound() ni to‘liq bajarishi majburiy. */



// --- Bir nechta interface implement qilish ---

interface CanFly {
    fly(): void;
}

interface CanSwim {
    swim(): void;
}

class Duck implements CanFly, CanSwim {
    fly(): void {
        console.log("Flying");
    }

    swim(): void {
        console.log("Swimming");
    }
}

/* Duck ikkala interface’dagi metodlarni ham implement qiladi. */



// --- Interface + class birga ishlashi ---

interface Logger12 {
    log(message: string): void;
}

// class ConsoleLogger implements Logger12 {
//     log(message: string): void {
//         console.log("Log:", message);
//     }
// }

/* ConsoleLogger — bu Logger interface’ni amalga oshiradigan class. */



// --- Interface majburligi ---

/* Agar class interface’da e’lon qilingan property yoki methodni bajarmasa — kompilyatsiya xatosi bo‘ladi: */

interface Vehicle21 {
    start(): void;
}

// ❌ Xato: start() metod yo‘q
// class Car12 implements Vehicle21 {
//     // error: Property 'start' is missing
// }



// --- Interface bilan type checking ---

function startVehicle(v: Vehicle21) {
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