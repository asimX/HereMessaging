function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "plusSignRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.plusSignRow = Ti.UI.createView({
        height: "80dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ebebeb",
        id: "plusSignRow"
    });
    $.__views.plusSignRow && $.addTopLevelView($.__views.plusSignRow);
    $.__views.pSignRow = Ti.UI.createView({
        height: "80dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ebebeb",
        id: "pSignRow"
    });
    $.__views.plusSignRow.add($.__views.pSignRow);
    $.__views.__alloyId10 = Ti.UI.createView({
        backgroundImage: "/images/rows/box-post-bg.png",
        left: "0",
        width: "60",
        id: "__alloyId10"
    });
    $.__views.pSignRow.add($.__views.__alloyId10);
    $.__views.spamBlock = Ti.UI.createImageView({
        id: "spamBlock",
        image: "/images/addIcon.png",
        width: "50",
        height: "50"
    });
    $.__views.__alloyId10.add($.__views.spamBlock);
    $.__views.__alloyId11 = Ti.UI.createView({
        backgroundImage: "/images/rows/box-post-bg.png",
        left: "1",
        width: "65",
        id: "__alloyId11"
    });
    $.__views.pSignRow.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Location",
        top: "5",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.loc = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#ebebeb",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Around",
        id: "loc",
        bottom: "5"
    });
    $.__views.__alloyId11.add($.__views.loc);
    $.__views.__alloyId13 = Ti.UI.createView({
        backgroundImage: "/images/rows/box-post-bg.png",
        left: "1",
        width: "65",
        id: "__alloyId13"
    });
    $.__views.pSignRow.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Appears",
        top: "5",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.appears = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#ebebeb",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "11:21",
        id: "appears",
        bottom: "5"
    });
    $.__views.__alloyId13.add($.__views.appears);
    $.__views.__alloyId15 = Ti.UI.createView({
        backgroundImage: "/images/rows/box-post-bg.png",
        left: "1",
        width: "127",
        id: "__alloyId15"
    });
    $.__views.pSignRow.add($.__views.__alloyId15);
    $.__views.pname = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#ebebeb",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "pname",
        top: "5",
        left: "5"
    });
    $.__views.__alloyId15.add($.__views.pname);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Mentions",
        top: "30",
        width: "70",
        left: "5",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.totol = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#ebebeb",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "0",
        id: "totol",
        width: "30",
        bottom: "5",
        left: "5"
    });
    $.__views.__alloyId15.add($.__views.totol);
    $.__views.profileImg = Ti.UI.createImageView({
        image: "/images/pro.jpg",
        width: "100%",
        height: "100%",
        id: "profileImg",
        right: "5"
    });
    $.__views.__alloyId15.add($.__views.profileImg);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti.cloud");
    var APP = require("core");
    var ACS = require("acs");
    Ti.Platform.displayCaps.platformWidth;
    var plateformheight = Ti.Platform.displayCaps.platformHeight;
    $.plusSignRow.height = plateformheight / 5;
    $.pSignRow.height = plateformheight / 5;
    var args = arguments[0];
    var id = args.id;
    var username = args.name;
    $.pname.text = args.name || "You";
    $.appears.text = args.duration || "N/A";
    $.profileImg.image = args.pic;
    ACS.currentUserMention("mentions", args.id, $.totol);
    args.id != APP.user.id ? ACS.getCheckin(args.id, {
        location: $.loc
    }) : $.loc.text = APP.user.location || "Around";
    $.spamBlock.addEventListener("click", function() {
        var spamBlockView = Titanium.UI.createView({
            backgroundImage: "/images/btn-settings@2x.png",
            top: -plateformheight / 5,
            height: plateformheight / 5,
            width: 320,
            zIndex: 100,
            opacity: 0,
            id: id
        });
        var lasttipLabel = Titanium.UI.createLabel({
            text: "You`re about to block/spam " + username,
            color: "#fff",
            width: "auto",
            height: 20,
            top: 2,
            font: {
                fontFamily: "Helvetica Neue",
                fontSize: 13
            },
            textAlign: "center",
            id: id
        });
        spamBlockView.add(lasttipLabel);
        var lasttipLabel2 = Titanium.UI.createLabel({
            text: "You will no longer recieve anything from them.",
            color: "#fff",
            width: "auto",
            height: 20,
            top: 22,
            font: {
                fontFamily: "Helvetica Neue",
                fontSize: 13
            },
            textAlign: "center"
        });
        spamBlockView.add(lasttipLabel2);
        var a = Titanium.UI.createAnimation({
            opacity: .95,
            duration: 1500
        });
        a.addEventListener("complete", function() {
            Titanium.API.info("here in complete");
        });
        var spamBtn = Titanium.UI.createImageView({
            image: "/images/spam.png",
            height: 50,
            width: 50,
            id: id,
            left: 2,
            bottom: 5
        });
        spamBlockView.add(spamBtn);
        var blockBtn = Titanium.UI.createImageView({
            image: "images/block_black.png",
            height: 50,
            width: 50,
            id: id,
            right: 2,
            bottom: 5
        });
        spamBlockView.add(blockBtn);
        spamBtn.addEventListener("click", function() {
            spamBlockView.animate({
                opacity: 0,
                duration: 1500
            });
            $.pSignRow.animate({
                opacity: 1,
                duration: 1500
            });
        });
        $.plusSignRow.add(spamBlockView);
        $.pSignRow.animate({
            opacity: 0,
            duration: 1500
        });
        spamBlockView.animate(a);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;