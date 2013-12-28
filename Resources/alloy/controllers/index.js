function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.MainWindow = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK,
        backgroundColor: "#202020",
        id: "MainWindow"
    });
    $.__views.MainWindow && $.addTopLevelView($.__views.MainWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    APP.init();
    var LBS = require("location");
    LBS.init();
    var ACS = require("acs");
    ACS.init();
    var animation = require("alloy/animation");
    require("de.marcelpociot.sidemenu");
    if (APP.user.sessionID) $.MainWindow = Alloy.createController("homeScreen/views/home").getView(); else {
        APP.LoginWindow = Alloy.createController("login/loginScreen").getView();
        APP.LoginWindow.open();
        animation.fadeIn(APP.LoginWindow, 800);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;