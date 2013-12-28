function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "accordianView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.accordianView = Ti.UI.createView({
        top: 1,
        layout: "vertical",
        id: "accordianView",
        height: "100"
    });
    $.__views.accordianView && $.addTopLevelView($.__views.accordianView);
    $.__views.statusContainer = Ti.UI.createView({
        layout: "vertical",
        id: "statusContainer",
        height: "90"
    });
    $.__views.accordianView.add($.__views.statusContainer);
    $.__views.accordian = Ti.UI.createView({
        backgroundColor: "#fff",
        backgroundGradient: {
            type: "linear",
            colors: [ "#cecece", "#797979" ],
            startPoint: {
                x: 0,
                y: 0
            },
            endPoint: {
                x: 0,
                y: "32dp"
            },
            backFillStart: false
        },
        top: 1,
        id: "accordian",
        height: "10"
    });
    $.__views.accordianView.add($.__views.accordian);
    $.__views.accordianbtn = Ti.UI.createImageView({
        id: "accordianbtn",
        image: "images/hidden.png",
        width: "10",
        height: "10"
    });
    $.__views.accordian.add($.__views.accordianbtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti.cloud");
    var APP = require("core");
    require("acs");
    var statusView = Alloy.createController("statusView", {
        uname: APP.user.uname,
        uid: APP.user.id,
        msg: "yes you r going good",
        time: "12:02"
    }).getView();
    $.statusContainer.add(statusView);
    $.accordian.addEventListener("click", function() {});
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;