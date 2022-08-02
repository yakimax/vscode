const puppeteer = require('puppeteer') ;


console.log('before') ;

let browserWillOpen = puppeteer.launch({
    headless : false ,
    args : ['--start-maximized'],
    defaultViewport : null
}) ;


browserWillOpen.then(function(browserInstance){
    return browserInstance
}).then(function(browserInstance){
    let newTabInstance = browserInstance.newPage();
    return newTabInstance
}).then(function(newTabInstance){
    let siteInstance = newTabInstance.goto('https://pepcoding.com/');
    return siteInstance
}).then(function(){
    console.log('site Opened');
})

console.log('after') ;
