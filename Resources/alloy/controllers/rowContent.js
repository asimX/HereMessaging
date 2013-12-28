function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowContent";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.parentRow = Ti.UI.createView({
        backgroundImage: "/images/rows/box-post-bg.png",
        left: "0dp",
        layout: "vertical",
        id: "parentRow"
    });
    $.__views.parentRow && $.addTopLevelView($.__views.parentRow);
    $.__views.headerInnerRow = Ti.UI.createView({
        top: "0dp",
        height: "20%",
        backgroundColor: "transparent",
        id: "headerInnerRow"
    });
    $.__views.parentRow.add($.__views.headerInnerRow);
    $.__views.bodyInnerRow = Ti.UI.createView({
        top: "0dp",
        height: "50%",
        backgroundColor: "transparent",
        id: "bodyInnerRow"
    });
    $.__views.parentRow.add($.__views.bodyInnerRow);
    $.__views.footerInnerRow = Ti.UI.createView({
        top: "0dp",
        height: "15%",
        backgroundColor: "red",
        id: "footerInnerRow"
    });
    $.__views.parentRow.add($.__views.footerInnerRow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var ACS = require("acs");
    var args = arguments[0] || {};
    var contentType = args.type;
    if ("userRow" === contentType) {
        var poster = Ti.UI.createLabel({
            font: {
                fontFamily: "GillSans-Light",
                fontWeight: "bold",
                fontSize: "20dp"
            },
            color: "#494949",
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            text: APP.user.uname,
            top: "2dp"
        });
        var tipLabel = Ti.UI.createLabel({
            font: {
                fontSize: "12dp",
                fontWeight: "normal"
            },
            wordWrap: true,
            left: "10dp",
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
        });
        ACS.getTips(function(e) {
            tipLabel.text = e.tipsText;
        });
        $.headerInnerRow.add(poster);
        $.bodyInnerRow.add(tipLabel);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;