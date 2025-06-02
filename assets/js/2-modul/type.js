"use strict";
/* type alias bu — murakkab yoki takrorlanuvchi type’ga nom berish. */
let userId1 = "abc123";
userId = 1001; // OK
const user12 = {
    id: 1,
    name: "Ali",
    isAdmin: false
};
const consoleLogger = (msg) => {
    console.log("Log:", msg);
};
const fruits = ["olma", "banan"];
const location1 = [41.3, 69.2];
let state = "loading";
state = "error"; // OK
const myPost = {
    title: "Salom",
    content: "Post matni",
    createdAt: new Date(),
    updatedAt: new Date()
};
const type1 = "submit";
function Button({ text, onClick }) {
    // return <button onClick={ onClick }> { text } </button>;
}
