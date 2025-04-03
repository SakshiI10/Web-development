// A block {} groups code together.
// let and const follow block scope (only work inside {}).
// var ignores block scope (but follows function scope).

let a = "u";
{
let a = "u6";
console.log(a)
}
console.log(a)

// const a = "This cannot be changed";
// a = "I want to change this. This cannot be changed";     //const can be changed
// console.log(a);