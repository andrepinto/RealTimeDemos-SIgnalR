/// <reference path="../Scripts/jquery-1.6.4.js" />
/// <reference path="../Scripts/jquery.signalR-0.5.2.js" />
/// <reference path="../Scripts/jquery-ui-1.8.20.js" />

$(function () {


    var hub = $.connection.moveShape,
              $shape = $("#shape");


    $.extend(hub, {
        shapeMoved: function (cid, x, y) {
            console.log("a");
            if ($.connection.hub.id !== cid) {
                $shape.css({ left: x, top: y });
            }
        }
    });


    $.connection.hub.start().done(function () {
        $shape.draggable({
            drag: function () {
                hub.moveShape(this.offsetLeft, this.offsetTop || 0);
            }
        })
    });


});
