function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "aroundScreen/around";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.around = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "around"
    });
    $.__views.around && $.addTopLevelView($.__views.around);
    $.__views.header = Ti.UI.createView({
        top: "0dp",
        backgroundColor: "#202020",
        id: "header"
    });
    $.__views.around.add($.__views.header);
    $.__views.headerImg = Ti.UI.createImageView({
        left: "5dp",
        image: "/images/hereScreen/navbar-herelogo.png",
        id: "headerImg"
    });
    $.__views.header.add($.__views.headerImg);
    $.__views.aroundTV = Ti.UI.createTableView({
        rowHeight: "80dp",
        id: "aroundTV"
    });
    $.__views.around.add($.__views.aroundTV);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    require("ti.cloud");
    var ACS = require("acs");
    Ti.API.info("latitude  : " + APP.coordinates.lat);
    Ti.API.info("longitude : " + APP.coordinates.lng);
    $.header.height = APP.TabBar.height;
    ACS.getPlaces(function(response) {
        var data = [];
        Ti.API.info(response);
        for (var i = 0; response.length > i; i++) data.push(Alloy.createController("aroundScreen/aroundSwipeRow", {
            name: response[i].name,
            distance: response[i].distance,
            appearances: response[i].appearances,
            placeID: response[i].placeID
        }).getView());
        $.aroundTV.setData(data);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;