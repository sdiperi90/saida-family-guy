document.addEventListener("DOMContentLoaded", function(event) {
    var video;
    console.log("runnin");
    var slideIndex = 1;
    var nextBtn = document.getElementById("next");
    var backBtn = document.getElementById("back");

    function slideVideos(n) {
        showVideos((slideIndex += n));
    }

    function showVideos(n) {
        var i;
        var x = document.getElementsByClassName("myVideos");
        if (n > x.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = x.length;
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            console.log(x[i]);
        }
        x[slideIndex - 1].style.display = "block";
    }
    showVideos(slideIndex);
    nextBtn.addEventListener("click", () => {
        slideVideos(1);
    });

    backBtn.addEventListener("click", () => {
        slideVideos(-1);
    });
});
