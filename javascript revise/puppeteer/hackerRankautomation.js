let loginLink = 'https://www.hackerrank.com/auth/login' ;
let email = 'kiwomo2750@logodez.com' ;
let password = 'password@123' ;
let page ;
let codes = require('./codes') ;
const puppeteer = require('puppeteer') ;





console.log('before')



let browseropenInstance = puppeteer.launch({
    headless : false ,
    args:['--start-maximized'] ,
    defaultViewport : null
})

browseropenInstance.then(function(browserOpnend){
    return browserOpnend
}).then(function(browserOpnend){
    let newtab = browserOpnend.newPage() ;
    return newtab
}).then(function(newtab){
    page = newtab ;
    let pageInstance = newtab.goto(loginLink) ;
    return pageInstance
}).then(function(){
    let typeEmailPromise = page.type('input[id =input-1]', email , {delay : 50}) ;
    return typeEmailPromise
}).then(function(){
    let typePassword = page.type('input[id = input-2]',password,{delay : 50}) ;
    return typePassword
}).then(function(){
    let clicklogin = page.click('button[data-analytics = "LoginPassword"]',{delay : 50})
    return clicklogin
}).then(function(){
    let waitandclickalgoritmh = waitAndClick('a[data-attr1 = "algorithms"]',page) ;
    return waitandclickalgoritmh
}).then(function(){
    let waitAndClickProblems = waitAndClick('input[value = "warmup"]',page) ;
    return waitAndClickProblems
}).then(function(){
    let questionselectAllarr = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled') ;
    return questionselectAllarr
}).then(function(array){
    // for( let i = 0 ; i < array.length ; i++ ){ 
        let solvingallproblems = questionSolver(page,codes.answers[0],array[0]) ;
        return solvingallproblems
    // }
})




function questionSolver(thispage,answer,questionSelector){
    return new Promise(function(resolve,reject){
        let gotToselector = questionSelector.click({delay : 50}) ;
        gotToselector.then(function(){
            let monacoeditir = waitAndClick('.lines-content.monaco-editor-background',thispage);
            return monacoeditir
        }).then(function(){
            let waitandselect = waitAndClick('.checkbox-input',thispage) ;
            return waitandselect
        }).then(function(){
            let clickoncheckbox = waitAndClick('.input.text-area.custominput.auto-width',thispage) ;
            return clickoncheckbox
        }).then(function(){
            let pastecode = thispage.type('.input.text-area.custominput.auto-width',answer);
            return pastecode
        }).then(function(){
            let pressdowncontrolbutton = thispage.keyboard.down("Control") ;
            return pressdowncontrolbutton
        }).then(function(){
            let aispressedpromised = thispage.keyboard.press("A") ;
            return aispressedpromised
        }).then(function(){
            let pressxpromise = thispage.keyboard.press("X") ;
            return pressxpromise
        }).then(function(){
            let releasingctrl = thispage.keyboard.up("Control");
            return releasingctrl
        }).then(function(){
            let monacoediter = waitAndClick('.lines-content.monaco-editor-background',thispage);
            return monacoediter
        }).then(function(){
            let presscontrol = thispage.keyboard.down("Control") ;
            return presscontrol
        }).then(function(){
            let pressapromise = thispage.keyboard.press("A");
            return pressapromise
        }).then(function(){
            let pressVpromise = thispage.keyboard.press("V");
            return pressVpromise
        }).then(function(){
            let releasingctr = thispage.keyboard.up("Control");
            return releasingctr
        }).then(function(){
            return thispage.click('.hr-monaco__run-code');
        }).then(function(){resolve()}).catch(function(){reject()})
        // .then(function(){
        //     let submit = thispage.click('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled')
        //     return submit
        // })
    })
}







function waitAndClick(selector,cpage){
    return new Promise(function( resolve , reject ){
        let waitformodal = cpage.waitForSelector(selector) ;
        waitformodal.then(function(){
            let clickmodal = cpage.click(selector,{delay : 100}) ;
            return clickmodal
        }).then(function(){resolve()}).catch(function(){reject()})
    })
}

console.log('after')
