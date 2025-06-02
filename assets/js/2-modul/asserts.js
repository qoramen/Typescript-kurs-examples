"use strict";
/* Type Assertion — bu TypeScript’ga "Men bilaman, bu qiymat aynan shu turda" deb aytish. */
// --- Sintaksis ---
let someValue = "Hello TypeScript";
// 1-usul: `as` operatori bilan
let strLength = someValue.length;
// 2-usul: `<Type>` operatori bilan (JSX da ishlatilmaydi)
let strLength2 = someValue.length;
// --- Misol: DOM bilan ---
const input2 = document.getElementById("myInput");
console.log(input2.value);
