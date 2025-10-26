$(document).ready(function () {
  console.log("jquery is ready");
});
//
$("#message").text("This is a new plain text message.");
//
$(".product-name").text("Updated Product Title");
//
$("div.container").html(
    "<h2>New Heading</h2><p>This paragraph will be rendered.</p>"
);
//
$("#footer-note").html("The content has been <b>dynamically changed</b>.");
//
$("#header").css("background-color", "darkblue");
$("#header").css("color", "white");
//
$(".paragraph").css("text-shadow", "0 0 16px");
//
$(document).ready(function () {
    $("#hide-btn").click(function () {
        $("#visibility-paragraph").hide();
    });

    $("#show-btn").click(function () {
        $("#visibility-paragraph").show();
    });

    $("#toggle-btn").click(function () {
        $("#visibility-paragraph").toggle();
    });
});
//
$(document).ready(function () {
    $("#fade-in-btn").click(function () {
        $("#fading-image").fadeIn(1000);
    });

    $("#fade-out-btn").click(function () {
        $("#fading-image").fadeOut("slow");
    });

    $("#fade-toggle-btn").click(function () {
        $("#fading-image").fadeToggle(800);
    });
});
//
$(document).ready(function () {
    var panel = $("#slide-panel");

    $("#slide-toggle-btn").click(function () {
        panel.slideToggle();

    // if (panel.is(':visible')) {
    //   panel.slideUp();
    // } else {
    //   panel.slideDown();
    // }
    });
});
//
$(document).ready(function () {
    var list = $("#my-list");
    var count = 3;

    $("#add-append-btn").click(function () {
        list.append("<li>New Appended Item " + count++ + "</li>");
    });

    $("#add-prepend-btn").click(function () {
        list.prepend("<li>New Prepended Item " + count++ + "</li>");
    });

    $("#remove-btn").click(function () {
        list.find("li:last").remove();
    });
});
//
$(document).ready(function () {
    $("#change-src-btn").click(function () {
        $("#dynamic-image").attr(
        "src",
        "https://i.pinimg.com/736x/b7/f7/c0/b7f7c0552349afdd53cd3dab7ee5f850.jpg"
        );
        console.log("Image source changed!");
    });

    $("#change-href-btn").click(function () {
        $("#dynamic-link").attr("href", "https://www.youtube.com");
        $("#dynamic-link").text("YouTube Link");
    });
});
//
$(document).ready(function () {
    var nameInput = $("#name-input");
    var emailInput = $("#email-input");

    function updateOutput(inputElement, outputElement) {
        var inputValue = inputElement.val();
        outputElement.text(inputValue);
    }

    nameInput.on("keyup", function () {
        updateOutput(nameInput, $("#live-name-output"));
    });

    emailInput.on("keyup", function () {
        updateOutput(emailInput, $("#live-email-output"));
    });
});
//
$(document).ready(function () {
    $("#basic-animate-btn").click(function () {
        $("#animated-box").animate(
        {
            width: "200px",
            height: "200px",
            left: "150px",
        },
        1000
        );
    });
});
//
$(document).ready(function () {
    $("#sequential-animate-btn").click(function () {
        var box = $("#sequential-box");
        box.css({ left: "0px", top: "0px", width: "50px", height: "50px" });
        box
        .animate({ left: "200px" }, 500)
        .animate({ top: "100px" }, 500)
        .animate({ width: "25px", height: "25px" }, 500)
        .animate({ left: "0px", top: "0px", width: "50px", height: "50px" }, 500);
    });
});
//
$(document).ready(function () {
    $("#combined-animate-btn").click(function () {
        $("#combined-box").animate(
        {
            left: "250px",
            width: "150px",
            height: "150px",
            opacity: 0.3,
            borderRadius: "50px",
        }, 1000,
        function () {
            console.log("Combined animation finished!");
        }
        );
    });
});
