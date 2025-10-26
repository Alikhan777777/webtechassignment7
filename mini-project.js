const ball = document.getElementById("ball");
const left = 100;
const jump = 300;

$(document).ready(function() {
    function animateBall() {
        $("#ball").animate({
            left: `+=${left}px`,
            top: `+=${jump}px`
        }, 500, function() {
            $('#ball').animate({
                left: `+=${left}px`,
                top: `-=${jump}px`
            }, 500, function() {
                //animateBall();
            });
        });
    }
    function animateBack() {
        $("#ball").animate({
            left: `-=${left}px`,
            top: `+=${jump}px`
        }, 500, function() {
            $("#ball").animate({
                left: `-=${left}px`,
                top: `-=${jump}px`
            }, 500, function() {
                //animateBack();
            });
        });
    }
    $("#ball").click(function() {
        animateBall();
    });
    $("#return-button").click(function() {
        animateBack();
    })
});
