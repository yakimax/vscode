//Promises  

//promises are of three type

// 1.<pending>******
// 2.<fulfilled>****
// 3.<rejected>*****

// 1.initial stage of a promise is pending 
// 2.now promise must be either fullfilled i.e can be fullfilled or not
// 3.rejected if not available


// promise class
// Promise p1 = new Promise();


// How promise is different than callback ?**********************************************************
// ans. promises are hold in microtask queue whereas callbacks are hold on callback stack or node API
// microtask queue has the highest priority given by event loop second priority is for callback queue




let fs = require('fs');



console.log('before');



let promise = fs.promises.readFile("f1.txt");

promise.then(function(data){
    console.log("f1 file data - >" + data);
});

promise.catch(function(error){
    console.log(error);
});



console.log('after');