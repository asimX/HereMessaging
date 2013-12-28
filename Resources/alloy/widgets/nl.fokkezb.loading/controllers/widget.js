function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.loading/" + s : s.substring(0, index) + "/nl.fokkezb.loading/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function show(_message, _blocking) {
        "undefined" != typeof _message && setMessage(_message);
        "undefined" != typeof _blocking && setBlocking(_blocking);
        if (controller) controller.show(); else {
            controller = Widget.createController("loading", args);
            controller.on("cancel", function() {
                $.trigger("cancel");
            });
        }
        return;
    }
    function hide() {
        controller && controller.hide();
        return;
    }
    function setMessage(_message) {
        args.message = _message;
        controller && controller.setMessage(args.message);
        return;
    }
    function setBlocking(_blocking) {
        args.blocking = _blocking;
        controller && controller.setBlocking(args.blocking);
        return;
    }
    var Widget = new (require("alloy/widget"))("nl.fokkezb.loading");
    this.__widgetId = "nl.fokkezb.loading";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var controller, args = arguments[0] || {};
    args.show && show();
    exports.show = show;
    exports.hide = hide;
    exports.setMessage = setMessage;
    exports.setBlocking = setBlocking;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;