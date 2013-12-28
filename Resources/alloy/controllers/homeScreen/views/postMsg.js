function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeScreen/views/postMsg";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.thisWin = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK,
        width: "95%",
        backgroundColor: "#EBEBEB",
        top: "20%",
        layout: "vertical",
        id: "thisWin"
    });
    $.__views.thisWin && $.addTopLevelView($.__views.thisWin);
    $.__views.headerView = Ti.UI.createView({
        top: 0,
        width: Ti.UI.FILL,
        backgroundColor: "#EBEBEB",
        height: "20%",
        layout: "horizontal",
        id: "headerView"
    });
    $.__views.thisWin.add($.__views.headerView);
    $.__views.camBtnView = Ti.UI.createView({
        width: "20%",
        height: Ti.UI.FILL,
        id: "camBtnView"
    });
    $.__views.headerView.add($.__views.camBtnView);
    $.__views.camBtn = Ti.UI.createButton({
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        image: "/images/hereScreen/camBtn.png",
        id: "camBtn"
    });
    $.__views.camBtnView.add($.__views.camBtn);
    $.__views.unameLbl = Ti.UI.createLabel({
        width: "60%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "unameLbl"
    });
    $.__views.headerView.add($.__views.unameLbl);
    $.__views.countLblView = Ti.UI.createView({
        width: "20%",
        id: "countLblView"
    });
    $.__views.headerView.add($.__views.countLblView);
    $.__views.countLbl = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "#1f1f1f",
        text: "162",
        id: "countLbl"
    });
    $.__views.countLblView.add($.__views.countLbl);
    $.__views.lineView = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "1dp",
        backgroundColor: "#1f1f1f",
        id: "lineView"
    });
    $.__views.thisWin.add($.__views.lineView);
    $.__views.taPost = Ti.UI.createTextArea({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        height: "79%",
        left: "10dp",
        right: "10dp",
        top: "10dp",
        backgroundColor: "transparent",
        bottom: "5dp",
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: Ti.UI.FILL,
        paddingLeft: "10dp",
        paddingRight: "10dp",
        maxLength: 162,
        id: "taPost"
    });
    $.__views.thisWin.add($.__views.taPost);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    $.thisWin.height = .3 * APP.deviceHeight;
    $.unameLbl.text = APP.user.uname;
    $.taPost.addEventListener("change", function() {
        $.countLbl.text = 162 - $.taPost.value.length;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;