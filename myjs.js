
var shows = ["Firefly", "Star Trek", "Stargate SG1", "Battlestar Galactica"];

function displayShowGIF() {

    var gif = $(this).attr("data");
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

        var a = $("<button>");

        a.addclass("btn-btn");

        a.attr("data", shows[i]);

        a.text(shows[i]);

        $("#buttons-view").append(a);

    }

}


  $("#show-input").on("click", function(event) {
    
    event.preventDefault();
    
    var gif = $("#show-input").val().trim();

     shows.push(gif);

    $.unique(shows);
   
    buttonMaker();

  });

  $(document).on("click", ".btn-btn", displayShowGIF);

  buttonMaker();





