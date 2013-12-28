function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeScreen/homeRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.homeRow = Ti.UI.createTableViewRow({
        height: "80dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ebebeb",
        id: "homeRow"
    });
    $.__views.homeRow && $.addTopLevelView($.__views.homeRow);
    $.__views.avatar = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        image: "/images/pro.png",
        id: "avatar"
    });
    $.__views.homeRow.add($.__views.avatar);
    $.__views.rowCenter = Ti.UI.createView({
        height: Ti.UI.FILL,
        backgroundColor: "#ebebeb",
        layout: "vertical",
        id: "rowCenter"
    });
    $.__views.homeRow.add($.__views.rowCenter);
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.rowCenter.add($.__views.title);
    $.__views.ptrText = Ti.UI.createLabel({
        id: "ptrText"
    });
    $.__views.rowCenter.add($.__views.ptrText);
    $.__views.location = Ti.UI.createLabel({
        id: "location",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        right: "5dp"
    });
    $.__views.rowCenter.add($.__views.location);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;