function sum(a, b, c) {
    let d = a + b + c;
    return d;
}
s1=sum(1,2,3)
s2=sum(4,5,6)
console.log(s1, s2)


function greet(name="Sakshi", greetText = "Greetings from JavaScript,") {
    console.log(greetText + " " + name);
    console.log(name + " is a good person");
}
let name1 = "abc";  
let greetText1 = "Good Morning";
greet(name1, greetText1);  
greet()
