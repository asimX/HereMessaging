function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "statusView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.statusView = Ti.UI.createView({
        top: "1",
        layout: "horizontal",
        backgroundColor: "#797979",
        id: "statusView"
    });
    $.__views.statusView && $.addTopLevelView($.__views.statusView);
    $.__views.coverView = Ti.UI.createView({
        id: "coverView",
        backgroundColor: "#ebebeb",
        left: "0"
    });
    $.__views.statusView.add($.__views.coverView);
    $.__views.dltStatus = Ti.UI.createImageView({
        image: "/images/delete.png",
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        id: "dltStatus",
        left: "2"
    });
    $.__views.coverView.add($.__views.dltStatus);
    $.__views.profileImg = Ti.UI.createImageView({
        image: "/images/pro.jpg",
        width: "100%",
        height: "100%",
        id: "profileImg",
        left: "25"
    });
    $.__views.coverView.add($.__views.profileImg);
    $.__views.nameLbl = Ti.UI.createLabel({
        top: "0",
        height: 20,
        color: "#797979",
        left: "20",
        font: {
            fontWeight: "bold",
            size: 13
        },
        id: "nameLbl"
    });
    $.__views.coverView.add($.__views.nameLbl);
    $.__views.updateTime = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 13
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "updateTime",
        top: "0",
        right: "0"
    });
    $.__views.coverView.add($.__views.updateTime);
    $.__views.statusLbl = Ti.UI.createLabel({
        font: {
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        borderRadius: 5,
        height: 20,
        id: "statusLbl",
        top: "20"
    });
    $.__views.coverView.add($.__views.statusLbl);
    $.__views.tim = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 13
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Time Squire",
        id: "tim",
        bottom: "0",
        right: "0"
    });
    $.__views.coverView.add($.__views.tim);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti.cloud");
    require("core");
    require("acs");
    Alloy.Globals.statusLbl = $.statusLbl;
    Alloy.Globals.updateTime = $.updateTime;
    Ti.Platform.displayCaps.platformWidth;
    var plateformheight = Ti.Platform.displayCaps.platformHeight;
    var args = arguments[0];
    args.uid;
    $.nameLbl.text = args.uname || "unknwn";
    $.statusLbl.text = args.msg || "there is no msg for the time being";
    $.updateTime.text = args.time || "N/A";
    $.statusView.height = "android" == Ti.Platform.osname ? plateformheight / 6 : plateformheight / 6;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;