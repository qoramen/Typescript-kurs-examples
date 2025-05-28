/* Type Assertion — bu TypeScript’ga "Men bilaman, bu qiymat aynan shu turda" deb aytish. */

// --- Sintaksis ---

let someValue: unknown = "Hello TypeScript";

// 1-usul: `as` operatori bilan
let strLength: number = (someValue as string).length;

// 2-usul: `<Type>` operatori bilan (JSX da ishlatilmaydi)
let strLength2: number = (<string>someValue).length;



// --- Misol: DOM bilan ---

const input2 = document.getElementById("myInput") as HTMLInputElement;
console.log(input2.value);