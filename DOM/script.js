function applyBackground () {
    var scList = document.querySelector("#second")
    scList.className = "bg-color";
}

function selectAllLi () {
    var allLi = document.querySelectorAll("li");
    allLi.forEach(function(li){
        li.className = "bg-color";
    })
}

function addNiceClass () {
    var thirdLi = document.querySelectorAll("#third li");
    thirdLi.forEach(function(li){
        li.className = "nice";
    })
}

function switchClass () {
    var activeLi = document.querySelector(".active");
    activeLi.className = "";
    activeLi.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = "active";
}

var parent = document.querySelector(".dropdown-list");
var list = ["mercedes","audi","yugo","fica"];

function createDropdownList(arr, nodeParent) {
    var selectElementString = "<select>";
    arr.forEach(function(selectText){
        selectElementString += "<option>" + selectText + "</option>";
    });
    selectElementString += "</select>";
    nodeParent.innerHTML = selectElementString;
}