function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login/elements/loginPwdContainer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.thisView = Ti.UI.createView({
        top: 0,
        bottom: 0,
        id: "thisView"
    });
    $.__views.thisView && $.addTopLevelView($.__views.thisView);
    $.__views.viewContainer = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "#ffffff",
        top: 0,
        layout: "vertical",
        id: "viewContainer"
    });
    $.__views.thisView.add($.__views.viewContainer);
    $.__views.pwdTxt = Ti.UI.createTextField({
        height: "30dp",
        font: {
            fontFamily: "GillSans-Light",
            fontSize: "27dp"
        },
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "#3e3e3e",
        hintText: "Your New Password ?",
        passwordMask: "true",
        top: "10dp",
        id: "pwdTxt"
    });
    $.__views.viewContainer.add($.__views.pwdTxt);
    $.__views.tfLine3 = Ti.UI.createView({
        id: "tfLine3",
        backgroundColor: "#3e3e3e",
        height: "1dp",
        top: "5dp"
    });
    $.__views.viewContainer.add($.__views.tfLine3);
    $.__views.loginFooter = Ti.UI.createView({
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        bottom: 0,
        height: Ti.UI.SIZE,
        id: "loginFooter"
    });
    $.__views.thisView.add($.__views.loginFooter);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var ACS = require("acs");
    var animation = require("alloy/animation");
    var args = arguments[0] || {};
    var loginBtn = null;
    $.tfLine3.width = .7 * APP.deviceWidth;
    if (args.exists) {
        loginBtn = Ti.UI.createButton({
            borderWidth: 0,
            title: "Sign In",
            font: {
                fontSize: "30dp",
                fontFamily: "GillSans-Light"
            },
            color: "#blue",
            height: "40dp",
            width: "120dp",
            style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
            top: "20dp"
        });
        loginBtn.addEventListener("click", function() {
            ACS.login({
                uname: args.uname,
                pwd: $.pwdTxt.value
            }, function() {
                animation.fadeOut(APP.LoginWindow, 800, function() {
                    $.viewContainer = null;
                    APP.LoginWindow.close();
                    APP.LoginWindow = null;
                    Alloy.createController("homeScreen/views/home").getView();
                });
            });
        });
        $.pwdTxt.hintText = "Your Password ?";
        $.viewContainer.add(loginBtn);
    } else {
        var signUpLbl = Ti.UI.createLabel({
            width: .7 * APP.deviceWidth,
            text: "By signing up, you agree to the terms & services of HERE.",
            wordWrap: true,
            font: {
                fontSize: "14dp"
            },
            color: "#535353",
            verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
            height: Ti.UI.SIZE,
            bottom: "20dp"
        });
        registerBtn = Ti.UI.createButton({
            title: "Sign Up",
            font: {
                fontSize: "30dp",
                fontFamily: "GillSans-Light"
            },
            color: "blue",
            height: "40dp",
            width: .3 * APP.deviceWidth,
            style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
            top: "20dp"
        });
        registerBtn.addEventListener("click", function() {
            ACS.registerUser({
                username: args.uname,
                pwd: $.pwdTxt.value
            }, function() {
                animation.fadeOut(APP.LoginWindow, 800);
                $.viewContainer = null;
                APP.LoginWindow.close();
                APP.LoginWindow = null;
                Alloy.createController("homeScreen/views/home").getView();
            });
        });
        $.viewContainer.add(registerBtn);
        $.loginFooter.add(signUpLbl);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;