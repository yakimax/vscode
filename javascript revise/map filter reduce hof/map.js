let arr = [1,2,3,4,5,6,7];

let narr = arr.map(function(n){
    return n*n ;
});
console.log(arr);
console.log(narr);

let transactions = [ 1000,1200,1223,-2233,-80333,-5043 ] ;
let dolloarvalue = 74 ;

let transactionsinDollar = transactions.map(function(e){
    return (e/dolloarvalue).toFixed(0) ;
})
console.log(transactionsinDollar) ;