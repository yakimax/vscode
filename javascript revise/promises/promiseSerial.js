let fs = require('fs') ;



console.log('before') ;


fs.readFile('./f1.txt',cb1) ;
function cb1(err,data){
    if(err){
        console.log(err) ;
    }
    else{
        console.log(data+" ") ;
        fs.readFile('./f2.txt',cb2) ;
    }
}
function cb2(err,data){
    if(err){
        console.log(err) ;
    }
    else{
        console.log(data+" ") ;
        fs.readFile('./f3.txt',cb3) ;
    }
}
function cb3(err,data){
    if(err){
        console.log(err) ;
    }
    else{
        console.log(data+" ") ;
     }
}
console.log("after") ;