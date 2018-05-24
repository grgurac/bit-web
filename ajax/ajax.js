"use strict";


(function() {

    var ajax = new XMLHttpRequest();
    ajax.open("GET", "http://thecatapi.com/api/images/get?format=xml");
    
    ajax.onload = function () {
        var obj = ajax.responseXML;
        var cat = obj.querySelector("url").textContent;
        var img = document.createElement("img");
        img.setAttribute("src", cat);

        var div = document.querySelector("div");
        div.appendChild(img);
    }
    ajax.send()

})();


(function() {

    var jSon = new XMLHttpRequest();
    jSon.open("GET", "https://dog.ceo/api/breeds/image/random");
    jSon.onload = function() {
        var obj = JSON.parse(jSon.responseText);
        var dog = obj.message;
        var img = document.createElement("img");
        img.setAttribute("src", dog);
        var body = document.querySelector("body");
        body.appendChild(img);
    }
    jSon.send()
})();