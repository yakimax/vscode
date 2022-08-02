let fs = require('fs') ;

let f1p = fs.promises.readFile('./f1.txt') ;

f1p.then(cb1).then(cb2).then(cb3).catch(function(err){
    console.log(err) ;
});

function cb1 (data){
    console.log(data + "") ;
    let f2p = fs.promises.readFile('./f2.txt') ;
    return f2p ;
}

function cb2(data){
    console.log(data + "") ;
    let f3p = fs.promises.readFile('./f4.txt') ;
    return f3p ;
}

function cb3(data){
    console.log(data + "") ;
}