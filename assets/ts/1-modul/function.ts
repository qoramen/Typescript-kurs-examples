/* TypeScript’da function type – ya’ni funksiyalarning turini qanday yozishni misollar bilan ko‘rib chiqamiz.
   Bu TypeScript’ning kuchli tomonlaridan biri, chunki u funksiyalarning kiruvchi (argument) va chiquvchi (return)
   qiymatlarini aniq belgilash imkonini beradi. */

// --- Oddiy funksiyaning type’ini aniqlash ---

function qoshish(a: number, b: number): number {
    return a + b;
}

/* a: number, b: number – bu funksiya ikki number tipidagi parametr qabul qiladi.
   : number – bu funksiya number tipidagi qiymat qaytaradi. */



// --- Arrow function type bilan ---

const kopaytirish = (x: number, y: number): number => {
    return x * y;
};



// --- Function type ni o‘zgaruvchiga berish (type sifatida) ---

let amal: (a: number, b: number) => number;

amal = function (x, y) {
    return x - y;
};

/* Bu yerda amal o‘zgaruvchisi funksiya turi sifatida aniqlangan. U ikkita number qabul qilib, number qaytaradi. */



// --- Optional parametrlar ---

function sayHi(ism: string, yosh?: number): string {
    return yosh
        ? `Salom, ${ism}. Yoshing ${yosh}da.`
        : `Salom, ${ism}.`;
}

/* yosh?: number – bu parametr majburiy emas, ya’ni berilmasligi ham mumkin. */



// --- Default qiymatli parametr ---

function xushKelibsiz(ism: string = "Mehmon"): void {
    console.log(`Xush kelibsiz, ${ism}`);
}



// --- Return tipi void bo‘lsa ---

function log(xabar: string): void {
    console.log(xabar);
}



// --- Function type alias yaratish ---

type AmalFunksiyasi = (a: number, b: number) => number;

const bolish: AmalFunksiyasi = (a, b) => a / b;



// --- Callback funksiyalar type bilan ---

function hisobla1(a: number, b: number, callback: (x: number) => void): void {
    const natija = a + b;
    callback(natija);
}

hisobla1(2, 3, (x) => console.log("Natija:", x));
