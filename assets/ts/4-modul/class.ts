/* Generic class — bu classni yaratishda qaysi type bilan ishlashini 
   belgilash imkonini beruvchi class. */

// --- Syntax ---

class Box<T> {
    content: T;
    constructor(value: T) {
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }
}



// --- String bilan ishlaydigan class ---

const stringBox = new Box<string>("Salom");
console.log(stringBox.getContent()); // "Salom"



// --- Number bilan ishlaydigan class ---

const numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // 123

/* Bu yerda Box<T> classi istalgan T turida ishlaydi — bu kodni qayta ishlatish 
   va type xavfsizligini ta’minlaydi ✅ */



// --- Bir nechta generic parametrlari ---

class Pair<K, V> {
    constructor(public key: K, public value: V) { }

    print(): void {
        console.log(`${this.key}: ${this.value}`);
    }
}

const userAge = new Pair<string, number>("Ali", 25);
userAge.print(); // Ali: 25



// --- Generic constraint bilan class ---

interface HasId {
    id: number;
}

class Repository<T extends HasId> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
}

const repo = new Repository<{ id: number; name: string }>();
repo.add({ id: 1, name: "Ali" });
console.log(repo.findById(1)); // { id: 1, name: "Ali" }

/* T extends HasId orqali biz T faqat idga ega bo‘lgan object bo‘lishi kerak 
   deb cheklab qo‘yamiz. */



// --- Generic class bilan Promise ichida foydalanish ---

class ApiResponse<T> {
    constructor(public data: T, public success: boolean) { }
}

const userResponse = new ApiResponse<{ id: number; name: string }>(
    { id: 2, name: "Vali" },
    true
);

console.log(userResponse.data.name); // Vali



// --- Xulosa ---
/*
| Yozish                  | Ma’nosi                                        |
| ----------------------- | ---------------------------------------------- |
| `class MyClass<T>`      | Generic class, `T` bilan ishlaydi              |
| `new MyClass<string>()` | Classga `string` type uzatish                  |
| `T extends SomeType`    | `T` faqat `SomeType`ga o‘xshash bo‘lishi kerak |
| `class Pair<K, V>`      | Ikkita tur bilan ishlaydigan class             |
*/