var srcArray = [
    'https://images.unsplash.com/photo-1517589364675-a7250616e343?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68d0693b6f901e5dabb5ef91d5da6b5c&auto=format&fit=crop&w=1350&q=80', 
    'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b66e9d835de3873a86d1cec996a1af06&auto=format&fit=crop&w=1490&q=80',
    'https://images.unsplash.com/photo-1514637246609-c479ababc188?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63741e5e6adad36d4c2f79fb370d1d06&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1526371962155-8f27ed893ab7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=927ce203843f4cb67f271af50aac6e15&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1525536442945-13bd56f1f3ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98fdff8bd301f22bf90116eea6f89ac4&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1515600467781-911b35a7e539?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=017b5199627fe076e2e1c0ea21e29c19&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1522073693697-19da8fdda682?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91accddaee936c58857a6af5f052f62c&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1520932810558-27fbb7d75269?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3bcc816009660f25a11e04f783af01a0&auto=format&fit=crop&w=1350&q=80'
];

function createGallery () {
    var body = $("body")
    srcArray.forEach(function(src) {
        var img = $("<img>");
        img.attr("src", src);
        body.append(img);
    });
}

function createTitle () {
    var body = $("body");
    var title = $("<h1>Amazing gallery</h1>");
    body.prepend(title);
}

function randomWidth () {
    var allImg = $("img");
    allImg.each(function (node) {
        var randomWidth = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
        $(this).width(randomWidth);
    })
}

function addBorder() {
    var allImg = $("img");
    allImg.each(function (node) {
        if($(this).width() < 200) {
            $(this).addClass("border");
        } else {
            return false;
        }
    })
}