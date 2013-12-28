function Controller() {
    function submitForm() {
        for (var i = 0; fields.length > i; i++) {
            if (!fields[i].value.length) {
                fields[i].focus();
                return;
            }
            fields[i].blur();
        }
        Cloud.Users.update({
            password: $.upass.value,
            password_confirmation: $.c_pwdTxt.value
        }, function(e) {
            if (e.success) {
                var t3 = Titanium.UI.create2DMatrix();
                t3 = t3.scale(0);
                $.statusUpdate.close({
                    transform: t3,
                    duration: 300
                });
                alert("Update Success");
            } else alert("Error:\\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "update";
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
    $.__views.upass = Ti.UI.createTextField({
        hintText: "password",
        color: "#ebebeb",
        top: "5dp",
        left: "5dp",
        height: "45dp",
        right: "70dp",
        backgroundColor: "#a9a9a9",
        borderRadius: "5dp",
        focusable: true,
        id: "upass",
        passwordMask: "true"
    });
    $.__views.thisStatusContentView.add($.__views.upass);
    $.__views.c_pwdTxt = Ti.UI.createTextField({
        hintText: "c_password",
        color: "#ebebeb",
        top: "51dp",
        left: "5dp",
        height: "45dp",
        right: "70dp",
        backgroundColor: "#a9a9a9",
        borderRadius: "5dp",
        focusable: true,
        id: "c_pwdTxt",
        passwordMask: "true"
    });
    $.__views.thisStatusContentView.add($.__views.c_pwdTxt);
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
        top: "5dp",
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
        backgroundTopCap: "5dp",
        height: "40dp",
        left: "5dp",
        bottom: "5dp",
        id: "closePopUp",
        title: "Close"
    });
    $.__views.statusUpdate.add($.__views.closePopUp);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    var APP = require("core");
    require("acs");
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
    var fields = [ $.upass, $.c_pwdTxt ];
    $.StatusUpdateBtn.addEventListener("click", submitForm);
    for (var i = 0; fields.length > i; i++) fields[i].addEventListener("return", submitForm);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;