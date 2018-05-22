$(function (){
    console.log("Hello!")

    $("li:first").attr("style", "border-bottom: 1px solid black");
    $("li").addClass("uppercase");
    $("li.active").addClass("active-color");
    
    
    
    var length = $("li").length;
    index = (length-1)/2;
    $('li:eq(' + index +')').attr("style", "background-color: tomato");
});