/*Write a program that reads the user's input and saves it in a text file. 
When the user has written the exit, it is not possible to write to the text
file anymore. Use process.openStdin and createWriteStream. */
var fs = require('fs'); //accessing teh IO file system

//process is used when you wnat to talk to the terminal. 

var question = "What day is it today? ";
process.stdout.write(question);
var toWriteInFile = question;


process.stdin.on('readable', () => {
    var myWriteStream = fs.createWriteStream('userText1.txt');
    //#### for PIPE...can i not write a writestream without readstream
    
    var userInput = process.stdin.read();
    process.stdout.write(`A good day to start programming is ${userInput}`);
    toWriteInFile += userInput;
    /*
        fs.writeFile('userText.txt', toWriteInFile, (err) => {
            console.log("File is saved!\n"); 
        });*/

        myWriteStream.write(toWriteInFile);
}); 
    