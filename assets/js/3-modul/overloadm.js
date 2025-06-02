"use strict";
/* TypeScript’da method overloading quyidagicha ishlaydi:

   Siz bir nechta function signatures yozasiz (faqat imzolar).

   So‘ngra bitta asosiy implementatsiya yozasiz, u barcha holatlarni qamrab oladi. */
// --- Oddiy method overloading misoli ---
class Printer {
    print(value) {
        if (typeof value === "string") {
            console.log("String:", value.toUpperCase());
        }
        else if (typeof value === "number") {
            console.log("Number:", value.toFixed(2));
        }
    }
}
const p = new Printer();
p.print("hello"); // String: HELLO
p.print(12.3456); // Number: 12.35
// --- Ko‘proq argumentlar bilan overload ---
class Adder {
    add(a, b) {
        return a + b;
    }
}
const calc = new Adder();
console.log(calc.add(2, 3)); // 5
console.log(calc.add("Hi, ", "Ali")); // Hi, Ali
// --- Turli argument soni (optional parametrlar bilan) ---
class Greeter {
    greet(name) {
        if (name) {
            console.log(`Hello, ${name}`);
        }
        else {
            console.log("Hello, guest");
        }
    }
}
const ga = new Greeter();
ga.greet(); // Hello, guest
ga.greet("Zafar"); // Hello, Zafar
class Logger11 {
    log(value) {
        console.log("Log:", value);
    }
}
// --- Xulosa ---
/*
| Asosiy tushuncha  | Tavsif                                                      |
| ----------------- | ----------------------------------------------------------- |
| Overload imzolari | Faqat imzo, implementatsiyasiz                              |
| Implementation    | Faqat bitta bo‘ladi, `any` yoki `union` orqali              |
| Maqsad            | Bir metodda bir nechta tur yoki argument soni bilan ishlash |
*/ 
