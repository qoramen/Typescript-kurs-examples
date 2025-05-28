/* TypeScript’da object type — bu obyektlarning tuzilmasini (ya’ni qanday xossalari borligini 
   va ularning turini) aniqlash uchun ishlatiladi. */

// --- Oddiy object type ---

let foydalanuvchi: { ism: string; yosh: number } = {
    ism: "Ali",
    yosh: 25,
};

/* Bu yerda foydalanuvchi obyekt bo‘lib, ism – string, yosh – number.*/



// --- Optional (majburiy bo‘lmagan) property ---

let user: { ism: string; email?: string } = {
    ism: "Ali",
};

/* email? — bu xossa bo‘lishi shart emas. */



// --- readonly (o‘zgartirib bo‘lmaydigan) property ---

let product: { readonly id: number; nom: string } = {
    id: 1,
    nom: "Noutbuk",
}; // product.id = 2; ❌ Xatolik beradi, chunki readonly



// --- Function ichida object type sifatida foydalanish ---

function foydalanuvchiniChopEt(user: { ism: string; yosh: number }) {
    console.log(`${user.ism} - ${user.yosh} yoshda`);
}

foydalanuvchiniChopEt({ ism: "Aziz", yosh: 22 });



// --- Object type ni type bilan ajratish ---

type Foydalanuvchi = {
    ism: string;
    yosh: number;
};

let user1: Foydalanuvchi = { ism: "Kamol", yosh: 30 };



// --- Object type ni interface bilan ---

interface Mashina {
    model: string;
    yil: number;
}

let m1: Mashina = {
    model: "Malibu",
    yil: 2023,
};



// --- Nested (ichki) object type ---

type Talaba = {
    ism: string;
    manzil: {
        shahar: string;
        kocha: string;
    };
};

let t1: Talaba = {
    ism: "Laylo",
    manzil: {
        shahar: "Toshkent",
        kocha: "Amir Temur",
    },
};



// --- Index signature (kalit nomlari oldindan noma’lum bo‘lsa) ---

let sozlamalar: { [kalit: string]: string } = {
    til: "uz",
    mavzu: "qora",
};



// --- Function xossali obyekt ---

type Hisoblagich = {
    qiymat: number;
    oshirish: () => void;
};

let counter: Hisoblagich = {
    qiymat: 0,
    oshirish() {
        this.qiymat++;
    },
};