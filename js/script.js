function changeBg(curNumber){
    curNumber++;

    if(curNumber > 3){
        curNumber = 1;
    }
    document.body.setAttribute('class', 'color' + curNumber);
    setTimeout(function(){changeBg(curNumber)}, 10000);  
}

changeBg(0);

