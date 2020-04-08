var fs = require ('fs');

fs.readFile('style.css', 'utf8', (error, contents) => {
    console.log(" \n" + contents);
    //The function returns the splitted string and generates array as result.
    var noOfIDs = contents.split("#"); //will split teh string whereever # comes.
    console.log("\nNumber of IDs in CSS file: ");
    console.log(" " + noOfIDs.length-1); //Length of the array gives num of IDs
});

