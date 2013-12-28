function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "userProfile";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.userProfile = Ti.UI.createView({
        backgroundColor: "#000",
        id: "userProfile"
    });
    $.__views.userProfile && $.addTopLevelView($.__views.userProfile);
    $.__views.heading = Ti.UI.createView({
        id: "heading"
    });
    $.__views.userProfile.add($.__views.heading);
    $.__views.logoImage = Ti.UI.createImageView({
        id: "logoImage",
        image: "/images/logoGray.png"
    });
    $.__views.heading.add($.__views.logoImage);
    $.__views.profileScroll = Ti.UI.createScrollView({
        top: "65dp",
        layout: "vertical",
        contentHeight: "auto",
        scrolshowVerticalScrollIndicator: true,
        scrollsToTop: true,
        id: "profileScroll",
        showVerticalScrollIndicator: "true"
    });
    $.__views.userProfile.add($.__views.profileScroll);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti.cloud");
    require("core");
    require("acs");
    Ti.Platform.displayCaps.platformWidth;
    Ti.Platform.displayCaps.platformHeight;
    var args = arguments[0];
    args.uid;
    var userProfileView = Alloy.createController("userProfileView", args).getView();
    $.profileScroll.add(userProfileView);
    var switchView = Alloy.createController("switchView").getView();
    $.profileScroll.add(switchView);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;