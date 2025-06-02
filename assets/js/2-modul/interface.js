"use strict";
/* interface — bu object’ning strukturasini aniqlovchi type shablon.
   Ayniqsa, class, React props, yoki OOP uslubidagi kodda keng ishlatiladi. */
const user13 = {
    id: 1,
    name: "Ali",
    isAdmin: false
};
const p1 = { id: 1, name: "Noutbuk" }; // OK
const config = {
    version: "1.0.0",
    theme: "dark"
}; // config.version = "2.0.0"; // ❌ Xato: readonly
const g = {
    greet(name) {
        return `Salom, ${name}!`;
    }
};
const s1 = {
    name: "Murod",
    group: 305
};
const obj1 = {
    a: "salom",
    b: 42,
    c: true
};
const tilTarjimasi = {
    hello: "salom",
    world: "dunyo"
};
function Button({ text, onClick }) {
    // return <button onClick={ onClick }> { text } </button>;
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Woof woof!");
    }
}
