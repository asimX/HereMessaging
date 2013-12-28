function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "specificUsersRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.specificUsersRow = Ti.UI.createView({
        height: "80dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ebebeb",
        id: "specificUsersRow",
        top: "1"
    });
    $.__views.specificUsersRow && $.addTopLevelView($.__views.specificUsersRow);
    $.__views.sUserRow = Ti.UI.createView({
        height: "80dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ebebeb",
        id: "sUserRow"
    });
    $.__views.specificUsersRow.add($.__views.sUserRow);
    $.__views.__alloyId26 = Ti.UI.createView({
        left: "0",
        width: "127",
        id: "__alloyId26"
    });
    $.__views.sUserRow.add($.__views.__alloyId26);
    $.__views.profileImg = Ti.UI.createImageView({
        image: "/images/pro.jpg",
        width: "100%",
        height: "100%",
        id: "profileImg",
        left: "5"
    });
    $.__views.__alloyId26.add($.__views.profileImg);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#535353",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "~",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.toImage = Ti.UI.createImageView({
        image: "/images/pro.jpg",
        width: "100%",
        height: "100%",
        id: "toImage",
        right: "5"
    });
    $.__views.__alloyId26.add($.__views.toImage);
    $.__views.fromUser = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#535353",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "fromUser",
        bottom: "0",
        width: "60",
        left: "0"
    });
    $.__views.__alloyId26.add($.__views.fromUser);
    $.__views.toUser = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#535353",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "toUser",
        bottom: "0",
        right: "5"
    });
    $.__views.__alloyId26.add($.__views.toUser);
    $.__views.__alloyId28 = Ti.UI.createView({
        left: "1",
        id: "__alloyId28"
    });
    $.__views.sUserRow.add($.__views.__alloyId28);
    $.__views.duration = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "duration",
        top: "0",
        right: "0"
    });
    $.__views.__alloyId28.add($.__views.duration);
    $.__views.mention = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#000000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "mention",
        top: "10",
        left: "5"
    });
    $.__views.__alloyId28.add($.__views.mention);
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
    $.__views.__alloyId28.add($.__views.loc);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti.cloud");
    var APP = require("core");
    var ACS = require("acs");
    var plusSignRow = null;
    var plateformwidth = Ti.Platform.displayCaps.platformWidth;
    var plateformheight = Ti.Platform.displayCaps.platformHeight;
    var mRowAnimateLeft = Ti.UI.createAnimation({
        right: plateformwidth,
        left: -plateformwidth,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 500
    });
    var mRowAnimateRight = Ti.UI.createAnimation({
        right: 0,
        left: 0,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 500
    });
    var pRowAnimateLeft = Ti.UI.createAnimation({
        left: 0,
        right: 0,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 500
    });
    var pRowAnimateRight = Ti.UI.createAnimation({
        left: plateformwidth,
        right: -plateformwidth,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 500
    });
    var args = arguments[0];
    ACS.getOtherUser(args.fromUID, $.fromUser);
    ACS.getOtherUser(args.toUID, $.toUser);
    $.duration.text = ACS.prettyDate(args.dist.substr(0, 18) + "Z") || "N/A";
    var pic;
    ACS.getProfilePic(args.id, function(photos) {
        if (photos) {
            $.profileImg.image = photos.urls.square_75;
            pic = photos.urls.square_75;
        }
        plusSignRow = Alloy.createController("plusSignRow", {
            id: args.id,
            name: args.firstname || "UnKnown",
            duration: args.dist.substr(11, 8),
            pic: $.profileImg.image
        }).getView();
        plusSignRow.left = plateformwidth;
        plusSignRow.top = -plateformheight / 5;
        $.specificUsersRow.add(plusSignRow);
    });
    ACS.getProfilePic(args.toUID, function(photos) {
        if (photos) {
            $.toImage.image = photos.urls.square_75;
            pic = photos.urls.square_75;
        }
    });
    args.id != APP.user.id ? ACS.getCheckin(args.id, {
        location: $.loc
    }) : $.loc.text = APP.user.location || "Around";
    $.mention.text = args.mentionTxt;
    var isToggled = false;
    $.specificUsersRow.addEventListener("swipe", function(e) {
        if (isToggled || "left" !== e.direction) {
            if (isToggled && "right" === e.direction) {
                plusSignRow.animate(pRowAnimateRight);
                $.sUserRow.animate(mRowAnimateRight);
                isToggled = false;
            }
        } else {
            $.sUserRow.animate(mRowAnimateLeft);
            plusSignRow.animate(pRowAnimateLeft);
            isToggled = true;
        }
    });
    Ti.App.addEventListener("restore", function() {
        if (isToggled) {
            plusSignRow.animate(pRowAnimateRight);
            $.sUserRow.animate(mRowAnimateRight);
            isToggled = false;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;