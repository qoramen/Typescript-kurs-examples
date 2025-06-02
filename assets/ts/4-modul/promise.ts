/* Promise<T> — bu kelajakda T turidagi qiymatni qaytaradigan asinxron natija degani. */

// --- Sintaksis: ---

const myPromise: Promise<string> = new Promise((resolve, reject) => {
    resolve("Salom");
});

/* Bu yerda Promise<string> degani: bu va'da (promise) bajarilganda string turidagi qiymatni qaytaradi. */



// --- Misol: Promise qaytaradigan funksiya ---

function getData(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(42);
        }, 1000);
    });
}

getData().then((result) => {
    console.log(result); // 42
});

/* Promise<number> bu yerda then() ichidagi result number bo‘ladi deb aniq ko‘rsatib turadi. */



// --- Generic bilan umumiy Promise funksiyasi ---

function fetchData<T>(data: T, delay: number): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
}

// Misollar
fetchData<string>("Hello", 1000).then((res) => console.log(res)); // string
fetchData<number>(123, 500).then((res) => console.log(res));      // number

/* Bu fetchData<T> funksiyasi har qanday type bilan ishlay oladi, lekin type xavfsizligini yo‘qotmaydi ✅ */



// --- JSON yoki API response bilan ishlash ---

interface User44 {
    id: number;
    name: string;
}

function getUser(): Promise<User44> {
    return Promise.resolve({ id: 1, name: "Ali" });
}

getUser().then((user) => {
    console.log(user.name); // Ali
});

/* Promise<User> deb yozish orqali biz response tarkibini oldindan belgilaymiz — bu debugging, 
   IntelliSense va xatoliklarni oldini oladi. */



// --- Promise<any> ni ehtiyotkorlik bilan ishlating ---

function getData(): Promise<any> {
    return Promise.resolve("Noma’lum tur");
}

/* any typeni ishlatish mumkin, lekin Generic bu holatda xavfsizroq va aniqroq bo‘ladi. */



// --- Xulosa ---
/*
| Qanday?            | Nima beradi?                            |
| -----------------  | --------------------------------------- |
| `Promise<T>`       | Va’da `T` turidagi qiymat qaytaradi     |
| `fetchData<T>()`   | Generic bilan har tur uchun moslashadi  |
| `Promise<any>` ❌  | Xavfsizlik yo‘qoladi, tavsiya etilmaydi |
| `Promise<User>` ✅ | Type xavfsiz, avtomatik yordam beradi   |
*/