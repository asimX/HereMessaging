function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.loading/" + s : s.substring(0, index) + "/nl.fokkezb.loading/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function show(_message, _blocking) {
        "undefined" != typeof _message && setMessage(_message);
        "undefined" != typeof _blocking && setBlocking(_blocking);
        $.loadingMask.open();
        $.loadingSpinner.show();
        return;
    }
    function hide() {
        $.loadingSpinner.hide();
        $.loadingMask.close();
        return;
    }
    function cancel() {
        if (false === args.blocking) {
            hide();
            $.trigger("cancel");
        }
        return;
    }
    function setMessage(_message) {
        if (false === _message) {
            if (hasMessage) {
                $.loadingInner.remove($.loadingMessage);
                hasMessage = false;
            }
        } else {
            true !== _message && ($.loadingMessage.text = _message);
            if (!hasMessage) {
                $.loadingInner.add($.loadingMessage);
                hasMessage = true;
            }
        }
        return;
    }
    function setBlocking(_blocking) {
        args.blocking = false !== _blocking;
    }
    new (require("alloy/widget"))("nl.fokkezb.loading");
    this.__widgetId = "nl.fokkezb.loading";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "loading";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loadingMask = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK,
        backgroundColor: "#5000",
        id: "loadingMask"
    });
    $.__views.loadingMask && $.addTopLevelView($.__views.loadingMask);
    cancel ? $.__views.loadingMask.addEventListener("click", cancel) : __defers["$.__views.loadingMask!click!cancel"] = true;
    $.__views.loadingOuter = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        borderRadius: "10dp",
        backgroundColor: "#C000",
        id: "loadingOuter"
    });
    $.__views.loadingMask.add($.__views.loadingOuter);
    $.__views.loadingInner = Ti.UI.createView({
        top: "20dp",
        right: "20dp",
        bottom: "20dp",
        left: "20dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "loadingInner"
    });
    $.__views.loadingOuter.add($.__views.loadingInner);
    $.__views.loadingSpinner = Ti.UI.createActivityIndicator({
        style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
        id: "loadingSpinner"
    });
    $.__views.loadingInner.add($.__views.loadingSpinner);
    $.__views.loadingMessage = Ti.UI.createLabel({
        top: "20dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "loadingMessage",
        text: "Loading"
    });
    $.__views.loadingInner.add($.__views.loadingMessage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {}, hasMessage = true;
    show(args.message, args.blocking);
    exports.show = show;
    exports.hide = hide;
    exports.setMessage = setMessage;
    exports.setBlocking = setBlocking;
    __defers["$.__views.loadingMask!click!cancel"] && $.__views.loadingMask.addEventListener("click", cancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;