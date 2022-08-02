let fs = require('fs') ;



console.log('before') ;


let f1p = fs.promises.readFile('./f1.txt') ;

let f2p = fs.promises.readFile('./f2.txt') ;

let f3p = fs.promises.readFile('./f3.txt') ;



f1p.then(function(data){
    console.log(data + " ") ;
}) ;



f2p.then(function(data){
    console.log(data + " ") ;
}) ;



f3p.then(function(data){
    console.log(data + " ") ;
}) ;



console.log('after') ;