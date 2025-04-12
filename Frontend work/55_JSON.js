// Creating an object
obj = {name: "abc", length: 1, a: {this: 'tha"t'}}
// Converting to JSON string
jso = JSON.stringify(obj)
console.log(jso)
console.log(typeof jso)

// Pass a valid JSON string to JSON.parse(), which converts it back into an object.
// JSON strings must use double quotes (") around property names and string values.
parsed = JSON.parse('{"name": "abc", "length": 1, "a": {"this": "that"}}')
console.log(parsed)
 