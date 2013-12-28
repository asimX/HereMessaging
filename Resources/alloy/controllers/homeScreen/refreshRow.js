function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeScreen/refreshRow";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.ptr = Ti.UI.createView({
        layout: "horizontal",
        height: "80dp",
        backgroundColor: "#ebebeb",
        id: "ptr"
    });
    $.__views.avatar = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        image: "/images/pro.png",
        id: "avatar"
    });
    $.__views.ptr.add($.__views.avatar);
    $.__views.prtCenter = Ti.UI.createView({
        height: Ti.UI.FILL,
        backgroundColor: "#ebebeb",
        layout: "vertical",
        id: "prtCenter"
    });
    $.__views.ptr.add($.__views.prtCenter);
    $.__views.title = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "#535353",
        font: {
            fontSize: "20p",
            fontWeight: "bold",
            fontFamily: "GillSans"
        },
        id: "title"
    });
    $.__views.prtCenter.add($.__views.title);
    $.__views.ptrText = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "#535353",
        font: {
            fontSize: "11dp"
        },
        wordWrap: true,
        id: "ptrText"
    });
    $.__views.prtCenter.add($.__views.ptrText);
    $.__views.location = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        color: "#535353",
        font: {
            fontSize: "11dp"
        },
        wordWrap: true,
        id: "location",
        right: "5dp"
    });
    $.__views.prtCenter.add($.__views.location);
    $.__views.ptrArrow = Ti.UI.createImageView({
        width: "12dp",
        height: "60dp",
        zIndex: 5,
        backgroundColor: "#ebebeb",
        image: "/images/hereScreen/ptrArrow.png",
        id: "ptrArrow"
    });
    $.__views.ptr.add($.__views.ptrArrow);
    __parentSymbol.headerPullView = $.__views.ptr;
    $.__views.refreshRow && $.addTopLevelView($.__views.refreshRow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    arguments[0] || {};
    $.avatar.width = .24 * APP.deviceWidth;
    $.prtCenter.width = .72 * APP.deviceWidth;
    $.ptrText.width = .65 * APP.deviceWidth;
    $.title.text = "Welcome " + APP.user.uname;
    $.ptrText.text = "THIS WILL SHOW A TIP. Remember you can only mention who is 'around' if you're around.'";
    $.location.text = null == APP.user.checkin.placeName ? "Around" : APP.user.placeName;
    Ti.API.info(JSON.stringify(APP.user));
    ({
        msgPull: L("ptrPull", "Pull to refresh..."),
        msgRelease: L("ptrRelease", "Release to refresh..."),
        msgUpdating: L("ptrUpating", "Updating...")
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;