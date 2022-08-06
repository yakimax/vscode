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
        console.log('your order is being processed') ;
        resolve( `${instruction}` + ' served') ;
    }) ;
}



// coffeeOrder('coffee').then(function(instructions){
//     console.log(instructions) ;
//     let processing = processOrder(instructions) ;
//     return processing
// }).then(function(cooked){
//     console.log(cooked)
// }).catch(function(err){
//     console.log(err) ;
// }) ;



async function serveOrder(){
    try{
        let placeorder = await coffeeOrder('coffee') ;
        console.log(placeorder) ;
        let processedorder = await processOrder('cofee') ;
        console.log(processedorder) ;
    }
    catch(error){
        console.log(error) ;
    }
}
serveOrder() ;