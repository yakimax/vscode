const path = require('path')


const fs = require ('fs')





function treeFn(dirPath)
 {
     if(dirPath==undefined)
     {
         console.log("please enter a valid path")
         return;
     }
     else
     {
         let doesExists = fs.existsSync(dirPath)
         if(doesExists==true)
         {
             treeHelper( dirPath , ' ' )
         }
     }
 }


 function treeHelper(targetPath , indent){
     let isFile = fs.lstatSync(targetPath).isFile()
     


     if(isFile==true){
         let fileName = path.basename(targetPath)
         console.log(indent + "├── " + fileName)
     }

     else{
            let dirName = path.basename(targetPath)
            console.log(indent + "└──" + dirName)

            let children = fs.readdirSync(targetPath)

            for(let i=0 ; i<children.length ; i++){
              let childpath = path.join(targetPath , children[i])
              treeHelper(childpath , indent + '\t')
            }


     }
}





module.exports={
    key3 : treeFn
}