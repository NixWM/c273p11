$(document).ready(function () {
    var mainReviews = JSON.parse(localStorage.getItem("mainReviews"));
    
    if (mainReviews === null){
        mainReviews = [];
    }
    
    var message = "";
    for(var i = 0; i < mainReviews.length; i++){
        var movie = mainReviews[i];
        message += '<div class="card"><div class="card-header">' + movie.Title + '</div>';
        message += '<div class="card-body">' + movie.Plot + '</div></div><br/>';
    }
    $("#contents").append(message);
});
