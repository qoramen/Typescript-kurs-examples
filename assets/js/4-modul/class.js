"use strict";
/* Generic class — bu classni yaratishda qaysi type bilan ishlashini
   belgilash imkonini beruvchi class. */
// --- Syntax ---
class Box {
    constructor(value) {
        this.content = value;
    }
    getContent() {
        return this.content;
    }
}
// --- String bilan ishlaydigan class ---
const stringBox = new Box("Salom");
console.log(stringBox.getContent()); // "Salom"
// --- Number bilan ishlaydigan class ---
const numberBox = new Box(123);
console.log(numberBox.getContent()); // 123
/* Bu yerda Box<T> classi istalgan T turida ishlaydi — bu kodni qayta ishlatish
   va type xavfsizligini ta’minlaydi ✅ */
// --- Bir nechta generic parametrlari ---
class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    print() {
        console.log(`${this.key}: ${this.value}`);
    }
}
const userAge = new Pair("Ali", 25);
userAge.print(); // Ali: 25
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    findById(id) {
        return this.items.find(item => item.id === id);
    }
}
const repo = new Repository();
repo.add({ id: 1, name: "Ali" });
console.log(repo.findById(1)); // { id: 1, name: "Ali" }
/* T extends HasId orqali biz T faqat idga ega bo‘lgan object bo‘lishi kerak
   deb cheklab qo‘yamiz. */
// --- Generic class bilan Promise ichida foydalanish ---
class ApiResponse {
    constructor(data, success) {
        this.data = data;
        this.success = success;
    }
}
const userResponse = new ApiResponse({ id: 2, name: "Vali" }, true);
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
