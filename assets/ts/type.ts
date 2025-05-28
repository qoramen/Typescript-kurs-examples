/* type alias bu — murakkab yoki takrorlanuvchi type’ga nom berish. */

type MyType = string | number;

// --- Oddiy type alias ---

type ID1 = string | number;

let userId1: ID1 = "abc123";
userId = 1001; // OK



// --- Object structure uchun alias ---

type User2 = {
    id: number;
    name: string;
    isAdmin: boolean;
};

const user12: User2 = {
    id: 1,
    name: "Ali",
    isAdmin: false
};



// --- Function type alias ---

type Logger = (message: string) => void;

const consoleLogger: Logger = (msg) => {
    console.log("Log:", msg);
};



// --- Array type alias ---

type StringArray = string[];

const fruits: StringArray = ["olma", "banan"];

// Yoki:

type Users = User[]; // agar `User` oldin e’lon qilingan bo‘lsa



// --- Tuple type alias ---

type Coords = [number, number];

const location1: Coords = [41.3, 69.2];



// --- Union type alias ---

type Status = "loading" | "success" | "error";

let state: Status = "loading";
state = "error"; // OK



// --- Intersection type alias ---

type WithTimeStamp = { createdAt: Date; updatedAt: Date };
type Post = { title: string; content: string } & WithTimeStamp;

const myPost: Post = {
    title: "Salom",
    content: "Post matni",
    createdAt: new Date(),
    updatedAt: new Date()
};



// --- Recursive type alias (advanced) ---

type Category = {
    name: string;
    subcategories?: Category[]; // o‘zini o‘zi chaqiradi
};



// --- Literal + alias birga ---

type ButtonType = "submit" | "reset" | "button";

const type1: ButtonType = "submit";



// --- React prop types (praktik misol) ---

type ButtonProps1 = {
    text: string;
    onClick: () => void;
};

function Button({ text, onClick }: ButtonProps1) {
    // return <button onClick={ onClick }> { text } </button>;
}