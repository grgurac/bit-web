var player = $("#player");
var field = $("#field");
var controlMovingButton = $(".disable");
var isTurnOn = true;


function movePlayer(event) {
    var x = event.offsetX - 100;
    var y = event.offsetY - 100;
    player.css({
        "top": y + "px",
        "left": x + "px"
    });
}

function controlMoving() {
    if (isTurnOn) {
        field.off("click",movePlayer);
        controlMovingButton.text("Start moving");
        isTurnOn = false;
    } else {
        field.on("click", movePlayer);
        controlMovingButton.text("Stop moving");
        isTurnOn = true;
    }
}



field.on("click", movePlayer);

controlMovingButton.on("click", controlMoving);