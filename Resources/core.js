var Alloy = require("alloy");

var Cloud = require("ti.cloud");

Alloy.Globals = {
    deviceWidthScale: Ti.Platform.displayCaps.platformWidth / 320,
    deviceHeightScale: Ti.Platform.displayCaps.platformHeight / 480,
    deviceWidth: Ti.Platform.displayCaps.platformWidth,
    deviceHeight: Ti.Platform.displayCaps.platformHeight,
    alerts: {
        locationAlert: true,
        mentionAlert: true,
        privateAlert: true
    },
    animOverlay: Ti.UI.createAnimation({
        opacity: .5,
        duration: 250
    }),
    animHide: Ti.UI.createAnimation({
        opacity: 0,
        duration: 250
    }),
    user: {
        email: null,
        uname: null,
        id: null,
        sessionID: null,
        pwd: null,
        posts: 0,
        pic: null
    },
    coordinates: {
        lat: null,
        lng: null
    },
    config: {
        maxDistance: null,
        osVersion: null
    },
    msgWindowOpen: false,
    menuBtn: null,
    postBtn: null,
    menuWindow: null,
    LoginWindow: null,
    Tabs: null,
    init: function() {
        Ti.Network.addEventListener("change", _.bind(this.networkObserverUpdate, this));
        Ti.App.addEventListener("pause", _.bind(this.exit, this));
        Ti.App.addEventListener("close", _.bind(this.exit, this));
        Ti.App.addEventListener("resume", _.bind(this.resume, this));
        this.user.email = Ti.App.Properties.getString("email");
        this.user.uname = Ti.App.Properties.getString("uname");
        this.user.id = Ti.App.Properties.getString("uid");
        this.user.sessionID = Ti.App.Properties.getString("sessionID");
        this.coordinates.lat = Ti.App.Properties.getDouble("latitude");
        this.coordinates.lng = Ti.App.Properties.getDouble("longitude");
        Cloud.sessionId = Ti.App.Properties.getString("sessionID");
        this.osVersion = parseFloat(Ti.Platform.version);
    },
    loadContent: function() {
        this.log("debug", "APP.loadContent");
    },
    registerPush: function() {
        this.log("debug", "APP.registerPush");
    },
    networkObserverUpdate: function() {
        this.log("debug", "APP.networkObserverUpdate");
    },
    exit: function() {
        this.log("debug", "APP.exit");
    },
    resume: function() {
        this.log("debug", "APP.resume");
        this.init();
    },
    pause: function() {
        this.log("debug", "APP.pause");
    },
    log: function(_serverity, _msg) {
        switch (_serverity.toLowerCase()) {
          case "debug":
            Ti.API.debug(_msg);
            break;

          case "error":
            Ti.API.error(_msg);
            break;

          case "info":
            Ti.API.info(_msg);
            break;

          case "log":
            Ti.API.log(_msg);
            break;

          case "trace":
            Ti.API.trace(_msg);
            break;

          case "warn":
            Ti.API.warn(_msg);
        }
    }
};

module.exports = Alloy.Globals;