/* Generic — bu ma’lum bir turga bog‘liq bo‘lmagan, lekin tur aniqligini saqlovchi yozuv. 
   Ya’ni, qayta ishlatiladigan va har xil typelarga mos keladigan kod yozish imkonini beradi.

   🔧 Oddiy qilib:
   Generic — bu “tur kiritiladigan o‘zgaruvchi”, masalan: <T>, <U>, <K, V>, va h.k. */

// --- Misol: Generic bilan funksiyalar ---

function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Salom")); // "Salom"
console.log(identity<number>(42));      // 42

/* Bu yerda T — bu har qanday type bo‘lishi mumkin, lekin u saqlanadi: kiritgan type chiqadi. */



// --- Generic bo‘lmagan yondashuv ---

function identity1(value: any): any {
    return value;
}

let result1 = identity(5); // number kiradi
// result1.toUpperCase(); ❌ TypeScript bu xatoni ushlay olmaydi

/* any type — type xavfsizligini buzadi. Generic esa buni to‘g‘rilaydi ✅ */



// --- Generic Array ---

function getFirst<T>(arr: T[]): T {
    return arr[0];
}

const num = getFirst<number>([1, 2, 3]);   // number
const str = getFirst<string>(["a", "b"]); // string



// --- Generic bilan Interface ---

interface Box<T> {
    content: T;
}

const box1: Box<string> = { content: "Kitob" };
const box2: Box<number> = { content: 123 };



// --- Generic bilan Class ---

class DataStore<T> {
    private data: T[] = [];

    add(item: T) {
        this.data.push(item);
    }

    getAll(): T[] {
        return this.data;
    }
}

const users = new DataStore<string>();
users.add("Ali");
users.add("Vali");

const numbers = new DataStore<number>();
numbers.add(1);
numbers.add(2);



// --- Generic Constraints (cheklash) ---

function printLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

printLength("Hello");     // 5
printLength([1, 2, 3]);    // 3
// printLength(123); ❌ numberda length yo‘q

/* T extends {...} — bu orqali qanday typelarni qabul qilish mumkinligini cheklaysiz. */



// --- Reusable va Type-Safe kodlar ---

/* Generic yordamida yozilgan kod:

   Qayta ishlatiladi (reusable)

   Aniq typelarni saqlaydi (type-safe)

   Katta loyihalarda xavfsizlikni oshiradi */



// --- Xulosa ---
/*
| Afzalliklar    | Tushuntirish                                   |
| -------------- | ---------------------------------------------- |
| Reusability    | Bir nechta tur uchun bir kod yozasiz           |
| Type-safety    | Har xil xatoliklarni kompilyatsiyada aniqlaydi |
| Oson debugging | Type aniqligi tufayli xatoliklarni topish oson |
| IntelliSense   | IDE orqali to‘liq yordam beradi                |
*/