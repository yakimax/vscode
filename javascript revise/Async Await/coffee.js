function coffeeOrder(order){
    return new Promise(function(resolve,reject){
        if(order === 'coffee'){
            resolve('order is beign processed') ;
        }
        else{
            reject('dish not in menu or lack of ingredients') ;
        }
    });
}

function processOrder(instructions){
    return new Promise(function(resolve,reject){
        console.log(instructions) ;
        resolve(`${order}` + processed) ;
    }) ;
}

coffeeOrder('coffee').then(){
    
}