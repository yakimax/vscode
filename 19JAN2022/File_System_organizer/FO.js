// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders
const fs = require('fs')

const path=require('path')

let input = process.argv.slice(2)

let inputArr = input

let command = inputArr[0]

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
  };
  

switch(command){
    case 'tree':
        console.log('tree implemented')
        break;
    case 'organize':
        organizeFn(inputArr[1]);
        break;
    case 'help':
        helpFn();
        break;
    default :
        console.log('please enter an valid command')
}

function helpFn(){
console.log('list of all command    1. tree      2.organize     3.help')
}

function organizeFn(dirpath){
    let destPath
    if(dirpath==undefined){
        console.log('please enter a valid path')
        return;
    }
    let doesExists= fs.existsSync(dirpath)
    if(doesExists==true)
    {
            destPath=path.join(dirpath ,"organized_Files")
    
        if(fs.existsSync(destPath)== false)
        {
            fs.mkdirSync(destPath)
        }
        else{
            console.log("file already exists")
        }
    }
    else{
        console.log('enter a valid path')
    }

organizehelper(dirpath,destPath)
}

function organizehelper(Src,Dest)
{
    let childNames=fs.readdirSync(Src)

    for(let i=0;i<childNames.length;i++)
    {
            let childAddress = path.join(Src,childNames[i])
            let isFiles = fs.lstatSync(childAddress).isFile()

            if(isFiles==true)
            {
                let FileCategory = getCategory(childNames[i])
                console.log(childNames[i] + " belongs to " + FileCategory);

                sendFiles(childAddress , Dest , FileCategory)
            }
    }
}


function getCategory(FileName)
{

        let ext = path.extname(FileName).slice(1)

        for(let key in types)
        {
            let ctypeArr= types[key];

            for(let i=0;i<ctypeArr.length;i++)
            {
                if(ext == ctypeArr[i])
                {
                return key;
                }
            }
        }
        return "others";
}

function sendFiles(srcFilePath , dest , FileCategory){
    // we will create path for each category type encountered to create folders of their names
       let catPath = path.join(dest , FileCategory)
 
        //D:\FJP4\test folder\organized_files\media
        //D:\FJP4 \test folder\organized_files\documents
 
 
       if(fs.existsSync(catPath)==false){
         fs.mkdirSync(catPath)
       }
 
 
       let fileName = path.basename(srcFilePath)
 
       // we took out the basename of all the files
 
       let destFilePath = path.join(catPath , fileName)
 
 
       fs.copyFileSync(srcFilePath , destFilePath)
 
       fs.unlinkSync(srcFilePath)
 
 
       console.log('Files Organized')
 
 
  
   
 }