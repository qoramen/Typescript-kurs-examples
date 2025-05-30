/* abstract class – bu to‘liq bo‘lmagan class bo‘lib, to‘g‘ridan-to‘g‘ri obyekt qilib bo‘lmaydi.

   Unda aniqlanmagan (abstract) methodlar bo‘ladi, ular subclass (meros oluvchi) tomonidan bajarilishi kerak.

   Bu class asosiy shablon yoki interfeysga o‘xshash vazifani bajaradi, lekin kodli bazani ham o‘z ichiga oladi. */

// --- Misol: abstract class bilan ---

abstract class Animal11 {
    constructor(public name: string) { }

    abstract makeSound(): void; // faqat imzo, lekin kod yo‘q

    move(): void {
        console.log(`${this.name} is moving`);
    }
}

class Dog11 extends Animal11 {
    makeSound(): void {
        console.log("Woof!");
    }
}

const dog11 = new Dog11("Rex");
dog11.makeSound(); // Woof!
dog11.move();      // Rex is moving

// const a = new Animal("???"); ❌ Error: abstract classdan object yasab bo'lmaydi



// --- Muhim jihatlar: ---
/*
| Xususiyat                          | Tavsifi                                                                 |
| ---------------------------------- | ----------------------------------------------------------------------- |
| `abstract class` obyekt qilinmaydi | ❌ `new` bilan ishlatilmaydi                                            |
| `abstract` metod                   | Imzo bor, tanasi yo‘q. Subclass bajaradi                                |
| Oddiy metod                        | `abstract class` ichida to‘liq yozilishi mumkin                         |
| Subclass                           | `extends` orqali meros olib, barcha `abstract` metodlarni yozishi shart |
*/



// --- Real hayotdan misol: Transportlar ---

abstract class Transport {
    abstract startEngine(): void;

    stopEngine(): void {
        console.log("Engine stopped");
    }
}

class Car11 extends Transport {
    startEngine(): void {
        console.log("Car engine started");
    }
}

class Plane extends Transport {
    startEngine(): void {
        console.log("Plane engine started");
    }
}

const c11 = new Car11();
c11.startEngine(); // Car engine started
c11.stopEngine();  // Engine stopped



// --- abstract bilan interfeys o‘rnini bosish ---

abstract class Shape12 {
    abstract getArea(): number;
}

class Circle12 extends Shape12 {
    constructor(public radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

/* Bu yerda Shape interfeysga o‘xshaydi, lekin kod ham o‘z ichida tutmoqda. */



// --- abstract class vs interface ---
/* 
| Xususiyat        | `abstract class`         | `interface`                                        |
| ---------------- | ------------------------ | -------------------------------------------------- |
| Method tanasi    | Bo'lishi mumkin          | Bo‘lmaydi (faqat imzo)                             |
| Field qiymati    | O‘zida saqlashi mumkin   | `readonly` va imzo, lekin qiymat yo‘q              |
| Constructor      | Bor (odatda `protected`) | Yo‘q                                               |
| Ko‘p meros olish | Yo‘q                     | ✅ Bir nechta `interface` implement qilish mumkin  |
| Maqsad           | Shablon + biroz kod      | Faqat kontrakt (qoidalar to‘plami)                 |
*/

// --- Xulosa ---

/* abstract class – bu to‘liq bo‘lmagan class, shunchaki asosiy qoidalarni belgilaydi.

   abstract metodlar – subclass majbur bajarishi kerak.

   Real loyihalarda abstract class – OOP strukturasini to‘g‘ri tashkil qilishda ishlatiladi. */