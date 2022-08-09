function outer(){
    let a = 11 ;
    function inner(){
        console.log(a) ;
    }
    return inner();
};
let out = outer() ;