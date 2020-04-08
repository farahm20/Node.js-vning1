/*Write a program that reads the user's input and saves it in a text file. 
When the user has written the exit, it is not possible to write to the text
file anymore. Use process.openStdin and createWriteStream. */
var fs = require('fs'); //accessing teh IO file system
const stdin = process.openStdin();
var myWriteStream = fs.createWriteStream('userText2.txt');

var instructions = "Write all you want. Once done writing type in 'end':\n ";

process.stdout.write(instructions);

stdin.on('data', function(data) {
//    console.log(data);
//    console.log("What is this: " + data);
    const text = data.toString().trim();
//    console.log("After to string: " + text);
    if (text == 'end') {
        myWriteStream.end();
        process.exit();
    } else {
        myWriteStream.write(text);
    }
});

/*
const stdinCallBack = input => {
    let text = input.toString().trim();
    if (text == 'end') {
        myWriteStream.end();
        process.exit();
    } else {
        myWriteStream.write(text);
    }
}

stdin.addListener('data', stdinCallBack);*/