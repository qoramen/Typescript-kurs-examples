"use strict";
/* TypeScript’da static – bu classga tegishli bo‘lgan property yoki method.
   Bu obyekt orqali emas, to‘g‘ridan-to‘g‘ri class nomi orqali chaqiriladi. */
// --- TypeScript – static misol ---
class MathUtil {
    static circleArea(radius) {
        return MathUtil.PI * radius * radius;
    }
}
MathUtil.PI = 3.14159;
console.log(MathUtil.PI); // 3.14159
console.log(MathUtil.circleArea(5)); // 78.53975
const m = new MathUtil();
// m.circleArea(5); ❌ Error: obyekt orqali chaqirib bo'lmaydi
/*  C# dagi static nima?
    C# da ham static – bu class darajasidagi method yoki property.
    Ammo C# da yana static class degan narsa bor (TypeScript’da yo‘q). */
// --- C# – static misol ---
/*
public static class MathUtil1 {
    public static double PI = 3.14159;

    public static double CircleArea(double radius) {
        return PI * radius * radius;
    }
}

// Foydalanish:

Console.WriteLine(MathUtil.PI);           // 3.14159
Console.WriteLine(MathUtil.CircleArea(5)); // 78.53975
*/
/* static class degani: faqat static method/propertiyalar bo‘ladi, instance yaratib bo‘lmaydi. */
// --- TypeScript vs C# static farqi ---
/*
| Xususiyat                   | TypeScript               | C#                                   |
| --------------------------- | ------------------------ | ------------------------------------ |
| `static` method/property    | Bor                      | Bor                                  |
| `static class`              | Yo‘q                     | Bor                                  |
| Obyekt orqali chaqirish     | ❌ mumkin emas            | ❌ mumkin emas                        |
| Class nomi orqali chaqirish | ✅ `ClassName.method()`   | ✅ `ClassName.Method()`               |
| Instance yaratilsa          | `new Class()` mumkin     | `static class`da ❌ yaratib bo‘lmaydi |
| Runtime                     | JavaScript (interpreted) | .NET CLR (compiled)                  |
*/
// --- Xulosa --- 
/* TypeScript:
   static faqat property va methodlarga tegishli.

   Static class yo‘q.

   Chaqarish: ClassName.method(). */
/* C#:
   static class va static methodlar mavjud.

   static class – obyekti yaratilmaydi, faqat static a’zolari bo‘ladi.

   Juda kuchli OOP va type checking imkoniyatlari bilan integratsiyalashgan. */ 
