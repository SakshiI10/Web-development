//Blocking and Non-blocking

const fs = require("fs");
text = fs.readFile("dele.txt", "utf-8", (err, data)=>{
    //console.log(err,data);
    console.log(data);
});
console.log("The is a message: ");

//Make a note that message is printing first because of Asynchronus execution of the file.