function bind(ele, type, handler) {
    if (ele.addEventListener) {
        ele.addEventListener(type, handler, false);
    } else if (ele.attachEvent) {

        if (!ele["aBind" + type]) {
            ele["aBind" + type] = [];
        }
        var a = ele["aBind" + type];
        for (var i = 0; i < a.length; i++) {
            if (a[i].photo == handler)return;
        }
        var tempFn = function () {
            handler.call(ele)
        };
        tempFn.photo = handler;
        a.push(tempFn);
        ele.attachEvent("on" + type, tempFn);
    }
}

function unbind(ele, type, handler) {
    if (ele.removeEventListener) {
        ele.removeEventListener(type, handler, false);
    } else if (ele.detachEvent) {
        var a = ele["aBind" + type];
        if (a) {
            for (var i = 0; i < a.length; i++) {
                if (a[i].photo == handler) {
                    ele.detachEvent("on" + type, a[i]);
                    a.splice(i, 1);
                }
            }

        }

    }
}


function on(ele, type, fn) {
    if (!ele["aEvent" + type]) {
        ele["aEvent" + type] = [];
    }
    var a = ele["aEvent" + type];
    for (var i = 0; i < a.length; i++) {
        if (a[i] == fn)return;
    }
    a.push(fn);
    bind(ele, type, run);
}

function run(e) {
    e = e || window.event;
    var a = this["aEvent" + e.type];
    if (a) {
        if (!e.target) {
            e.target = e.srcElement;
            e.pageX = (document.documentElement.scrollLeft || document.body.scrollLeft) + e.clientX;
            e.pageY = (document.documentElement.scrollTop || document.body.scrollTop) + e.clientY;
            e.preventDefault = function () {
                e.returnValue = false;
            };
            e.stopPropagation = function () {
                e.cancelBubble = true;
            }
        }
        for (var i = 0; i < a.length; i++) {
            if (typeof a[i] == "function") {
                a[i].call(this, e);
            } else {
                a.splice(i, 1);
                i--;
            }
        }
    }
}

function off(ele, type, fn) {
    var a = ele["aEvent" + type];
    if (a) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] == fn) {

                a[i] = null;
                return;
            }
        }
    }
}

function processThis(obj, fn) {
    return function (e) {
        fn.call(obj, e);
    }
}

