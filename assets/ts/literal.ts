/* Literal types — bu aniq qiymatni type sifatida belgilash.
   Ya'ni: "start", true, 42 — bularning o‘zlari type bo‘lib xizmat qiladi. */

// --- String literal type ---

let holat: "boshlash" | "toxtatish";

holat = "boshlash";     // ✅ OK
holat = "toxtatish";   // ✅ OK
// holat = "pauza";     ❌ Xatolik



// --- Number literal type ---

let baho2: 1 | 2 | 3 | 4 | 5;

baho2 = 5; // ✅ OK
// baho = 6; // ❌ Xato: 6 ruxsat etilmagan



// --- Boolean literal type ---

let tugmaHolati: true;

tugmaHolati = true;  // ✅ OK
// tugmaHolati = false; // ❌ Xato



// --- Literal type bilan type alias ---

type RuxsatTuri1 = "oqish" | "yozish" | "ochirish";

function tekshir(ruxsat: RuxsatTuri1) {
    console.log("Sizda ruxsat:", ruxsat);
}

tekshir("yozish"); // OK
// tekshir("ko‘rish"); // ❌ Xato



// --- Literal type asosan enum o‘rnida ishlatiladi ---

type Rang1 = "qizil" | "yashil" | "kok";

let tanlangan: Rang1 = "qizil";



/* Bu enumga o‘xshaydi, lekin kengroq foydalaniladi, ayniqsa: */

/* Props

   Validatsiya

   API javoblari

   React/NestJS loyihalarda */



// --- Function parametrlari bilan ---

function ishlovBerish(turi: "json" | "xml") {
    console.log("Tanlangan tur:", turi);
}

ishlovBerish("json"); // OK
// ishlovBerish("html"); // ❌ Xato



// --- Literal + Union + Narrowing bilan ishlash ---

type Amal = "qoshish" | "ayirish";

function hisobla(a: number, b: number, amal: Amal) {
    if (amal === "qoshish") return a + b;
    else return a - b;
}

hisobla(5, 3, "ayirish"); // 2



// --- Readonly object literal (const assertion) ---

const sozlamalar1 = {
    til: "uzbek",
    mavzu: "dark",
} as const; // typeof sozlamalar.til => "uzbek" (literal type)



// --- React misoli: Button variantlari ---

type ButtonVariant = "primary" | "secondary" | "danger";

function Button({ variant }: { variant: ButtonVariant }) {
    //   return <button className={variant}>Tugma</button>;
}



// --- Literal types + keyof typeof ---

const Holatlar = {
    Yangi: "new",
    Eski: "old",
    Qayta: "renewed",
} as const;

type HolatTuri = keyof typeof Holatlar; // "Yangi" | "Eski" | "Qayta"