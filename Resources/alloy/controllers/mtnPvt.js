function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mtnPvt";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mtnPvt = Ti.UI.createView({
        id: "mtnPvt"
    });
    $.__views.mtnPvt && $.addTopLevelView($.__views.mtnPvt);
    $.__views.__alloyId2 = Ti.UI.createView({
        id: "__alloyId2"
    });
    $.__views.mtnPvt.add($.__views.__alloyId2);
    $.__views.mHeaderNav1 = Ti.UI.createImageView({
        width: 80,
        height: 70,
        top: 0,
        left: 5,
        image: "/images/mentios2SelectedIcon.png",
        id: "mHeaderNav1"
    });
    $.__views.__alloyId2.add($.__views.mHeaderNav1);
    $.__views.mHeaderNav2 = Ti.UI.createImageView({
        top: 5,
        right: 0,
        image: "/images/privatesIcon.png",
        width: 80,
        height: 70,
        id: "mHeaderNav2"
    });
    $.__views.__alloyId2.add($.__views.mHeaderNav2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti.cloud");
    require("core");
    require("acs");
    var mentions = Alloy.createController("mentions").getView();
    var pvt = Alloy.createController("private").getView();
    pvt.visible = false;
    $.mtnPvt.add(mentions);
    $.mtnPvt.add(pvt);
    mentions.visible = true;
    $.mHeaderNav1.addEventListener("click", function() {
        $.mHeaderNav1.image = "/images/mentios2SelectedIcon.png";
        $.mHeaderNav2.image = "/images/privatesIcon.png";
        mentions.visible = true;
        pvt.visible = false;
    });
    $.mHeaderNav2.addEventListener("click", function() {
        $.mHeaderNav1.image = "/images/mentios2Icon.png";
        $.mHeaderNav2.image = "/images/privatesSelectedIcon.png";
        pvt.visible = true;
        mentions.visible = false;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;