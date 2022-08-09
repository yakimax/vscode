const fs = require('fs');

const XLSX = require('XLSX');

const jsonFileData = require('./jsonData.json');

jsonFileData.push(
    {
        "name" : "adarsh",
        "last name" : "pandey",
        "city" : "jabalpur",
        "state" : "madhyapradesh",
        "profession" : "developer",
        "age" : "23",
        "gender" : "male"
    }
)



fs.writeFileSync('./jsonData.json',JSON.stringify(jsonFileData));
console.log(JSON.parse(fs.readFileSync('./jsonData.json')));

// Q. what i learnt ?

//  --fs.readFileSync()--------brings the data of a file into a variable
//  --fs.writeFileSync()-------write on the file
//  --JSON.stringify()-------converts the file data into a string
//  --JSON.parse()-------stores file into a variable
//  --require()-------brings the functionalities of a library into a variable






var workbook = XLSX.utils.book_new() ;
var worksheet = XLSX.utils.json_to_sheet(jsonFileData) ;
XLSX.utils.book_append_sheet(workbook, worksheet, 'friends', true) ;
XLSX.writeFile(workbook, 'friends') ;