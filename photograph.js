/**
 * Created by bankeys-BH on 2015/11/2.
 */

window.onload = function () {
    var photo = document.getElementById("photo"), singNetA = document.getElementById("singNetA"), singNetB = document.getElementById("singNetB"), button = document.getElementById("button");


    function up(event) {
        event.preventDefault();
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            this.style.left = touch.pageX - 50 + 'px';
            this.style.top = touch.pageY - 50 + 'px';
        }
    }

    singNetA.addEventListener("touchmove", up);
    singNetB.addEventListener("touchmove", up);

    function removeHandler() {
        singNetA.removeEventListener("touchmove", up);
        singNetB.removeEventListener("touchmove", up);
    }

    button.onclick = function () {
        removeHandler();
        button.style.display = "none";
    }

    //@VRay : The image rendering the page
    /*
     * photoImg : camera photos
     * singNetAURL : First Seal
     * singNetBURL : Second Seal
     * return : First Seal and Second Seal md5
     */
    function VRay(photoImg, singNetAURL, singNetBURL) {
        photo.style.backgroundImage = ("url(" + photoImg + ")");
        singNetA.style.backgroundImage = ("url(" + singNetAURL + ")");
        singNetB.style.backgroundImage = ("url(" + singNetBURL + ")");
        var singNetFirstCipherText = hex_md5(singNetAURL);
        var singNetSecondCipherText = hex_md5(singNetBURL);
        return singNetFirstCipherText, singNetSecondCipherText;
    }
}
