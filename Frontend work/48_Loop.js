let i = 0;
for(i=0; i<3;i++){
    console.log(i);
}

let friends = ["Sakshi", "Anonymous"];
// for (let index = 0; index < friends.length; index++) {
//   console.log("Hello friend, " + friends[index]);
// }

friends.forEach(function f(element){
    console.log("Hello Friend, " + element + " to modern JavaScript");
});

for (element of friends){
    console.log("Hello Friend, " + element + " to modern JavaScript again");
}

let j = 0;
while (j < 4) {
   console.log(j);     
   j++;
}

let k = 34;
do {
    console.log('We are inside do while loop');
    k++;
} while (k < 4);

let employee = {
   Name: "Sakshi",
   Rollno: 32,
   Branch: "Comp"
}

for (key in employee) {
   console.log(`The ${key} of employee is ${employee[key]}`);
}

var arr=[1, 2, 3, 4, 5, 6, 7]
l=0
for(var l=0; l<arr.length; l++){
    if(l==2){
        // break
        continue
    }
    console.log(arr[l])
}
