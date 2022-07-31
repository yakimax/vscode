// find returns first number matching the condition


let arr = [1,2,3,4,5,6,7,8,9,0];

let findarr = arr.find(function(n){
    return n < 2 ;
});
console.log(findarr);