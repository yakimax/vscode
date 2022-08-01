let promise1 = new Promise(function(resolve,reject){
    
    let s1 = 'shivam';
    let s2 = `shivam`;
    if(s1===s2){
        resolve('s1 is equal to s2');
    }
    else{
        reject('NO ,s1 is not equal to s2');
    }
});

promise1.then(function(data){
    console.log(data);
});

promise1.catch(function(data){
    console.log(data);
});