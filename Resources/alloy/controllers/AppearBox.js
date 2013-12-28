function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "AppearBox";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.AppearBox = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK,
        backgroundColor: "#202020",
        opacity: .95,
        id: "AppearBox"
    });
    $.__views.AppearBox && $.addTopLevelView($.__views.AppearBox);
    $.__views.thisStatusContentView = Ti.UI.createView({
        id: "thisStatusContentView",
        layout: "vertical"
    });
    $.__views.AppearBox.add($.__views.thisStatusContentView);
    $.__views.closePopUp = Ti.UI.createButton({
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontFamily: "GillSans",
            fontWeight: "bold",
            fontSize: "18dp"
        },
        backgroundImage: "/images/sendBtn.png",
        backgroundLeftCap: "10dp",
        color: "black",
        height: "40dp",
        bottom: "5dp",
        title: "CLOSE",
        id: "closePopUp"
    });
    $.__views.thisStatusContentView.add($.__views.closePopUp);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    require("ti.cloud");
    var ACS = require("acs");
    var args = arguments[0];
    Ti.API.info("latitude: " + APP.coordinates.lat);
    Ti.API.info("longitude: " + APP.coordinates.lng);
    ACS.getPlace(APP.coordinates.lng, APP.coordinates.lat, function(e) {
        Ti.API.info("data returned to CALLBACK:  " + JSON.stringify(e));
        for (var i = 0, l = e.places.length; l > i; i++) {
            var lab = Ti.UI.createLabel({
                id: e.places[i].id,
                text: e.places[i].name,
                font: {
                    fontFamily: "GillSans-Light",
                    fontSize: "30dp"
                },
                top: "3dp",
                color: "#535353"
            });
            $.thisStatusContentView.add(lab);
            lab.addEventListener("click", function(e) {
                ACS.Checkin(e.source.id, {
                    appear: args.appear,
                    location: args.location
                }, function() {
                    Ti.App.fireEvent("refreshScreen");
                });
                APP.user.placeID = e.source.id;
                Ti.App.Properties.setString("placeID", e.source.id);
                var t3 = Titanium.UI.create2DMatrix();
                t3 = t3.scale(0);
                $.AppearBox.close({
                    transform: t3,
                    duration: 300
                });
            });
        }
    });
    $.AppearBox.width = .9 * APP.deviceWidth;
    $.AppearBox.height = .7 * APP.deviceHeight;
    $.AppearBox.top = .1 * APP.deviceHeight;
    APP.deviceHeightScale;
    APP.deviceWidthScale;
    var t = Titanium.UI.create2DMatrix();
    t = t.scale(0);
    $.AppearBox.transform = t;
    $.closePopUp.addEventListener("click", function() {
        var t3 = Titanium.UI.create2DMatrix();
        t3 = t3.scale(0);
        $.AppearBox.close({
            transform: t3,
            duration: 300
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;