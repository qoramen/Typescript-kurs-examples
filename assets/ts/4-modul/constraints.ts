/* Generic Constraints — bu T yoki boshqa generic tiplar qanday xususiyatlarga ega 
   bo‘lishi kerakligini belgilaydi.

   Ma’nosi: Biz T faqat “ma’lum turdagi” qiymatlar bo‘lishini xohlaymiz. 
   Masalan, length bo‘lishi, yoki id: number bo‘lishi. */

// --- Length xususiyatini majburiy qilish ---

function logLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

logLength("Salom");      // OK – stringda length bor
logLength([1, 2, 3]);     // OK – arrayda ham length bor
// logLength(123);       // ❌ numberda length yo‘q

/* T extends { length: number } — bu T faqat lengthga ega bo‘lgan object 
   bo‘lishi kerakligini bildiradi. */



// --- Interface asosida cheklash ---

interface User33 {
    id: number;
    name: string;
}

function printUser<T extends User33>(user: T): void {
    console.log(user.name);
}

const u3 = { id: 1, name: "Ali", age: 30 };
printUser(u); // OK

// printUser({ name: "No ID" }); ❌ – `id` bo‘lishi kerak

/* T endi kamida User tipidagi xususiyatlarga ega bo‘lishi kerak. */



// --- Bir nechta constraint qo‘shish (extends, keyof) ---

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user55 = { id: 1, name: "Vali" };

getProperty(user55, "id");   // OK
getProperty(user55, "name"); // OK
// getProperty(user, "age"); ❌ "age" yo‘q

/* Bu yerda:
   T — obyekt turi,
   K — Tning mavjud keylaridan biri. */



// --- Maxsus class, object, array, primitive bilan constraint ---
/*
| Constraint                 | Ma’nosi                                     |
| -------------------------- | ------------------------------------------- |
| `T extends number`         | faqat number typelar                        |
| `T extends string`         | faqat string typelar                        |
| `T extends object`         | faqat object bo‘lishi kerak                 |
| `T extends SomeClass`      | faqat shu classdan voris bo‘lganlar         |
| `T extends { key: value }` | faqat belgilangan strukturaga ega objectlar |
*/



// --- Default Generic value bilan constraint ---

function process<T extends string | number = string>(value: T): T {
    return value;
}

process("hello"); // OK
process(123);     // OK

/* Bu yerda T default bo‘lib string qabul qiladi, lekin number ham mumkin. */



// --- Xulosa ---
/*
| Yozish                         | Ma’nosi                                               |
| ------------------------------ | ----------------------------------------------------- |
| `T extends U`                  | T — U’ning ichki turlari yoki o‘xshash struktura      |
| `T extends { length: number }` | T — faqat `length`ga ega bo‘lishi kerak               |
| `K extends keyof T`            | K — T ichidagi mavjud property nomlari bo‘lishi kerak |
*/