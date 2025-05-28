/* enum – bu bir-biriga bog‘liq, nomlangan doimiy qiymatlar to‘plami. Odatda ular variantlar 
   ro‘yxatini aniq ifodalashda ishlatiladi: kunlar, holatlar, rollar, ranglar, tugmalar holati, va hokazo. */7

// --- Number-based enum (raqamli enum) ---

enum Kun {
    Dushanba,   // 0
    Seshanba,   // 1
    Chorshanba, // 2
}

let bugun: Kun = Kun.Seshanba;
console.log(bugun); // 1



// --- Enumga qiymat berish ---

enum Holat {
    Boshlash = 1,
    Yozish = 2,
    Tugatish = 3,
}

console.log(Holat.Tugatish); // 3



// --- String-based enum --- 

enum Rang {
    Qizil = "RED",
    Yashil = "GREEN",
    Kok = "BLUE",
}

let tanlanganRang: Rang = Rang.Qizil;
console.log(tanlanganRang); // "RED"



// --- Enum’dan qiymatni olish (reverse mapping faqat number enumda ishlaydi) ---

enum Holat1 {
    Yangi = 0,
    QabulQilindi = 1,
    BekorQilindi = 2,
}

console.log(Holat1[1]); // "QabulQilindi"

/* ⚠️ Bu faqat number enumlarda ishlaydi. String enumlarda bu mavjud emas. */



// --- Enum’ni type sifatida ishlatish ---

enum Role {
    Admin,
    User,
    Guest,
}

function checkAccess(role: Role) {
    if (role === Role.Admin) {
        console.log("Adminga ruxsat bor");
    }
}

checkAccess(Role.User); // "Adminga ruxsat bor" chiqmaydi



// --- Const enum (eng optimal, kompilatsiyada yo‘qoladi) ---

const enum Tugma1 {
    Bosildi,
    Bosilmadi,
}

let tugma: Tugma1 = Tugma1.Bosildi;

/* const enum ishlatilsa, kompilatsiyada enum o‘rniga oddiy raqamlar joylashtiriladi (performance uchun yaxshi). */



// --- Enum bilan switch ---

enum Operatsiya {
    Qoshish,
    Ayirish,
    Kopaytirish,
    Bolish,
}

function hisobla(a: number, b: number, op: Operatsiya): number {
    switch (op) {
        case Operatsiya.Qoshish: return a + b;
        case Operatsiya.Ayirish: return a - b;
        case Operatsiya.Kopaytirish: return a * b;
        case Operatsiya.Bolish: return a / b;
    }
}

console.log(hisobla(10, 5, Operatsiya.Bolish)); // 2



// --- Enum’ni object yoki type sifatida almashtirish mumkinmi? ---

// Agar enum’lar haddan ortiq murakkab bo‘lsa, ba’zan quyidagilar o‘rniga ishlatiladi:
const Ruxsat = {
    OQISH: "read",
    YOZISH: "write",
    OCHIRISH: "delete",
} as const;

type RuxsatTuri = typeof Ruxsat[keyof typeof Ruxsat];

/* Bu usul enum’ni string literal union type bilan almashtirish hisoblanadi.*/



// --- Enum arrayda ishlatish ---

enum Baho {
    Yomon = 1,
    Orta = 2,
    Alo = 3,
}

let baholar3: Baho[] = [Baho.Yomon, Baho.Alo];



// --- Enumni JSON orqali serialize qilish ---

enum Holat {
    Yangi = "new",
    Eskirgan = "old",
}

let obj = {
    nom: "Kitob",
    holat: Holat.Yangi,
};

console.log(JSON.stringify(obj)); // {"nom":"Kitob","holat":"new"}