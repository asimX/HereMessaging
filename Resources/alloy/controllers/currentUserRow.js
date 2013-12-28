function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "currentUserRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.currentUserRow = Ti.UI.createView({
        height: "80dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ebebeb",
        id: "currentUserRow",
        top: "0dp"
    });
    $.__views.currentUserRow && $.addTopLevelView($.__views.currentUserRow);
    $.__views.__alloyId1 = Ti.UI.createView({
        left: "0",
        width: "90dp",
        id: "__alloyId1"
    });
    $.__views.currentUserRow.add($.__views.__alloyId1);
    $.__views.pic = Ti.UI.createImageView({
        image: "/images/pro.jpg",
        width: "100%",
        height: "100%",
        id: "pic"
    });
    $.__views.__alloyId1.add($.__views.pic);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var ACS = require("acs");
    var AppearBox = null;
    APP.user.uname;
    arguments[0] || {};
    ACS.getProfilePic(APP.user.id, function(photos) {
        if (photos) {
            Ti.API.info("current user = " + JSON.stringify(photos));
            $.pic.image = photos.urls.small_240;
        }
    });
    var totalMentions = null;
    ACS.currentUserMention("mentions", APP.user.id, totalMentions);
    var params = {
        mentions: totalMentions,
        type: "userRow"
    };
    var innerRow = Alloy.createController("rowContent", params).getView();
    $.currentUserRow.add(innerRow);
    var t1 = Titanium.UI.create2DMatrix();
    t1 = t1.scale(1.1);
    var b = Titanium.UI.createAnimation();
    b.transform = t1;
    b.duration = 200;
    b.addEventListener("complete", function() {
        Titanium.API.info("here in complete");
        var t2 = Titanium.UI.create2DMatrix();
        t2 = t2.scale(1);
        AppearBox.animate({
            transform: t2,
            duration: 200
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;