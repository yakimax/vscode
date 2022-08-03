//coffee shop promise
function coffeeOrder(order){
    return new Promise(function(resolve,reject){
        if(order === 'coffee'){
            resolve('order is accepted') ;
        }
        else{
            reject('dish not in menu or lack of ingredients') ;
        }
    }) ;
}



function processOrder(instruction){
    return new Promise(function(resolve){
        console.log('order is being processed') ;
        resolve( 'coffee served') ;
    }) ;
}



coffeeOrder('coffee').then(function(instructions){
    console.log(instructions) ;
    let processing = processOrder(instructions) ;
    return processing
}).then(function(cooked){
    console.log(cooked)
}).catch(function(err){
    console.log(err) ;
}) ;