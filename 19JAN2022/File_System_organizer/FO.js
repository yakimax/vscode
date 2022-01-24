// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders


const helpmodule = require('./commands/help')

const treemodule = require('./commands/tree')

const organizemodule  = require('./commands/organize')

let input = process.argv.slice(2)

let inputArr = input

let command = inputArr[0]


  

switch(command){
    case 'tree':
        treemodule.key3(inputArr[1])
        break;
    case 'organize':
        organizemodule.key2(inputArr[1])
        break;
    case 'help':
        helpmodule.key1()
        break;
    default :
        console.log('please enter an valid command')
}





 



