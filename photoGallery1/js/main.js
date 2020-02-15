$.sliders = $(function() {
    $(".res").click(function() {
        $("#small").find(".smallaktiv").removeClass("smallaktiv");
        $("#sildercontent").html("");
        $(this).clone().appendTo("#sildercontent");
        $(this).parent("li").addClass("smallaktiv");
    });
})
$(document).ready(function() {
    $("ul li:first img").clone().appendTo("#sildercontent")
})

function silderss() {
    if ($("li:last").hasClass("smallaktiv")) {
        $("li:last").removeClass("smallaktiv");
        $("li:first").addClass("smallaktiv").children("img").clone().appendTo("#sildercontent")

    } else
        $("ul").find(".smallaktiv").removeClass("smallaktiv").next().addClass("smallaktiv").children("img").clone().appendTo("#sildercontent")

}

var turn = setInterval("silderss();", 2000);
$(function() {
    $("#slidertotal").hover(function() {
        clearInterval(turn)
    }, function() {
        turn = setInterval("silderss();", 2000);
    })
})