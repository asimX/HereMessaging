function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeScreen/views/firstPost";
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
        id: "thisWin"
    });
    $.__views.thisWin && $.addTopLevelView($.__views.thisWin);
    $.__views.lblView = Ti.UI.createView({
        backgroundColor: "#EBEBEB",
        top: 0,
        width: Ti.UI.FILL,
        height: "20%",
        id: "lblView"
    });
    $.__views.thisWin.add($.__views.lblView);
    $.__views.infoLbl = Ti.UI.createLabel({
        color: "#1f1f1f",
        tintColor: "#1f1f1f",
        text: "This is your first time!! Create a username for your posts.",
        font: {
            fontSize: "12dp"
        },
        id: "infoLbl"
    });
    $.__views.lblView.add($.__views.infoLbl);
    $.__views.tfNameView = Ti.UI.createView({
        top: "20%",
        height: "40%",
        backgroundColor: "#EBEBEB",
        layout: "vertical",
        id: "tfNameView"
    });
    $.__views.thisWin.add($.__views.tfNameView);
    $.__views.tfName = Ti.UI.createTextField({
        color: "#1f1f1f",
        tintColor: "#1f1f1f",
        top: "30%",
        width: "60%",
        height: "20dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        focusable: true,
        id: "tfName"
    });
    $.__views.tfNameView.add($.__views.tfName);
    $.__views.tfLineView = Ti.UI.createView({
        backgroundColor: "#1f1f1f",
        top: "5dp",
        width: "60%",
        height: "1dp",
        id: "tfLineView"
    });
    $.__views.tfNameView.add($.__views.tfLineView);
    $.__views.postBottomView = Ti.UI.createView({
        backgroundColor: "#EBEBEB",
        layout: "horizontal",
        height: "45%",
        top: "65%",
        id: "postBottomView"
    });
    $.__views.thisWin.add($.__views.postBottomView);
    $.__views.backBtnView = Ti.UI.createView({
        layout: "vertical",
        width: "20%",
        height: Ti.UI.FILL,
        left: 0,
        id: "backBtnView"
    });
    $.__views.postBottomView.add($.__views.backBtnView);
    $.__views.backBtn = Ti.UI.createButton({
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        height: Ti.UI.SIZE,
        title: "Back",
        font: {
            fontFamily: "GilSans-Light",
            fontSize: "22dp"
        },
        color: "#1f1f1f",
        tintColor: "#1f1f1f",
        left: "10dp",
        id: "backBtn"
    });
    $.__views.backBtnView.add($.__views.backBtn);
    $.__views.backBtnLineView = Ti.UI.createView({
        backgroundColor: "#1f1f1f",
        width: Ti.UI.FILL,
        height: "5dp",
        top: 0,
        left: "10dp",
        id: "backBtnLineView"
    });
    $.__views.backBtnView.add($.__views.backBtnLineView);
    $.__views.bottomLbl = Ti.UI.createLabel({
        left: 0,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Posts are your footprints HERE",
        color: "#1f1f1f",
        width: "60%",
        id: "bottomLbl"
    });
    $.__views.postBottomView.add($.__views.bottomLbl);
    $.__views.nextBtnView = Ti.UI.createView({
        layout: "vertical",
        width: "20%",
        height: Ti.UI.FILL,
        left: 0,
        right: 0,
        id: "nextBtnView"
    });
    $.__views.postBottomView.add($.__views.nextBtnView);
    $.__views.nextBtn = Ti.UI.createButton({
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        height: Ti.UI.SIZE,
        title: "Next",
        font: {
            fontFamily: "GilSans-Light",
            fontSize: "22dp"
        },
        color: "#1f1f1f",
        tintColor: "#1f1f1f",
        left: "5dp",
        right: "10dp",
        id: "nextBtn"
    });
    $.__views.nextBtnView.add($.__views.nextBtn);
    $.__views.nextBtnLineView = Ti.UI.createView({
        backgroundColor: "#1f1f1f",
        width: Ti.UI.FILL,
        height: "5dp",
        top: 0,
        left: "5dp",
        right: "10dp",
        id: "nextBtnLineView"
    });
    $.__views.nextBtnView.add($.__views.nextBtnLineView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var ACS = require("acs");
    var args = arguments[0] || {};
    var nextWin = null;
    $.thisWin.height = .3 * APP.deviceHeight;
    Ti.API.info("OS VERSION:  " + Ti.Platform.version);
    $.backBtn.addEventListener("click", function() {
        $.thisWin.fireEvent("cancel");
        $.thisWin.close();
        args.view.animate(APP.animHide, function() {});
    });
    $.nextBtn.addEventListener("click", function() {
        Ti.API.info("tfName.value:  " + $.tfName.value);
        if ($.tfName.value) {
            ACS.updateUser({
                username: $.tfName.value
            }, function(e) {
                if (e.success) {
                    $.thisWin.close();
                    args.view.animate(APP.animHide, function() {});
                } else Ti.API.info(JSON.parse(e));
            });
            $.thisWin.hide();
            nextWin = Alloy.createController("homeScreen/views/postMsg").getView();
            nextWin.addEventListener("close", function() {
                $.thisWin.close();
            });
            nextWin.open();
        } else alert("Please fill in a username");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;