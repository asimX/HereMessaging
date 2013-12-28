function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "aroundScreen/aroundView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.content = Ti.UI.createView({
        top: "1dp",
        layout: "horizontal",
        height: "80dp",
        width: "100%",
        backgroundColor: "#797979",
        id: "content"
    });
    $.__views.content && $.addTopLevelView($.__views.content);
    $.__views.mRow = Ti.UI.createView({
        top: "1dp",
        layout: "horizontal",
        height: "80dp",
        width: "100%",
        backgroundColor: "#797979",
        id: "mRow"
    });
    $.__views.content.add($.__views.mRow);
    $.__views.__alloyId37 = Ti.UI.createView({
        backgroundColor: "#ebebeb",
        left: "0",
        width: "240dp",
        id: "__alloyId37"
    });
    $.__views.mRow.add($.__views.__alloyId37);
    $.__views.around = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#535353",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "around",
        top: "5"
    });
    $.__views.__alloyId37.add($.__views.around);
    $.__views.cube1 = Ti.UI.createImageView({
        width: 50,
        height: 50,
        borderRadius: 5,
        id: "cube1",
        left: "5"
    });
    $.__views.__alloyId37.add($.__views.cube1);
    $.__views.duration = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "duration",
        bottom: "0",
        left: "80",
        text: "4h"
    });
    $.__views.__alloyId37.add($.__views.duration);
    $.__views.miles = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "miles",
        bottom: "0",
        right: "5"
    });
    $.__views.__alloyId37.add($.__views.miles);
    $.__views.__alloyId38 = Ti.UI.createView({
        backgroundColor: "#ebebeb",
        id: "__alloyId38",
        left: "1",
        width: "78dp"
    });
    $.__views.mRow.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "0",
        text: "Appear",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.appear = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#535353",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "appear",
        bottom: "5"
    });
    $.__views.__alloyId38.add($.__views.appear);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    require("ti.cloud");
    var ACS = require("acs");
    var args = arguments[0] || {};
    $.around.text = args.state || "N/A";
    $.cube1.image = args.image;
    $.appear.text = args.appear;
    $.duration.text = ACS.prettyDate(args.appeared.substr(0, 18) + "Z") || "N/A";
    $.miles.text = ACS.distance(args.lat, args.lng, APP.coordinates.lat, APP.coordinates.lng);
    $.content;
    var plateformwidth = Ti.Platform.displayCaps.platformWidth;
    var plateformheight = Ti.Platform.displayCaps.platformHeight;
    var mRowAnimateLeft = Ti.UI.createAnimation({
        right: plateformwidth,
        left: -plateformwidth,
        duration: 1e3
    });
    var mRowAnimateRight = Ti.UI.createAnimation({
        right: 0,
        left: 0,
        duration: 1e3
    });
    var pRowAnimateLeft = Ti.UI.createAnimation({
        left: 0,
        right: 0,
        duration: 1e3
    });
    var pRowAnimateRight = Ti.UI.createAnimation({
        left: plateformwidth,
        right: -plateformwidth,
        duration: 1e3
    });
    var aroundSwipeRow = Alloy.createController("aroundSwipeRow", {
        appear: args.appear,
        image: args.image,
        state: args.state,
        appeared: args.appeared
    }).getView();
    aroundSwipeRow.left = plateformwidth;
    aroundSwipeRow.top = -plateformheight / 6;
    $.content.add(aroundSwipeRow);
    var isToggled = false;
    $.content.addEventListener("swipe", function(e) {
        if (isToggled || "left" !== e.direction) {
            if (isToggled && "right" === e.direction) {
                $.mRow.animate(mRowAnimateRight);
                aroundSwipeRow.animate(pRowAnimateRight);
                isToggled = false;
            }
        } else {
            $.mRow.animate(mRowAnimateLeft);
            aroundSwipeRow.animate(pRowAnimateLeft);
            isToggled = true;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;