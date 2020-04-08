
var fs = require('fs'); //accessing teh IO file system

var toWrite = "Why, sometimes I've believed as many as six impossible things before breakfast."; 

fs.writeFile('alicequotes.txt', toWrite, (err) => {
    console.log("File is saved!\n");
});

fs.readFile('alicequotes.txt', 'utf8', (err, theQuote) => {
    console.log(theQuote + "\n");
});



