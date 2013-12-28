function Controller() {
    function submitForm() {
        for (var i = 0; fields.length > i; i++) {
            if (!fields[i].value.length) {
                fields[i].focus();
                return;
            }
            fields[i].blur();
        }
        if ($.registerPwdTxt.value != $.registerConformPwdTxt.value) {
            alert("Passwords do not match!");
            $.registerConformPwdTxt.focus();
            return;
        }
        Cloud.Users.create({
            username: $.registerUnameTxt.value,
            email: $.registerUnameTxt.value,
            password: $.registerPwdTxt.value,
            password_confirmation: $.registerConformPwdTxt.value,
            first_name: $.registerFnameTxt.value,
            last_name: $.registerLnameTxt.value
        }, function(e) {
            if (e.success) {
                var user = e.users[0];
                alert("Created! You are now logged in as " + user.id);
                Alloy.Globals.userid = user.id;
                $.registerUnameTxt.value = $.registerPwdTxt.value = $.registerConformPwdTxt.value = $.registerFnameTxt.value = $.registerLnameTxt.value = "";
                hereWin = Alloy.createController("home", {
                    uid: user.id,
                    uname: user.first_name
                }).getView();
                hereWin.open();
            } else alert("Error:\\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "register";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.registerWin = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK,
        backgroundColor: "#202020",
        layout: "vertical",
        id: "registerWin"
    });
    $.__views.registerWin && $.addTopLevelView($.__views.registerWin);
    $.__views.registerContentView = Ti.UI.createView({
        top: "10dp",
        borderRadius: "8dp",
        height: "270dp",
        contentWidth: Ti.UI.FILL,
        contentHeight: Ti.UI.FILL,
        id: "registerContentView"
    });
    $.__views.registerWin.add($.__views.registerContentView);
    $.__views.registerContainer = Ti.UI.createView({
        backgroundColor: "#c0c0c0",
        width: "280dp",
        height: "200dp",
        top: "10dp",
        bottom: "10dp",
        layout: "vertical",
        borderRadius: "8dp",
        borderColor: "#b4b4b3",
        id: "registerContainer"
    });
    $.__views.registerContentView.add($.__views.registerContainer);
    $.__views.registerUnameTxt = Ti.UI.createTextField({
        hintText: "Email",
        color: "#ebebeb",
        id: "registerUnameTxt"
    });
    $.__views.registerContainer.add($.__views.registerUnameTxt);
    $.__views.__alloyId18 = Ti.UI.createView({
        backgroundColor: "#b4b4b3",
        height: "1dp",
        id: "__alloyId18"
    });
    $.__views.registerContainer.add($.__views.__alloyId18);
    $.__views.registerPwdTxt = Ti.UI.createTextField({
        hintText: "password",
        color: "#ebebeb",
        id: "registerPwdTxt"
    });
    $.__views.registerContainer.add($.__views.registerPwdTxt);
    $.__views.__alloyId19 = Ti.UI.createView({
        backgroundColor: "#b4b4b3",
        height: "1dp",
        id: "__alloyId19"
    });
    $.__views.registerContainer.add($.__views.__alloyId19);
    $.__views.registerConformPwdTxt = Ti.UI.createTextField({
        hintText: "conform_Pass",
        color: "#ebebeb",
        passwordMask: "true",
        id: "registerConformPwdTxt"
    });
    $.__views.registerContainer.add($.__views.registerConformPwdTxt);
    $.__views.__alloyId20 = Ti.UI.createView({
        backgroundColor: "#b4b4b3",
        height: "1dp",
        id: "__alloyId20"
    });
    $.__views.registerContainer.add($.__views.__alloyId20);
    $.__views.registerFnameTxt = Ti.UI.createTextField({
        hintText: "firstName",
        color: "#ebebeb",
        id: "registerFnameTxt"
    });
    $.__views.registerContainer.add($.__views.registerFnameTxt);
    $.__views.__alloyId21 = Ti.UI.createView({
        backgroundColor: "#b4b4b3",
        height: "1dp",
        id: "__alloyId21"
    });
    $.__views.registerContainer.add($.__views.__alloyId21);
    $.__views.registerLnameTxt = Ti.UI.createTextField({
        hintText: "lastName",
        color: "#ebebeb",
        id: "registerLnameTxt"
    });
    $.__views.registerContainer.add($.__views.registerLnameTxt);
    $.__views.__alloyId22 = Ti.UI.createView({
        backgroundColor: "#b4b4b3",
        height: "1dp",
        id: "__alloyId22"
    });
    $.__views.registerContainer.add($.__views.__alloyId22);
    $.__views.registerSubmitBtn = Ti.UI.createButton({
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        title: "Submit",
        width: "75dp",
        top: "0dp",
        id: "registerSubmitBtn"
    });
    $.__views.registerContentView.add($.__views.registerSubmitBtn);
    $.__views.__alloyId23 = Ti.UI.createView({
        top: "80dp",
        backgroundColor: "transparent",
        height: "15%",
        id: "__alloyId23"
    });
    $.__views.registerWin.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        backgroundColor: "transparent",
        width: 200,
        borderRadius: "8dp",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createImageView({
        image: "/images/logoGray.png",
        width: 200,
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var Cloud = require("ti.cloud");
    var hereWin = null;
    var deviceHeightScale = APP.deviceHeightScale;
    APP.deviceWidthScale;
    if ("android" == Ti.Platform.osname) {
        $.registerUnameTxt.height = .5 * 85 * APP.deviceHeightScale;
        $.registerUnameTxt.width = 150 * APP.deviceWidthScale;
        $.registerUnameTxt.top = $.registerUnameTxt.bottom = 0;
        $.registerUnameTxt.font = {
            fontSize: "30dp"
        };
        $.registerPwdTxt.height = .5 * 85 * APP.deviceHeightScale;
        $.registerPwdTxt.top = $.registerPwdTxt.bottom = 0;
        $.registerPwdTxt.width = 150 * APP.deviceWidthScale;
        $.registerPwdTxt.font = {
            fontSize: "30dp"
        };
        $.registerConformPwdTxt.height = .5 * 85 * APP.deviceHeightScale;
        $.registerConformPwdTxt.top = $.registerConformPwdTxt.bottom = 0;
        $.registerConformPwdTxt.width = 150 * APP.deviceWidthScale;
        $.registerConformPwdTxt.font = {
            fontSize: "30dp"
        };
        $.registerFnameTxt.height = .5 * 85 * APP.deviceHeightScale;
        $.registerFnameTxt.top = $.registerFnameTxt.bottom = 0;
        $.registerFnameTxt.width = 150 * APP.deviceWidthScale;
        $.registerFnameTxt.font = {
            fontSize: "30dp"
        };
        $.registerLnameTxt.height = .5 * 85 * APP.deviceHeightScale;
        $.registerLnameTxt.top = $.registerLnameTxt.bottom = 0;
        $.registerLnameTxt.width = 150 * APP.deviceWidthScale;
        $.registerLnameTxt.font = {
            fontSize: "30dp"
        };
        $.registerContainer.height = 212 * APP.deviceHeightScale;
        $.registerContainer.width = 150 * APP.deviceWidthScale;
        $.registerSubmitBtn.width = 75 * APP.deviceWidthScale;
        $.registerSubmitBtn.top = 40 * APP.deviceHeightScale;
        $.registerContentView.height = 340 * deviceHeightScale;
    }
    var fields = [ $.registerUnameTxt, $.registerPwdTxt, $.registerConformPwdTxt, $.registerFnameTxt, $.registerLnameTxt ];
    $.registerSubmitBtn.addEventListener("click", submitForm);
    for (var i = 0; fields.length > i; i++) fields[i].addEventListener("return", submitForm);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;