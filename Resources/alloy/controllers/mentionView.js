function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mentionView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mentionView = Ti.UI.createView({
        height: "80dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ebebeb",
        top: 1,
        id: "mentionView"
    });
    $.__views.mentionView && $.addTopLevelView($.__views.mentionView);
    $.__views.mRow = Ti.UI.createView({
        id: "mRow",
        left: "0"
    });
    $.__views.mentionView.add($.__views.mRow);
    $.__views.profileImg = Ti.UI.createImageView({
        image: "/images/pro.jpg",
        width: "100%",
        height: "100%",
        id: "profileImg",
        left: "5"
    });
    $.__views.mRow.add($.__views.profileImg);
    $.__views.fname = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "fname",
        top: "0",
        width: "60",
        left: "5"
    });
    $.__views.mRow.add($.__views.fname);
    $.__views.distance = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "distance",
        top: "0",
        right: "0"
    });
    $.__views.mRow.add($.__views.distance);
    $.__views.mentionTxt = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#000000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: 210,
        id: "mentionTxt",
        top: "10"
    });
    $.__views.mRow.add($.__views.mentionTxt);
    $.__views.loc = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "loc",
        bottom: "0",
        right: "0"
    });
    $.__views.mRow.add($.__views.loc);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    require("ti.cloud");
    var ACS = require("acs");
    var plusSignRow = null;
    var privateOrMention = null;
    var plateformwidth = Ti.Platform.displayCaps.platformWidth;
    var plateformheight = Ti.Platform.displayCaps.platformHeight;
    var mRowAnimateLeft = Ti.UI.createAnimation({
        right: plateformwidth,
        left: -plateformwidth,
        duration: 500
    });
    var mRowAnimateRight = Ti.UI.createAnimation({
        right: 0,
        left: 0,
        duration: 500
    });
    var pRowAnimateLeft = Ti.UI.createAnimation({
        left: 0,
        right: 0,
        duration: 500
    });
    var pRowAnimateRight = Ti.UI.createAnimation({
        left: plateformwidth,
        right: -plateformwidth,
        duration: 500
    });
    var args = arguments[0];
    $.mentionTxt.text = args.mentionTxt || " no mention for the time being!";
    $.fname.text = args.firstname || "UnKnown";
    $.distance.text = ACS.prettyDate(args.dist.substr(0, 18) + "Z") || "N/A";
    ACS.getProfilePic(args.id, function(photos) {
        if (photos) {
            $.profileImg.image = photos.urls.square_75;
            if (args.id != APP.user.id) {
                plusSignRow = Alloy.createController("plusSignRow", {
                    id: args.id,
                    name: args.firstname || "UnKnown",
                    duration: args.dist.substr(11, 8),
                    pic: $.profileImg.image
                }).getView();
                plusSignRow.left = plateformwidth;
                plusSignRow.top = -plateformheight / 5;
                $.mentionView.add(plusSignRow);
                privateOrMention = Alloy.createController("privateOrMention", {
                    id: args.id,
                    type: args.type
                }).getView();
                privateOrMention.right = plateformwidth;
                privateOrMention.top = -plateformheight / 5;
                $.mentionView.add(privateOrMention);
            }
        }
    });
    args.id != APP.user.id ? ACS.getCheckin(args.id, {
        location: $.loc
    }) : $.loc.text = APP.user.placeName || "Around";
    $.mentionView.height = plateformheight / 5;
    if (args.id != APP.user.id) {
        var isToggled = false;
        $.mentionView.addEventListener("swipe", function(e) {
            if (isToggled || "left" !== e.direction) if (isToggled && "right" === e.direction) {
                $.mRow.animate(mRowAnimateRight);
                plusSignRow.animate(pRowAnimateRight);
                isToggled = false;
            } else if (isToggled || "right" !== e.direction) {
                if (isToggled && "left" === e.direction) {
                    $.mRow.animate(mRowAnimateRight);
                    privateOrMention.animate({
                        right: plateformwidth,
                        left: -plateformwidth,
                        duration: 500
                    });
                    isToggled = false;
                }
            } else {
                $.mRow.animate(pRowAnimateRight);
                privateOrMention.animate(mRowAnimateRight);
                isToggled = true;
            } else {
                $.mRow.animate(mRowAnimateLeft);
                plusSignRow.animate(pRowAnimateLeft);
                isToggled = true;
            }
        });
        Ti.App.addEventListener("restore", function() {
            if (isToggled) {
                $.mRow.animate(mRowAnimateRight);
                plusSignRow.animate(pRowAnimateRight);
                privateOrMention.animate({
                    right: plateformwidth,
                    left: -plateformwidth,
                    duration: 500
                });
                isToggled = false;
            }
        });
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;