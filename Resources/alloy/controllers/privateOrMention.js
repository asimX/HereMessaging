function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "privateOrMention";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.privateOrMention = Ti.UI.createView({
        height: "100dp",
        width: Ti.UI.FILL,
        backgroundColor: "#797979",
        top: 5,
        title: "HERE",
        id: "privateOrMention"
    });
    $.__views.privateOrMention && $.addTopLevelView($.__views.privateOrMention);
    $.__views.__alloyId17 = Ti.UI.createView({
        top: 0,
        height: "100dp",
        backgroundImage: "/images/btn-settings@2x.png",
        id: "__alloyId17"
    });
    $.__views.privateOrMention.add($.__views.__alloyId17);
    $.__views.mention = Ti.UI.createImageView({
        width: 80,
        height: 70,
        top: 5,
        right: 0,
        image: "/images/mentios2SelectedIcon.png",
        id: "mention"
    });
    $.__views.__alloyId17.add($.__views.mention);
    $.__views.privateIcon = Ti.UI.createImageView({
        top: 0,
        left: 0,
        image: "/images/privatesIcon.png",
        id: "privateIcon"
    });
    $.__views.__alloyId17.add($.__views.privateIcon);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    require("ti.cloud");
    require("acs");
    var privateOrMention = null;
    Ti.Platform.displayCaps.platformWidth;
    Ti.Platform.displayCaps.platformHeight;
    var args = arguments[0];
    var id = args.id;
    if ("private" == args.type) {
        $.privateIcon.image = "/images/privatesSelectedIcon.png";
        $.mention.image = "/images/mentionsIcon.png";
    } else {
        $.privateIcon.image = "/images/privatesIcon.png";
        $.mention.image = "/images/mentios2SelectedIcon.png";
    }
    var t1 = Titanium.UI.create2DMatrix();
    t1 = t1.scale(1.1);
    var a = Titanium.UI.createAnimation();
    a.transform = t1;
    a.duration = 200;
    a.addEventListener("complete", function() {
        Titanium.API.info("here in complete");
        var t2 = Titanium.UI.create2DMatrix();
        t2 = t2.scale(1);
        privateOrMention.animate({
            transform: t2,
            duration: 200
        });
    });
    $.mention.addEventListener("click", function() {
        if (!APP.msgWindowOpen && null != id) {
            privateOrMention = "You" == APP.user.uname ? Alloy.createController("firstName").getView() : Alloy.createController("MsgWindow", {
                toUID: id,
                type: "public"
            }).getView();
            privateOrMention.open(a);
        }
    });
    $.privateIcon.addEventListener("click", function() {
        if (!APP.msgWindowOpen && null != id) {
            privateOrMention = "You" == APP.user.uname ? Alloy.createController("firstName").getView() : Alloy.createController("MsgWindow", {
                toUID: id,
                type: "private"
            }).getView();
            privateOrMention.open(a);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;