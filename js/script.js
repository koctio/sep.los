/* Добавление обработчика */
function addHandler(el, ev, func) {
    try {
        el.addEventListener(ev, func, false);
    } catch(e) {
        el.attachEvent('on' + ev, func);
    }
}
/* Удаление обработчика */
function removeHandler(el, ev, func) {
    try {
        el.removeEventListener(ev, func, false);
    } catch(e) {
        el.detachEvent('on' + ev, func);
    }
}
/* Отмена действия по умолчанию */
function cancelEvent(e) {
    e = e || window.event;
    try {
        e.preventDefault();
    } catch(x) {
        e.returnValue = false;
    }
}
/* Отмена всплытия NO bubble */
function stopEvent(e) {
    e = e || window.event;
    try {
        e.stopPropagation();
    } catch(x) {
        e.cancelBubble = true;
    }
}
/* Функция возвращат объект XMLHttpRequest */
function getXmlHttpRequest(){
    if (window.XMLHttpRequest) 
    {
        try 
        {
            return new XMLHttpRequest();
        } 
        catch (e){}
    } 
    else if (window.ActiveXObject) 
    {
        try 
        {
            return new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e){}
        try 
        {
            return new ActiveXObject('Microsoft.XMLHTTP');
        } 
        catch (e){}
    }
    return null;
}
/* Расчет */
function raschet(e){
    e = e || event;
    stopEvent();
    cancelEvent();
    
    var f=document.forms[0];
    var cp=1;
    var sum=0;
    
    var els=f.elements;
    for(var i=0; i<els.length; i++){
        if(els[i].type=='text'){
            if(els[i].name=='count-people'){cp=els[i].value;console.log('cp= '+cp);}
            if(cp){
                var curr=(isNaN(parseInt(els[i].value))) ? 0 : parseInt(els[i].value);
                console.log('curr= '+curr);
                sum+= (els[i].parentElement.getAttribute("price") * cp * curr);console.log('sum= '+sum);
            }
        }
    }
    
    var outs=document.getElementById('pay');
    outs.innerHTML="<span>"+ sum +"</span> <span>₽</span>";
    
    
    //var f=document.getElementById("calc-from");
    //var f=document.forms[0];
    //f.length; //(=f.elements.length)
    //f.elements;//Все элементы
    //f.submit();//Отправка формы
    //f.reset();
    //f.defaultValue;
    //f.form;//Parent - form
    //select();/выделяет текст в поле
    //f.elements[x].click();
    //f.elements[x].cols, f.elements[x].rows //textarea
    //var els=f.elements;for(var i=0; i<els.length; i++){if(els[i].type=='text'){}}//Только for
    
    
}

var aa=document.forms[0].elements;
for(var i=0; i<aa.length; i++){
    if(aa[i].type=='text'){
        addHandler(aa[i], 'change', raschet);
    }
}