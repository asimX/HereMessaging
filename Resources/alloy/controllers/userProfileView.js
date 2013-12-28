function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "userProfileView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.profileView = Ti.UI.createView({
        backgroundColor: "#fff",
        top: 0,
        height: 200,
        id: "profileView"
    });
    $.__views.profileView && $.addTopLevelView($.__views.profileView);
    $.__views.profileImg = Ti.UI.createImageView({
        width: 50,
        height: 50,
        borderRadius: 5,
        borderColor: "#000000",
        borderWidth: 1,
        id: "profileImg",
        left: "5",
        top: "5"
    });
    $.__views.profileView.add($.__views.profileImg);
    $.__views.leftView = Ti.UI.createView({
        id: "leftView",
        layout: "vertical",
        top: "0",
        right: "0"
    });
    $.__views.profileView.add($.__views.leftView);
    $.__views.unameLbl = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 13
        },
        color: "#535353",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        backgroundColor: "#cecece",
        borderRadius: 5,
        id: "unameLbl",
        right: "5",
        top: "5"
    });
    $.__views.leftView.add($.__views.unameLbl);
    $.__views.emailLbl = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 13
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        backgroundColor: "#cecece",
        borderRadius: 5,
        id: "emailLbl",
        right: "5",
        top: "5"
    });
    $.__views.leftView.add($.__views.emailLbl);
    $.__views.passLbl = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 13
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        backgroundColor: "#cecece",
        borderRadius: 5,
        text: "Tap to Edit Password",
        id: "passLbl",
        right: "5",
        top: "5"
    });
    $.__views.leftView.add($.__views.passLbl);
    $.__views.locationLbl = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            size: 13
        },
        color: "#fbb14e",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        backgroundColor: "#000",
        borderRadius: 5,
        text: "N/A",
        id: "locationLbl",
        right: "5",
        top: "5"
    });
    $.__views.leftView.add($.__views.locationLbl);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti.cloud");
    var APP = require("core");
    var ACS = require("acs");
    var updateWin = null;
    var plateformwidth = Ti.Platform.displayCaps.platformWidth;
    var plateformheight = Ti.Platform.displayCaps.platformHeight;
    $.profileView.height = plateformheight / 2 - 40;
    $.leftView.width = plateformwidth / 2 + 30;
    $.leftView.height = $.profileView.height;
    $.profileImg.width = plateformwidth / 2 - 30;
    $.profileImg.height = plateformwidth / 2 - 30;
    $.unameLbl.width = plateformwidth / 2 + 15;
    $.unameLbl.height = $.profileImg.height / 3 - 2;
    $.emailLbl.width = plateformwidth / 2 + 15;
    $.emailLbl.height = $.profileImg.height / 3 - 2;
    $.passLbl.width = plateformwidth / 2 + 15;
    $.passLbl.height = $.profileImg.height / 3 - 2;
    $.locationLbl.width = plateformwidth / 2 + 15;
    $.locationLbl.height = $.profileImg.height / 3 - 2;
    var args = arguments[0];
    args.uid;
    $.unameLbl.text = args.uname || "unknwn";
    $.emailLbl.text = args.uemail || "No emailId";
    ACS.getProfilePic(APP.user.id, function(photos) {
        if (photos) {
            Ti.API.info("profile user = " + JSON.stringify(photos));
            $.profileImg.image = photos.urls.square_75;
        }
    });
    ACS.getCheckin(APP.user.id, {
        location: $.locationLbl
    });
    $.profileImg.addEventListener("click", function() {
        var photo;
        Ti.Media.openPhotoGallery ? Ti.Media.openPhotoGallery({
            success: function(e) {
                photo = e.media;
                if (!photo) {
                    alert("Please provide a photo!");
                    return;
                }
                ACS.uploadPic({
                    photo: photo
                }, function() {
                    ACS.getProfilePic(APP.user.id, function(photos) {
                        if (photos) {
                            Ti.API.info("profile user = " + JSON.stringify(photos));
                            $.profileImg.image = photos.urls.original;
                        }
                    });
                });
            }
        }) : Ti.Media.showCamera && Ti.Media.showCamera({
            success: function(e) {
                photo = e.media;
                if (!photo) {
                    alert("Please provide a photo!");
                    return;
                }
                ACS.uploadPic({
                    photo: photo
                }, function() {
                    ACS.getProfilePic(APP.user.id, function(photos) {
                        if (photos) {
                            Ti.API.info("profile user = " + JSON.stringify(photos));
                            $.profileImg.image = photos.urls.original;
                        }
                    });
                });
            }
        });
    });
    var t1 = Titanium.UI.create2DMatrix();
    t1 = t1.scale(1.1);
    var a = Titanium.UI.createAnimation();
    a.transform = t1;
    a.duration = 200;
    a.addEventListener("complete", function() {
        Titanium.API.info("here in complete");
        var t2 = Titanium.UI.create2DMatrix();
        t2 = t2.scale(1);
        updateWin.animate({
            transform: t2,
            duration: 200
        });
    });
    $.passLbl.addEventListener("click", function() {
        updateWin = Alloy.createController("update").getView();
        "android" == Ti.Platform.osname ? updateWin.open({
            modal: true
        }) : updateWin.open(a);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;