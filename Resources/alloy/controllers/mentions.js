function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mentions";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mentions = Ti.UI.createView({
        top: 70,
        backgroundColor: "#797979",
        id: "mentions"
    });
    $.__views.mentions && $.addTopLevelView($.__views.mentions);
    $.__views.scroller = Ti.UI.createScrollView({
        top: "0",
        layout: "vertical",
        contentHeight: "auto",
        scrolshowVerticalScrollIndicator: true,
        scrollsToTop: true,
        id: "scroller",
        showVerticalScrollIndicator: "true",
        width: "100%"
    });
    $.__views.mentions.add($.__views.scroller);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti.cloud");
    var APP = require("core");
    var ACS = require("acs");
    var addr;
    ACS.getMyMentions(APP.user.id, "mentions", APP.coordinates.lng, APP.coordinates.lat, APP.user.placeID, function(data) {
        for (var i = 0; data.length > i; i++) {
            var params = {
                id: data[i].user.id,
                mentionTxt: data[i].mentionTxt,
                firstname: data[i].user.first_name,
                address: addr,
                dist: data[i].created_at,
                toUID: data[i].toUID,
                fromUID: data[i].fromUID,
                type: "public"
            };
            var mentionView = Alloy.createController("mentionView", params).getView();
            $.scroller.add(mentionView);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;