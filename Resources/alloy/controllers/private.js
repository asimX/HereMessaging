function Controller() {
    function loadPrivateMentions() {
        for (var i = 0; $.sc.getChildren().length > i; i++) {
            $.sc.remove($.sc.children[i]);
            $.sc.children[i] = null;
        }
        ACS.getMyPrivates(APP.user.id, "mentions", APP.coordinates.lng, APP.coordinates.lat, APP.user.placeID, function(data) {
            for (var i = 0; data.length > i; i++) {
                var params = {
                    id: data[i].user.id,
                    mentionTxt: data[i].mentionTxt,
                    firstname: data[i].user.first_name,
                    address: addr,
                    dist: data[i].created_at,
                    toUID: data[i].toUID,
                    fromUID: data[i].fromUID,
                    type: "private"
                };
                var mentionView = Alloy.createController("mentionView", params).getView();
                $.sc.add(mentionView);
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "private";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.pvt = Ti.UI.createView({
        top: 70,
        backgroundColor: "#797979",
        id: "pvt"
    });
    $.__views.pvt && $.addTopLevelView($.__views.pvt);
    $.__views.sc = Ti.UI.createScrollView({
        top: "0",
        layout: "vertical",
        contentHeight: "auto",
        scrolshowVerticalScrollIndicator: true,
        scrollsToTop: true,
        id: "sc",
        showVerticalScrollIndicator: "true",
        width: "100%"
    });
    $.__views.pvt.add($.__views.sc);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti.cloud");
    var APP = require("core");
    var ACS = require("acs");
    var addr;
    Ti.App.addEventListener("refreshPrivate", function() {
        var indicater = Ti.UI.createView({
            height: 1,
            top: 70,
            backgroundColor: "#fff"
        });
        var load = Ti.UI.createLabel({
            text: "Loading...",
            font: {
                fontWeight: "bold",
                fontSize: 12
            },
            color: "#535353",
            textAlign: "center"
        });
        indicater.add(load);
        $.pvt.add(indicater);
        indicater.animate({
            height: 80,
            duration: 1e3
        });
        $.sc.animate({
            top: 150,
            duration: 1e3
        }, function() {});
        setTimeout(function() {
            indicater.animate({
                height: 1,
                duration: 1e3
            });
            $.sc.animate({
                top: 70,
                duration: 1e3
            }, function() {
                $.pvt.remove(indicater);
            });
            loadPrivateMentions();
        }, 5e3);
    });
    loadPrivateMentions();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;