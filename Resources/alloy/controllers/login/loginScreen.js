function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login/loginScreen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.LoginWindow = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK,
        backgroundColor: "#ffffff",
        opacity: 0,
        navBarHidden: true,
        id: "LoginWindow"
    });
    $.__views.LoginWindow && $.addTopLevelView($.__views.LoginWindow);
    $.__views.loginView = Alloy.createController("login/loginView", {
        id: "loginView",
        __parentSymbol: $.__views.LoginWindow
    });
    $.__views.loginView.setParent($.__views.LoginWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    require("ti.cloud");
    APP.deviceHeightScale;
    APP.deviceWidthScale;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;