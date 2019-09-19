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
/* Отмена всплытия */
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
