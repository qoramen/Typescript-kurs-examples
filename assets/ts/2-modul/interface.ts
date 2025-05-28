/* interface — bu object’ning strukturasini aniqlovchi type shablon. 
   Ayniqsa, class, React props, yoki OOP uslubidagi kodda keng ishlatiladi. */

// --- Oddiy interface ---

interface User1 {
    id: number;
    name: string;
    isAdmin: boolean;
}

const user13: User1 = {
    id: 1,
    name: "Ali",
    isAdmin: false
};



// --- Optional property (?) ---

interface Product {
    id: number;
    name: string;
    price?: number; // ixtiyoriy
}

const p1: Product = { id: 1, name: "Noutbuk" }; // OK



// --- Readonly property ---

interface Settings {
    readonly version: string;
    theme: string;
}

const config: Settings = {
    version: "1.0.0",
    theme: "dark"
}; // config.version = "2.0.0"; // ❌ Xato: readonly



// --- Function type ichida ---

interface Greeter {
    greet(name: string): string;
}

const g: Greeter = {
    greet(name) {
        return `Salom, ${name}!`;
    }
};



// --- Interface extends (meros olish) ---

interface Person {
    name: string;
}

interface Student extends Person {
    group: number;
}

const s1: Student = {
    name: "Murod",
    group: 305
};



// --- Multiple inheritance (bir nechtasidan meros olish) ---

interface A { a: string; }
interface B { b: number; }

interface C extends A, B {
    c: boolean;
}

const obj1: C = {
    a: "salom",
    b: 42,
    c: true
};



// --- Index signature ---

interface Dictionary {
    [key: string]: string;
}

const tilTarjimasi: Dictionary = {
    hello: "salom",
    world: "dunyo"
};



// --- React props bilan ishlatish ---

interface ButtonProps2 {
    text: string;
    onClick: () => void;
}

function Button({ text, onClick }: ButtonProps2) {
    // return <button onClick={ onClick }> { text } </button>;
}



// --- Interface + Class bilan ---

interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log("Woof woof!");
    }
}