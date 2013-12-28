function Controller() {
    function msgWin(mentionReceiverID) {
        if (!APP.msgWindowOpen) {
            writeMention = "You" == APP.user.uname ? Alloy.createController("firstName").getView() : Alloy.createController("MsgWindow", {
                toUID: mentionReceiverID,
                type: "public"
            }).getView();
            "android" == Ti.Platform.osname ? writeMention.open({
                modal: true
            }) : writeMention.open(a);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "otherPeopleRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.currentUserRow = Ti.UI.createView({
        height: "80dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ebebeb",
        id: "currentUserRow",
        top: "1"
    });
    $.__views.currentUserRow && $.addTopLevelView($.__views.currentUserRow);
    $.__views.__alloyId3 = Ti.UI.createView({
        left: "0",
        width: "127",
        id: "__alloyId3"
    });
    $.__views.currentUserRow.add($.__views.__alloyId3);
    $.__views.pic = Ti.UI.createImageView({
        image: "/images/pro.jpg",
        width: "100%",
        height: "100%",
        id: "pic",
        left: "5"
    });
    $.__views.__alloyId3.add($.__views.pic);
    $.__views.userName = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#535353",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "userName",
        top: "5",
        right: "15"
    });
    $.__views.__alloyId3.add($.__views.userName);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Mentions",
        top: "30",
        right: "5",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.totalMention = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#535353",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "totalMention",
        bottom: "5",
        right: "15"
    });
    $.__views.__alloyId3.add($.__views.totalMention);
    $.__views.appearBoxRow = Ti.UI.createView({
        id: "appearBoxRow",
        left: "1",
        width: "65"
    });
    $.__views.currentUserRow.add($.__views.appearBoxRow);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Appears",
        top: "5",
        id: "__alloyId5"
    });
    $.__views.appearBoxRow.add($.__views.__alloyId5);
    $.__views.appears = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#535353",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        bottom: "5",
        id: "appears"
    });
    $.__views.appearBoxRow.add($.__views.appears);
    $.__views.__alloyId6 = Ti.UI.createView({
        left: "1",
        width: "65",
        id: "__alloyId6"
    });
    $.__views.currentUserRow.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Location",
        top: "5",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.location = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#535353",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        bottom: "5",
        id: "location"
    });
    $.__views.__alloyId6.add($.__views.location);
    $.__views.__alloyId8 = Ti.UI.createView({
        id: "__alloyId8",
        left: "1",
        width: "60"
    });
    $.__views.currentUserRow.add($.__views.__alloyId8);
    $.__views.doMention = Ti.UI.createImageView({
        id: "doMention",
        top: "0",
        right: "5",
        image: "/images/mentios2Icon.png",
        width: "40",
        height: "40"
    });
    $.__views.__alloyId8.add($.__views.doMention);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        bottom: "0",
        right: "5",
        text: "6m",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var ACS = require("acs");
    var writeMention = null;
    APP.user.uname;
    var args = arguments[0] || {};
    var mentionReceiverID = args.id;
    ACS.getProfilePic(args.id, function(photos) {
        if (photos) {
            Ti.API.info("other user = " + JSON.stringify(photos));
            $.pic.image = photos.urls.square_75;
        }
    });
    ACS.currentUserMention("mentions", args.id, $.totalMention);
    $.appears.text = args.appears || "11:20 Am";
    $.location.text = args.location || "Around";
    $.userName.text = args.username || "unknown";
    var t1 = Titanium.UI.create2DMatrix();
    t1 = t1.scale(1.1);
    var a = Titanium.UI.createAnimation();
    a.transform = t1;
    a.duration = 200;
    a.addEventListener("complete", function() {
        Titanium.API.info("here in complete");
        var t2 = Titanium.UI.create2DMatrix();
        t2 = t2.scale(1);
        writeMention.animate({
            transform: t2,
            duration: 200
        });
    });
    $.doMention.addEventListener("click", function() {
        ACS.checkIfAlreadyMentioned("mentions", mentionReceiverID, function(status) {
            switch (status) {
              case "Active":
                ACS.isResponded("mentions", mentionReceiverID, APP.user.id, function(rep) {
                    switch (rep) {
                      case "noReply":
                        alert("You cant mention him he did not reply first one");
                        break;

                      case "replied":
                        msgWin(mentionReceiverID);
                    }
                });
                break;

              case "Inactive":
                msgWin(mentionReceiverID);
            }
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;