// let arr = [1,2,3,4,5,6,7,8,9,10] ;
// console.log(arr) ;

// let evenFilter = arr.filter(function(n){
//     return n%2 != 0 ;
// }) ;
// console.log(evenFilter) ;



// *********************************************************************************************
// filter and map chaining in javascript


let arr =  [{name: "A", age: 14, gender: "M"},
            {name: "B", age: 34, gender: "M"},
            {name: "C", age: 24, gender: "F"},
            {name: "D", age: 44, gender: "F"},
            {name: "E", age: 44, gender: "M"},
            {name: "I", age: 28, gender: "F"},
            {name: "G", age: 36, gender: "M"},
            {name: "H", age: 47, gender: "F"}]

let ladiesarr = arr.filter(function(n){
    return n.gender == 'F';
}).map(function(n){
    return n.age ;
})


console.log(ladiesarr) ;
