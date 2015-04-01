/**
 * Created by Ian on 2015/3/31.
 */
// Global
var UniverseWindowWidth = 800;

var SponsorList = [];

SponsorList[0] = "Novel Script";
SponsorList[1] = "这是一个基于javascript的";
SponsorList[2] = "lib/lx1.png";
//SponsorList[3] = "刚刚开始制作";


// Methods
function portrait() {
    return (($(window).width() < UniverseWindowWidth) || ($(window).width < $(window).height()))
}

function middleLine(target) {
    var heightToTop = 0.45;
    var targetWidth = (function () {
        if (target.constructor == String) {
            if (target.slice(-3) == "jpg" || target.slice(-3) == "png") {
                $("#sponsor").html("<img id=sponimg src=" + target + " />");
                heightToTop = 0.5 * (($(window).height() - $("#sponsor").height())/$(window).height());
                return $("#sponsor").width() + "px";
            }
            else {
                $("#sponsor").html(target);
                heightToTop = 0.5 * (($(window).height() - $("#sponsor").height())/$(window).height());
                return target.length + "em";
            }
        }
    })();
    $("#sponsor").css("margin-top", function () {
            return heightToTop * $(window).height() + "px";
        });

}

function windowResize() {
    $("#sponsor").css("margin-top", function () {
        return 0.45 * $(window).height() + "px";
    });
    $("#first").css("margin-top", function () {
        return 0.45 * $(window).height() + "px";
    });
}

function welcome(l) {
    if (l.length == 0) gal();
    else {
        var tmp = l.shift();
        middleLine(tmp);
        $("#sponsor").fadeIn(1500, function () {
            $("#sponsor").fadeOut(1500,function(){
                welcome(l);
            });

        });

    }

}

function firstMenu(){
    $("#first").css("margin-top", function () {
        return 0.45 * $(window).height() + "px";
    }).fadeIn(1000);

}

function gal(){
    firstMenu();
}

$(document).ready(function () {
    $(window).resize(windowResize());

    welcome(SponsorList);

});