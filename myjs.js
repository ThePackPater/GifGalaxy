
var shows = ["firefly", "Star Trek", "Stargate SG1", "Battlestar Galactica"];

function displayShowGIF() {

    var gif = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        var gifDiv = $("<div class='gifs'>");
        var rated = response.rating;
        var pRate = $("<p>").text("Rating: " + rated);
        var gif = response.fixed_height_still;
        var gifStill = $("<img>").attr("src", gif);

        gifDiv.append(pRate);
        gifDiv.append(gif);
        gifDiv.append(gifStill);
        $("#gifsDiv").prepend(gifDiv);
    });
}

function buttonMaker() {

    $("#buttons-view").empty();

    for (var i = 0; i < gifs.length; i++) {

        var x = $("<button>");

        x.addclass("giphy btn btn-primary");

        x.attr("data-name", gifs[i]);

        x.text(gifs[i]);

        ("#buttons-view").append(x);

    }

}





