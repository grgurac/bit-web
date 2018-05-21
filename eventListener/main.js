var gallery = document.querySelector(".gallery");


function getBorder (event) {

    if (event.target.tagName === "IMG") {
        event.target.classList.toggle("border")
    }

    if (event.target.clientWidth <= 300) {
        event.stopPropagation();
    }

}

document.addEventListener("click", function(event){
    console.log(event.target);
});

gallery.addEventListener("click", getBorder);