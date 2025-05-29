/* getter – bu xususiy (private) qiymatni o‘qish uchun metod.

   setter – bu qiymatni o‘zgartirish (yozish) uchun metod.

   Foydalanuvchi propertyni oddiy o‘zgaruvchidek ishlatadi, lekin aslida get/set metodlar ishlaydi. */

// --- Oddiy getter va setter misoli ---

class User11 {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName.length < 2) {
            throw new Error("Ism juda qisqa");
        }
        this._name = newName;
    }
}

const user44 = new User11("Ali");

console.log(user44.name); // 👉 get ishlaydi: "Ali"

user44.name = "Hasan";    // 👉 set ishlaydi

console.log(user44.name); // "Hasan"

/* user.name deyilganida get name() avtomatik chaqiladi.
   user.name = ... deyilganida esa set name() ishlaydi. */



// --- Foyda: validation qilish ---

class Product2 {
    private _price: number = 0;

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) throw new Error("Narx manfiy bo‘lishi mumkin emas");
        this._price = value;
    }
}

const item = new Product2();
item.price = 100;      // ✅ OK
console.log(item.price); // 100
// item.price = -50;   ❌ Xatolik: "Narx manfiy bo‘lishi mumkin emas"



// --- readonly faqat getter bilan ---

class Circle1 {
    constructor(private _radius: number) { }

    get area(): number {
        return Math.PI * this._radius ** 2;
    }
}

const c1 = new Circle1(5);
console.log(c1.area); // 78.5398...
// c.area = 100; ❌ Xatolik: setter yo‘q



// --- Getter va setter'ga type qo‘yish ---

class Person12 {
    private _age: number = 0;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value < 0 || value > 130) {
            throw new Error("Notogri yosh");
        }
        this._age = value;
    }
}



// --- Xulosa ---
/*
| `get`           | Property ni o‘qish uchun – `get name(): string`          |
| --------------- | -------------------------------------------------------- |
| `set`           | Property ni yozish uchun – `set name(v: string)`         |
| `private _name` | Asl property, tashqaridan to‘g‘ridan-to‘g‘ri o‘qilmaydi  |
| Validatsiya     | `setter` orqali kiritilayotgan ma’lumot nazorat qilinadi |
*/