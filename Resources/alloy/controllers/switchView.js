function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "switchView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.switchView = Ti.UI.createView({
        height: "80dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ebebeb",
        top: "1",
        id: "switchView"
    });
    $.__views.switchView && $.addTopLevelView($.__views.switchView);
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "vertical",
        left: "0",
        width: "auto",
        id: "__alloyId29"
    });
    $.__views.switchView.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        height: "25",
        top: "2",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Alert to appear when enter new location",
        left: "5",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.alertSwitch = Ti.UI.createSwitch({
        borderRadius: 2,
        id: "alertSwitch",
        value: "true",
        right: "0"
    });
    $.__views.__alloyId30.add($.__views.alertSwitch);
    $.__views.__alloyId32 = Ti.UI.createView({
        height: "25",
        top: "5",
        id: "__alloyId32"
    });
    $.__views.__alloyId29.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Notify when new mention",
        left: "5",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.mentionSwitch = Ti.UI.createSwitch({
        borderRadius: 2,
        id: "mentionSwitch",
        value: "true",
        right: "0"
    });
    $.__views.__alloyId32.add($.__views.mentionSwitch);
    $.__views.__alloyId34 = Ti.UI.createView({
        height: "25",
        top: "5",
        id: "__alloyId34"
    });
    $.__views.__alloyId29.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Notify when new private",
        left: "5",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.privateSwitch = Ti.UI.createSwitch({
        borderRadius: 2,
        id: "privateSwitch",
        value: "true",
        right: "0"
    });
    $.__views.__alloyId34.add($.__views.privateSwitch);
    $.__views.__alloyId36 = Ti.UI.createView({
        height: "50",
        top: "5",
        id: "__alloyId36"
    });
    $.__views.__alloyId29.add($.__views.__alloyId36);
    $.__views.logout = Ti.UI.createButton({
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        title: "Logout",
        width: "100dp",
        height: "50dp",
        id: "logout",
        backgroundImage: "/images/orangeBtnBG.png"
    });
    $.__views.__alloyId36.add($.__views.logout);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti.cloud");
    var APP = require("core");
    var ACS = require("acs");
    Ti.Platform.displayCaps.platformWidth;
    var plateformheight = Ti.Platform.displayCaps.platformHeight;
    $.switchView.height = "android" == Ti.Platform.osname ? plateformheight / 6 : plateformheight / 3;
    $.alertSwitch.addEventListener("change", function() {
        if (false == $.alertSwitch.value) {
            APP.alerts.lacationAlert = false;
            Ti.API.info("location Alert:" + APP.alerts.lacationAlert);
        } else if (true == $.alertSwitch.value) {
            APP.alerts.lacationAlert = true;
            Ti.API.info("location Alert:" + APP.alerts.lacationAlert);
        }
    });
    $.mentionSwitch.addEventListener("change", function() {
        if (false == $.mentionSwitch.value) {
            APP.alerts.mentionAlert = false;
            Ti.API.info("mention Alert:" + APP.alerts.mentionAlert);
        } else if (true == $.mentionSwitch.value) {
            APP.alerts.mentionAlert = true;
            Ti.API.info("mention Alert:" + APP.alerts.mentionAlert);
        }
    });
    $.privateSwitch.addEventListener("change", function() {
        if (false == $.privateSwitch.value) {
            APP.alerts.privateAlert = false;
            Ti.API.info("private Alert:" + APP.alerts.privateAlert);
        } else if (true == $.privateSwitch.value) {
            APP.alerts.privateAlert = true;
            Ti.API.info("private Alert:" + APP.alerts.privateAlert);
        }
    });
    $.logout.addEventListener("click", function() {
        ACS.logout();
        Ti.App.Properties.setString("sessionID", null);
        APP.user.sessionID = null;
        APP.MainWindow.open();
        APP.LoginWindow || (APP.LoginWindow = Alloy.createController("loginScreen").getView());
        APP.LoginWindow.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;