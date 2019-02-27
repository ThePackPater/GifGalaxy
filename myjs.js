
var shows = ["Firefly", "Star Trek", "Stargate SG1", "Battlestar Galactica"];

function displayShowGIF() {

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/?t=" + shows + "api_key=UgvnXDeFmvBkNefMzHfK5ZhsJlT0L0ex&q=scifi%20shows&limit=10&&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        var gifDiv = $("<div class='gifs'>");
        var rated = response.rating;
        var pRate = $("<p>").text("Rating: " + rated);
        var gifImage = response.fixed_height_still;
        var gifStill = $("<img>").attr("src", gif);

        gifDiv.append(pRate);

        gifDiv.append(gifImage);

        gifDiv.append(gifStill);

        $("#gifsDiv").prepend(gifDiv);

    });
}

function buttonMaker() {

    $("#buttons-view").empty();

    for (var i = 0; i < shows.length; i++) {

        var x = $("<button>");

        x.addclass("giphy btn btn-primary");

        x.attr("data-name", shows[i]);

        x.text(shows[i]);

        $("#buttons-view").append(x);

    }

}


  $("#addShow").on("click", function(event) {
    
    event.preventDefault();
    
    var gif = $("#show-input").val().trim();

     shows.push(gif);

    $.unique(shows);
   
    buttonMaker();

  });

  $(document).on("click", "giphy btn btn-primary", displayShowGIF);

  buttonMaker();





