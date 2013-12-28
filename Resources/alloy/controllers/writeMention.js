function Controller() {
    function submitForm() {
        ACS.saveMention({
            mentionTxt: $.statusMsg.value,
            toUID: toUID,
            fromUID: APP.user.id,
            lng: APP.coordinates.lng,
            lat: APP.coordinates.lat
        }, function() {
            var t3 = Titanium.UI.create2DMatrix();
            t3 = t3.scale(0);
            $.statusUpdate.close({
                transform: t3,
                duration: 300
            });
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "writeMention";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.statusUpdate = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK,
        backgroundColor: "#202020",
        opacity: .95,
        id: "statusUpdate"
    });
    $.__views.statusUpdate && $.addTopLevelView($.__views.statusUpdate);
    $.__views.thisStatusContentView = Ti.UI.createView({
        id: "thisStatusContentView"
    });
    $.__views.statusUpdate.add($.__views.thisStatusContentView);
    $.__views.statusMsg = Ti.UI.createTextArea({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "85dp",
        left: "5dp",
        right: "70dp",
        top: "5dp",
        backgroundColor: "#a9a9a9",
        bottom: "10dp",
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        hintText: "Mention",
        color: "#ebebeb",
        borderRadius: "5dp",
        focusable: true,
        id: "statusMsg"
    });
    $.__views.thisStatusContentView.add($.__views.statusMsg);
    $.__views.chars = Ti.UI.createLabel({
        font: {
            fontFamily: "GillSans-Light",
            fontSize: "40dp"
        },
        top: "3dp",
        right: "5dp",
        color: "#535353",
        text: "160",
        id: "chars"
    });
    $.__views.thisStatusContentView.add($.__views.chars);
    $.__views.StatusUpdateBtn = Ti.UI.createButton({
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontFamily: "GillSans",
            fontWeight: "bold",
            fontSize: "18dp"
        },
        title: "SEND",
        width: "55dp",
        right: "5dp",
        top: "45dp",
        height: "45dp",
        color: "black",
        backgroundImage: "/images/sendBtn2.png",
        id: "StatusUpdateBtn"
    });
    $.__views.thisStatusContentView.add($.__views.StatusUpdateBtn);
    $.__views.closePopUp = Ti.UI.createButton({
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontFamily: "GillSans",
            fontWeight: "bold",
            fontSize: "18dp"
        },
        backgroundImage: "/images/sendBtn.png",
        backgroundLeftCap: "10dp",
        color: "black",
        height: "40dp",
        right: "5dp",
        left: "5dp",
        bottom: "5dp",
        title: "CLOSE",
        id: "closePopUp"
    });
    $.__views.statusUpdate.add($.__views.closePopUp);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    require("ti.cloud");
    var ACS = require("acs");
    var toUID = arguments[0].toUID || "all";
    $.statusUpdate.width = .9 * APP.deviceWidth;
    $.statusUpdate.height = .3 * APP.deviceHeight;
    $.statusUpdate.top = .2 * APP.deviceHeight;
    {
        APP.deviceHeightScale;
    }
    APP.deviceWidthScale;
    var t = Titanium.UI.create2DMatrix();
    t = t.scale(0);
    $.statusUpdate.transform = t;
    $.closePopUp.addEventListener("click", function() {
        var t3 = Titanium.UI.create2DMatrix();
        t3 = t3.scale(0);
        $.statusUpdate.close({
            transform: t3,
            duration: 300
        });
    });
    var fields = [ $.statusMsg ];
    $.StatusUpdateBtn.addEventListener("click", submitForm);
    Ti.API.info("app session id: " + APP.user.sessionID);
    for (var i = 0; fields.length > i; i++) fields[i].addEventListener("return", submitForm);
    $.statusUpdate.addEventListener("open", function() {
        APP.msgWindowOpen = true;
        $.statusMsg.focus();
    });
    $.statusUpdate.addEventListener("close", function() {
        APP.msgWindowOpen = false;
    });
    $.statusMsg.addEventListener("change", function() {
        var numOfCharsLeft = 160 - $.statusMsg.value.length;
        $.chars.text = numOfCharsLeft;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;