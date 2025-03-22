var arr2=["Fan", "Camera", 34, null, true]
console.log(arr2)
console.log(arr2.length)

// arr2.pop()
// console.log(arr2)

arr2.push("Abc")
console.log(arr2)

// arr2.shift()
// console.log(arr2)

// arr2.unshift("abc")
// console.log(arr2)

const newLen = arr2.unshift("abc")
console.log(newLen)

console.log(arr2.toString())

console.log(arr2.sort())

// Refer more array meethods from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array