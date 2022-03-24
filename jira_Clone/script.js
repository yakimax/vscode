let addBtnClick = document.querySelector('.add-button')
let modalCont = document.querySelector('.modal-cont')
let flag = false
addBtnClick.addEventListener('click',function(e){

    //display box
    flag = !flag;
    if(falg==true){
        modalCont.style.display='flex'

     
    }
    else{
        modalCont.style.display='none'
    }
});

