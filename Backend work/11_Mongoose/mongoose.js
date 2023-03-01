var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/smi', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
//db.on('error', console.error.bind(console, //'connection error:'));
//db.once('open', function(){
//    console.log("Connected, this has been run //after connection establishment.");
//});

var kittySchema = new mongoose.Schema({
    name: String
});

//kittySchema.methods.speak = function speak() {
//    var greeting = "My name is " + this.name
//    console.log(greeting);
//};

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'silence' });
console.log(silence.name); // 'Silence'
//var silence2 = new Kitten({ name: 'Silence2' });
//console.log(silence2.name); // 'Silence2'

silence.save(function (err, silence) {
    if (err) return console.error(err);
    silence.speak();
  });

