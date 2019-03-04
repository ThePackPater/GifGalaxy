
var shows = ["Firefly", "Mork & Mindy", "X-Files", "Lexx", "Star Trek", "Orphan Black", "Stargate SG1", "Twilight Zone", "Battlestar Galactica", "Torchwood", "Land of the Lost", "Black Mirror", "Outer Limits", "Supernatural", "Dr Who"];

function showGIF() {

    var gif = $(this).attr("data-name");

    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=UgvnXDeFmvBkNefMzHfK5ZhsJlT0L0ex&q=" + gif + "&limit=5",
        method: "GET"

    }).then(function (response) {

        var giphy = response.data;

        for (var i = 0; i < giphy.length; i++) {

            var gifDiv = $("<div class='gif'>");

            var rating = giphy[i].rating;

            console.log(rating);

            var ratingP = $("<p>").text(gif + " GIF Rated: " + rating);

            gifDiv.append(ratingP);

            var image = giphy[i].images.fixed_width_still.url;

            var gifImage = $("<img>").attr("src", image);

            gifImage.attr("still", giphy[i].images.fixed_width_still.url);

            gifImage.attr("animated", giphy[i].images.fixed_height.url);

            gifImage.attr("id", "gifImg")

            gifDiv.append(gifImage);

            $("#gifsDiv").prepend(gifDiv);

        }

    });

}

$(document).on("click", "#gifImg", function () {

    if ($(this).attr("src") === $(this).attr("still")) {

        $(this).attr("src", $(this).attr("animated"))

    } else if ($(this).attr("src") === $(this).attr("animated")) {

        $(this).attr("src", $(this).attr("still"))

    }

});


function buttonMaker() {

    $("#show-input").empty();

    $("#buttons-view").empty();

    for (var i = 0; i < shows.length; i++) {

        var a = $("<button>");

        a.addClass("giphy-btn");

        a.attr("data-name", shows[i]);

        a.attr(shows[i]);

        a.text(shows[i]);

        //console.log(shows[i])

        $("#buttons-view").append(a);

    }
}

buttonMaker()

$("#addShow").on("click", function (event) {

    event.preventDefault();

    var show = $("#show-input").val().trim();

    shows.push(show);

    console.log(show);

    $.unique(shows);

    console.log(shows);

    $("#show-input").val("");

    buttonMaker();

});

$(document).on("click", ".giphy-btn", showGIF);

buttonMaker();
