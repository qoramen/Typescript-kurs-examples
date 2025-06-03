// --- keyof — Object kalitlarini type sifatida olish ---

type User34 = {
    id: number;
    name: string;
};

type UserKeys = keyof User34; // "id" | "name"

/* keyof User — bu User type'ining barcha property nomlarini "id" | "name" sifatida beradi. */



// --- Amalda foydalanish: --- 

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user34 = { id: 1, name: "Ali" };

const name34 = getValue(user34, "name"); // ✅ OK: "Ali"
// const age = getValue(user, "age"); ❌ Error: "age" mavjud emas

/* Bu yerda K extends keyof T degani: key faqat T obyektida mavjud kalitlardan biri bo'lishi kerak */



// --- typeof — Qiymatdan type olish ---

const myName = "Ali";

type NameType = typeof myName; // string

/* typeof myName — bu myName o‘zgaruvchisining turini (string) olib beradi. */



// --- Object type olish ---

const user43 = {
    id: 1,
    name: "Ali"
};

type UserType = typeof user43;
// UserType => { id: number; name: string }



// --- typeof + keyof kombinatsiyasi ---

const user23 = {
    id: 1,
    name: "Ali",
    age: 30
};

type UserKeys23 = keyof typeof user23; // "id" | "name" | "age"

/* Bu user objectining kalitlarini type sifatida oladi. */



// --- Real misol: Faqatgina mavjud kalitlarni ruxsat berish ---

const settings = {
    darkMode: true,
    fontSize: 16
};

function getSetting(key: keyof typeof settings) {
    return settings[key];
}

const value = getSetting("fontSize"); // OK
// getSetting("theme") ❌ Error: "theme" mavjud emas



// --- Xulosa ---
/*
| Operator           | Nima qiladi                                                |
| ------------------ | ---------------------------------------------------------- |
| `keyof`            | Object tipining kalitlarini oladi                          |
| `typeof`           | Mavjud o‘zgaruvchining turini oladi                        |
| `keyof typeof obj` | Obyektdagi mavjud kalitlar ro‘yxatini type sifatida beradi |
*/