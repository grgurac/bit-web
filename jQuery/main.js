// $(function() {
//     console.log("Hello WOrld!");
// });


$(function() {
$("li:first").addClass("bottomBorder");
$("li").addClass("upperCase");
$("li.active").addClass('active-color');
var middle = $("li").length;
var index = (middle - 1) / 2
$("li:eq(" + index + ")").attr("style", "background-color: pink");
});