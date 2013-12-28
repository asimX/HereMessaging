function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.AS.CustomTabs/" + s : s.substring(0, index) + "/com.AS.CustomTabs/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("com.AS.CustomTabs");
    this.__widgetId = "com.AS.CustomTabs";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.wrapper = Ti.UI.createView({
        id: "wrapper"
    });
    $.__views.wrapper && $.addTopLevelView($.__views.wrapper);
    $.__views.tabView = Ti.UI.createView({
        backgroundColor: "#000000",
        id: "tabView"
    });
    $.__views.wrapper.add($.__views.tabView);
    $.__views.tabBar = Ti.UI.createView({
        layout: "horizontal",
        id: "tabBar"
    });
    $.__views.wrapper.add($.__views.tabBar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var _tabs = null;
    var _screenParams = null;
    var _controllers = [];
    var _tabIcons = [];
    var _views = {
        currentView: null,
        currentViewIndex: null
    };
    exports.open = function(tabs, tabBar, tabView, screenParams) {
        _tabs = tabs || {};
        _tabBar = tabBar || {};
        _tabView = tabView || {};
        _screenParams = screenParams || {};
        $.tabBar.height = _tabBar.height;
        $.tabBar.backgroundColor = _tabBar.bgColor;
        $.tabBar.bottom = "0dp";
        $.tabView.height = _tabView.height;
        $.tabView.top = _tabView.top;
        for (var i = 0; _tabs.length > i; i++) try {
            _controllers[i] = {
                view: Alloy.createController(_tabs[i].controller, _tabs[i].controllerParams).getView(),
                tabOrder: _tabs[i].tabOrder
            };
            var tabImageContainer = Ti.UI.createView({
                backgroundColor: "transparent",
                width: _screenParams.width / _tabs.length,
                layout: "absolute",
                tabOrder: _tabs[i].tabOrder,
                height: Ti.UI.FILL
            });
            _tabIcons[i] = {
                iconView: Ti.UI.createView({
                    backgroundImage: _tabs[i].icon,
                    backgroundColor: "transparent",
                    width: .8 * _tabBar.height,
                    tabOrder: _tabs[i].tabOrder,
                    height: .8 * _tabBar.height,
                    layout: "absolute"
                }),
                icon: _tabs[i].icon,
                selectedIcon: _tabs[i].selectedIcon
            };
            if ("mtnPvt" === _tabs[i].controller || "userProfile" === _tabs[i].controller) {
                _tabIcons[i].iconView.width = .7 * (_screenParams.width / _tabs.length);
                _tabIcons[i].iconView.height = .5 * _tabBar.height;
            }
            tabImageContainer.add(_tabIcons[i].iconView);
            $.tabBar.add(tabImageContainer);
            $.tabView.add(_controllers[i].view);
            if (0 == tabs[i].tabOrder) {
                _controllers[i].view.show();
                _tabIcons[i].iconView.backgroundImage = _tabIcons[i].selectedIcon;
                _views.currentView = _controllers[i];
                _views.currentViewIndex = i;
            } else _controllers[i].view.hide();
            tabImageContainer.addEventListener("click", function(e) {
                if (_views.currentViewIndex == e.source.tabOrder) ; else {
                    _tabIcons[_views.currentViewIndex].iconView.backgroundImage = _tabIcons[_views.currentViewIndex].icon;
                    _tabIcons[e.source.tabOrder].iconView.backgroundImage = _tabIcons[e.source.tabOrder].selectedIcon;
                    _controllers[_views.currentViewIndex].view.hide();
                    _controllers[e.source.tabOrder].view.show();
                    _views.currentViewIndex = e.source.tabOrder;
                }
            });
            _tabIcons[i].iconView.addEventListener("click", function(e) {
                if (_views.currentViewIndex == e.source.tabOrder) ; else {
                    _tabIcons[_views.currentViewIndex].iconView.backgroundImage = _tabIcons[_views.currentViewIndex].icon;
                    _tabIcons[e.source.tabOrder].iconView.backgroundImage = _tabIcons[e.source.tabOrder].selectedIcon;
                    _controllers[_views.currentViewIndex].view.hide();
                    _controllers[e.source.tabOrder].view.show();
                    _views.currentViewIndex = e.source.tabOrder;
                }
            });
        } catch (e) {
            Ti.API.info("An Error:[" + e.message + "] has occured in line " + e.line + " \nsourceID:" + e.sourceId + "\nsourceURL:" + e.sourceURL);
        }
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;