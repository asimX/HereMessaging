function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login/loginView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.parentContainer = Ti.UI.createView({
        id: "parentContainer",
        layout: "vertical"
    });
    $.__views.parentContainer && $.addTopLevelView($.__views.parentContainer);
    $.__views.loginHeader = Ti.UI.createImageView({
        image: "/images/loginScreen/Logo_dark_BK.png",
        width: "40%",
        height: "35%",
        top: "10%",
        id: "loginHeader"
    });
    $.__views.parentContainer.add($.__views.loginHeader);
    $.__views.unameTxt = Ti.UI.createTextField({
        height: "30dp",
        font: {
            fontFamily: "GillSans-Light",
            fontSize: "27dp"
        },
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        color: "#535353",
        top: "5dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        hintText: "Email",
        id: "unameTxt"
    });
    $.__views.parentContainer.add($.__views.unameTxt);
    $.__views.tfLine1 = Ti.UI.createView({
        backgroundColor: "#000000",
        height: "1dp",
        top: "5dp",
        id: "tfLine1"
    });
    $.__views.parentContainer.add($.__views.tfLine1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var ACS = require("acs");
    var pwdContainer = null;
    var animation = require("alloy/animation");
    $.loginHeader.height = .25 * APP.deviceHeight;
    $.tfLine1.width = .7 * APP.deviceWidth;
    $.unameTxt.addEventListener("focus", function() {
        pwdContainer && animation.fadeAndRemove(pwdContainer, 800, $.parentContainer, function() {
            pwdContainer = null;
        });
    });
    $.unameTxt.addEventListener("blur", function() {
        ACS.alreadyExit({
            search: $.unameTxt
        }, function(e) {
            pwdContainer = Alloy.createController("login/elements/loginPwdContainer", {
                exists: e.exists,
                uname: $.unameTxt.value
            }).getView();
            $.parentContainer.add(pwdContainer);
            animation.fadeIn(pwdContainer, 800);
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;