/**
 * Created by bankeys-BH on 2015/10/27.
 */

window.onload = function () {
    var div = document.getElementById('div'), button = document.getElementById("button");

    function up(event) {
        event.preventDefault();
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            div.style.left = touch.pageX - 50 + 'px';
            div.style.top = touch.pageY - 50 + 'px';
        }
    }

    div.addEventListener("touchmove", up);

    function removeHandler() {
        div.removeEventListener("touchmove", up);
    }

    button.onclick = function () {
        console.log("ok");
        removeHandler();
        button.style.display = "none";

        var textarea = document.getElementById("textarea").value;
        var inputs = document.getElementsByTagName("input");
        var arr = [], Array = [];
        for (var i = 0; i < inputs.length; i++) {
            var text = inputs[i].value;
            arr.push(text);
        }
        var data = '[{ "fileName":"' + arr[0] + '"},{ "fileNumber":"' + arr[1] + '"},{ "Department":"' + arr[2] + '"},{ "personInCharge":"' + arr[3] + '"},{ "scope":"' + arr[4] + '"},{ "concreteness":"' + textarea + '"}]';

        var left = div.style.left;
        var top = div.style.top;
        return left, top, data;//返回输入框里的内容
    }

    function newImg(i) {
        cipherText = hex_md5(i);
        div.style.backgroundImage = "url(" + i + ")";
        return i, cipherText;
        /*返回base64 和加密后的字符串*/
    }

    function test(i) {
        alert(i);
    }
}



