/* Union — bu bir nechta turdagi qiymatlarni qabul qilishga ruxsat beruvchi type.
   Masalan, o‘zgaruvchi string yoki number bo‘lishi mumkin. */

// --- Oddiy union type ---

let id: string | number;

id = 101;       // ✅ OK
id = "abc123";  // ✅ OK
// id = true;   ❌ Xato



// --- Function parametri uchun union ---

function yoz(xabar: string | number) {
    console.log("Xabar:", xabar);
}

yoz("Salom"); // OK
yoz(12345);   // OK



// --- Type alias bilan union ---

type ID = string | number;

let userId: ID = "user_001";
userId = 456; // OK



// --- Literal union types ---

type Ruxsat = "oqish" | "yozish" | "ochirish";

function tekshir1(action: Ruxsat) {
    console.log(`Sizga ${action} ruxsati bor`);
}

tekshir1("oqish");    // ✅ OK
tekshir1("ochirish"); // ✅ OK
// tekshir("kiritish"); ❌ Xato



// --- Union bilan array ---

let qiymatlar: (string | number)[] = ["Salom", 123, "Dunyo", 456];

/* Bu yerda har bir element string yoki number bo‘lishi mumkin. */



// --- Union bilan function return type ---

function natija(ballar: number): string | number {
    if (ballar >= 60) return "O'tdi";
    else return ballar; // noto‘g‘ri ball qaytariladi
}



// --- typeof bilan tekshiruv (type narrowing) ---

function kvadrat(x: number | string): number {
    if (typeof x === "number") {
        return x * x;
    } else {
        return parseInt(x) ** 2;
    }
}



// --- Union type bilan interface ---

interface PDF {
    turi: "pdf";
    hajm: number;
}

interface Image {
    turi: "image";
    kenglik: number;
    balandlik: number;
}

type Fayl = PDF | Image;

function korsat(f: Fayl) {
    if (f.turi === "pdf") {
        console.log("PDF hajmi:", f.hajm);
    } else {
        console.log("Rasm o'lchami:", f.kenglik, "x", f.balandlik);
    }
}



// --- Optional field o‘rniga union ---

type Foydalanuvchi1 =
    | { ism: string; parol: string }
    | { ism: string; token: string };

let user11: Foydalanuvchi1 = { ism: "Ali", parol: "12345" };
let user22: Foydalanuvchi1 = { ism: "Vali", token: "abc123" };



// --- React props bilan union type (bonus misol) ---

type ButtonProps =
    | { variant: "link"; href: string }
    | { variant: "submit"; onClick: () => void };

function Button1(props: ButtonProps) {
    if (props.variant === "link") {
        // return <a href={ props.href }> Havola </a>;
    }
    // return <button onClick={ props.onClick }> Jo‘natish </button>;
}

/*  Qo‘shimcha: union vs intersection (&) */

/* Union (|): yoki bu yoki u

   Intersection (&): ikkalasining birlashmasi */