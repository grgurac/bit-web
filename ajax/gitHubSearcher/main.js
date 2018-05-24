$(function () {

    $("#search").on("keypress", function(event){
        var user = $("input").val();
        var url = "https://api.github.com/search/users?q=" + user;
        const keyName = event.key;
        if (keyName === "Enter") {
            var request = $.ajax({
                url: `https://api.github.com/search/users?q=${user}`,
                method: "GET",
            });
            request.done(function(users){
                const userList = users.items;
                userList.forEach(function (user) {
                    var div = $("<div>");
                    var p = $("<p>");
                    p.text(user.login);
                    var image = $("<img>");
                    image.attr("src", user.avatar_url);
                    div.append(p);
                    div.append(image);
                    $("body").append(div);
                });
            })
            request.fail(function(jqXHR, textStatus){
                alert(`request failed ${textStatus}`);
            })
        }
    });
});
