// some is a boolean type functions which returns true on fulfilling the condition once or more than once


let arr = [1,2,3,4,5,6,7,8,9,0];

// let somearr = arr.some(function(n){
//     return n<6 ;
// })

let everyarr = arr.every(function(n){
    return n > 0 ;
});


console.log(everyarr);

