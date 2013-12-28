function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "aroundScreen/aroundSwipeRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.aroundtvRow = Ti.UI.createTableViewRow({
        height: "80dp",
        backgroundColor: "#ebebeb",
        layout: "horizontal",
        id: "aroundtvRow"
    });
    $.__views.aroundtvRow && $.addTopLevelView($.__views.aroundtvRow);
    $.__views.iconContainer = Ti.UI.createView({
        id: "iconContainer"
    });
    $.__views.aroundtvRow.add($.__views.iconContainer);
    $.__views.aroundIcon = Ti.UI.createImageView({
        image: "/images/aroundScreen/tabbar-around.png",
        width: "40dp",
        height: "40dp",
        id: "aroundIcon"
    });
    $.__views.iconContainer.add($.__views.aroundIcon);
    $.__views.rowCenterView = Ti.UI.createView({
        height: Ti.UI.FILL,
        backgroundColor: "#ebebeb",
        id: "rowCenterView"
    });
    $.__views.aroundtvRow.add($.__views.rowCenterView);
    $.__views.placeLblContainer = Ti.UI.createView({
        top: 0,
        height: "62dp",
        horizontalWrap: false,
        left: 0,
        id: "placeLblContainer"
    });
    $.__views.rowCenterView.add($.__views.placeLblContainer);
    $.__views.placeLbl = Ti.UI.createLabel({
        font: {
            fontFamily: "GillSans-Light",
            fontSize: "25dp"
        },
        width: Ti.UI.SIZE,
        backgroundColor: "#ebebeb",
        textAlign: "left",
        left: 0,
        text: "this is a place",
        id: "placeLbl"
    });
    $.__views.placeLblContainer.add($.__views.placeLbl);
    $.__views.innerView = Ti.UI.createView({
        height: "18dp",
        layout: "horizontal",
        bottom: "3dp",
        id: "innerView"
    });
    $.__views.rowCenterView.add($.__views.innerView);
    $.__views.roadImg = Ti.UI.createImageView({
        image: "/images/aroundScreen/road.png",
        height: Ti.UI.FILL,
        width: "20dp",
        id: "roadImg"
    });
    $.__views.innerView.add($.__views.roadImg);
    $.__views.distanceLbl = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: "3dp",
        color: "#a8a8a8",
        text: "4.5",
        id: "distanceLbl"
    });
    $.__views.innerView.add($.__views.distanceLbl);
    $.__views.rowRightView = Ti.UI.createView({
        backgroundColor: "#ebebeb",
        height: Ti.UI.FILL,
        id: "rowRightView"
    });
    $.__views.aroundtvRow.add($.__views.rowRightView);
    $.__views.appearancesLbl = Ti.UI.createLabel({
        top: "3dp",
        font: {
            fontSize: "10dp"
        },
        color: "#444444",
        text: "Appearances",
        id: "appearancesLbl"
    });
    $.__views.rowRightView.add($.__views.appearancesLbl);
    $.__views.numOfAppearances = Ti.UI.createLabel({
        font: {
            fontFamily: "GillSans-Light",
            fontSize: "30dp"
        },
        text: "55",
        id: "numOfAppearances"
    });
    $.__views.rowRightView.add($.__views.numOfAppearances);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var ACS = require("acs");
    var args = arguments[0] || {};
    $.iconContainer.width = .2 * APP.deviceWidth;
    $.rowCenterView.width = .6 * APP.deviceWidth;
    $.rowRightView.width = .2 * APP.deviceWidth;
    $.innerView.width = .2 * APP.deviceWidth;
    $.placeLbl.text = args.name;
    $.distanceLbl.text = args.distance;
    $.numOfAppearances.text = args.appearances;
    Titanium.UI.createAnimation({
        left: 0,
        duration: 5e3,
        curve: Titanium.UI.ANIMATION_CURVE_LINEAR
    });
    $.aroundtvRow.addEventListener("click", function() {
        ACS.Checkin(args.placeID, {}, function(e) {
            if (e.success) {
                $.aroundIcon.image = "/images/aroundScreen/tabbar-around-active.png";
                $.distanceLbl.text = "H";
                $.distanceLbl.color = "#ff8e00";
                alert("Now appearing in !" + APP.user.checkin.placeName);
            } else alert("Error occured in appearing. Error code: " + e.code + ". Message: " + e.message);
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;