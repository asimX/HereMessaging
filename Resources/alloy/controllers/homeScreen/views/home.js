function Controller() {
    function createContentWindow() {
        var contentWin = Ti.UI.createWindow({
            backgroundColor: "#FFFFFF",
            titleImage: "/images/hereScreen/Logo_dark_BK.png",
            barColor: "#EbEbEb",
            translucent: true,
            statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
            autoAdjustScrollViewInsets: true,
            navTintColor: "white"
        });
        var transparentView = Ti.UI.createView({
            height: Ti.UI.FILL,
            width: Ti.UI.FILL,
            backgroundColor: "#000",
            opacity: 0
        });
        APP.menuBtn = Ti.UI.createButton({
            title: "MENU",
            color: "#0072ff"
        });
        postButton = Ti.UI.createButton({
            backgroundImage: "/images/hereScreen/post button.png"
        });
        contentWin.leftNavButton = APP.menuBtn;
        contentWin.rightNavButton = postButton;
        APP.menuBtn.addEventListener("click", function() {
            APP.Navigation.presentMenuViewController();
        });
        postButton.addEventListener("click", function() {
            transparentView.animate(APP.animOverlay, function() {
                if (0 == APP.user.posts) {
                    firstPostView = Alloy.createController("homeScreen/views/firstPost", {
                        view: transparentView
                    }).getView();
                    APP.menuBtn.enabled = false;
                    postButton.enabled = false;
                    firstPostView.open();
                    firstPostView.addEventListener("cancel", function() {
                        APP.menuBtn.enabled = true;
                        postButton.enabled = true;
                    });
                } else Alloy.createController("homeScreen/views/postMsg").getView();
            });
        });
        scaleContentViewLabel = Ti.UI.createLabel({
            text: "Scale content view:",
            top: 50,
            left: 10
        });
        scaleContentViewBtn = Ti.UI.createSwitch({
            value: true,
            top: 50,
            right: 10
        });
        contentWin.add(scaleContentViewLabel);
        contentWin.add(scaleContentViewBtn);
        scaleContentViewBtn.addEventListener("change", function() {
            APP.Navigation.setScaleContentView(scaleContentViewBtn.value);
        });
        scaleBackgroundImageViewLabel = Ti.UI.createLabel({
            text: "Scale background image:",
            top: 100,
            left: 10
        });
        scaleBackgroundImageViewBtn = Ti.UI.createSwitch({
            value: true,
            top: 100,
            right: 10
        });
        contentWin.add(scaleBackgroundImageViewLabel);
        contentWin.add(scaleBackgroundImageViewBtn);
        scaleBackgroundImageViewBtn.addEventListener("change", function() {
            APP.Navigation.setScaleBackgroundImageView(scaleBackgroundImageViewBtn.value);
        });
        parallaxLabel = Ti.UI.createLabel({
            text: "Parallax enabled:",
            top: 150,
            left: 10
        });
        parallaxBtn = Ti.UI.createSwitch({
            value: true,
            top: 150,
            right: 10
        });
        contentWin.add(parallaxLabel);
        contentWin.add(parallaxBtn);
        parallaxBtn.addEventListener("change", function() {
            APP.Navigation.setParallaxEnabled(parallaxBtn.value);
        });
        panLabel = Ti.UI.createLabel({
            text: "Pan gesture enabled:",
            top: 200,
            left: 10
        });
        panBtn = Ti.UI.createSwitch({
            value: true,
            top: 200,
            right: 10
        });
        contentWin.add(panLabel);
        contentWin.add(panBtn);
        panBtn.addEventListener("change", function() {
            APP.Navigation.setPanGestureEnabled(panBtn.value);
        });
        scaleLabel = Ti.UI.createLabel({
            text: "Content View scale:",
            top: 250,
            left: 10
        });
        var scaleSlider = Titanium.UI.createSlider({
            top: 290,
            min: 0,
            max: 100,
            width: "100%",
            value: 50
        });
        contentWin.add(scaleLabel);
        contentWin.add(scaleSlider);
        contentWin.add(transparentView);
        var navController = Ti.UI.iOS.createNavigationWindow({
            window: contentWin
        });
        return navController;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeScreen/views/home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.MainWindow = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK,
        id: "MainWindow"
    });
    $.__views.MainWindow && $.addTopLevelView($.__views.MainWindow);
    $.__views.loading = Alloy.createWidget("nl.fokkezb.loading", "widget", {
        id: "loading",
        __parentSymbol: $.__views.MainWindow
    });
    $.__views.loading.setParent($.__views.MainWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    require("ti.cloud");
    require("acs");
    var TiSideMenu = require("de.marcelpociot.sidemenu");
    arguments[0];
    var firstPostView = null;
    APP.menuWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
    });
    var leftTableView = Ti.UI.createTableView({
        top: 100,
        font: {
            fontSize: 12,
            color: "#ffffff"
        },
        rowHeight: 40,
        backgroundColor: "transparent",
        data: [ {
            title: "HERE",
            color: "white"
        }, {
            title: "ME",
            color: "white"
        }, {
            title: "INVITE",
            color: "white"
        }, {
            title: "ABOUT",
            color: "white"
        }, {
            title: "HELP",
            color: "white"
        } ],
        separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE
    });
    APP.menuWindow.add(leftTableView);
    leftTableView.addEventListener("click", function(e) {
        switch (e.index) {
          case 0:
          case 1:
            APP.Navigation.hideMenuViewController();
            alert("You clicked " + e.rowData.title + ".");
            break;

          case 2:
            var newWin = Ti.UI.createWindow({
                backgroundColor: "red"
            });
            APP.Navigation.setContentWindow({
                window: newWin,
                animated: true
            });
            APP.Navigation.hideMenuViewController();
            break;

          case 3:
            var newWin = Ti.UI.createWindow({
                backgroundColor: "red"
            });
            contentWindow.openWindow(newWin);
            APP.Navigation.hideMenuViewController();
            break;

          case 4:
            APP.Navigation.setContentWindow(createContentWindow());
            APP.Navigation.hideMenuViewController();
        }
    });
    var contentWindow = createContentWindow();
    $.MainWindow = TiSideMenu.createSideMenu({
        contentView: contentWindow,
        menuView: APP.menuWindow,
        backgroundColor: "#000",
        contentViewScaleValue: .65,
        scaleContentView: true,
        panGestureEnabled: true,
        scaleBackgroundImageView: true,
        parallaxEnabled: true,
        blurBackground: false,
        tintColor: "#ffffff",
        blurRadius: 20,
        iterations: 10
    });
    APP.Navigation = $.MainWindow;
    APP.Navigation.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;