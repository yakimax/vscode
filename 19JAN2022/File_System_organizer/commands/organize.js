

const path = require('path')


const fs = require ('fs')






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

function sendFiles(srcFilePath , dest , FileCategory)
{
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



 module.exports={
     key2 : organizeFn
 }