/* TypeScript dasturlash tilida asosiy type lar (ya'ni primitive types) 
   dasturda ma'lumotlarni to'g'ri ifodalash uchun ishlatiladi. */

// --- Srting ---

let ism: string = "Murod";
let salom: string = `Salom, mening ismim ${ism}`;



// --- Number ---

let yosh: number = 25;
let baho: number = 4.5;



// --- Boolean ---

let aktiv: boolean = true;
let tugallangan: boolean = false;



// --- Any ---

/* Har qanday turdagi qiymatga ruxsat beradi (ehtiyotkorlik bilan ishlatish kerak) */

let erkin: any = "text";
erkin = 42;
erkin = true;



// --- Unknown --- 

/* any ga o‘xshaydi, lekin xavfsizroq. Foydalanishdan oldin tekshiruv talab qiladi. */

let nomalum: unknown = "salom";

if (typeof nomalum === "string") {
    console.log(nomalum.toUpperCase());
}



// --- Void ---

/* Hech qanday qiymat qaytarmaydigan funksiyalar uchun ishlatiladi. */

function salomBer(): void {
    console.log("Salom!");
}
