function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.pullToRefresh/" + s : s.substring(0, index) + "/nl.fokkezb.pullToRefresh/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK
    }
}, {
    isApi: true,
    priority: 1000.0007,
    key: "TextArea",
    style: {
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "40dp",
        left: "10dp",
        right: "10dp",
        top: "10dp",
        backgroundColor: "#c0c0c0",
        bottom: "10dp",
        returnKeyType: Titanium.UI.RETURNKEY_DONE
    }
}, {
    isApi: true,
    priority: 1101.0008,
    key: "Button",
    style: {
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "contentView",
    style: {
        top: "10dp",
        borderRadius: "8dp",
        height: "270dp",
        contentWidth: Ti.UI.FILL,
        contentHeight: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0003,
    key: "scrollView",
    style: {
        top: "65dp",
        layout: "vertical",
        contentHeight: "auto",
        scrolshowVerticalScrollIndicator: true,
        scrollsToTop: true
    }
}, {
    isClass: true,
    priority: 10000.0004,
    key: "finePrintLbl",
    style: {
        color: "#747474",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: "14dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0009,
    key: "row",
    style: {
        height: "80dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ebebeb"
    }
}, {
    isClass: true,
    priority: 10000.001,
    key: "innerViewRowTwo",
    style: {
        backgroundImage: "/images/rows/box-post-bg.png"
    }
}, {
    isClass: true,
    priority: 10000.0011,
    key: "profilePic",
    style: {
        image: "/images/pro.jpg",
        width: "100%",
        height: "100%"
    }
}, {
    isClass: true,
    priority: 10000.0012,
    key: "bold",
    style: {
        font: {
            fontWeight: "bold",
            size: 12
        },
        color: "#535353",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    }
}, {
    isClass: true,
    priority: 10000.0013,
    key: "thin",
    style: {
        font: {
            size: 12
        },
        color: "#797979",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    }
}, {
    isClass: true,
    priority: 10000.0014,
    key: "tabGroup",
    style: {
        height: 70,
        layout: "horizontal",
        backgroundImage: "/images/btn-settings@2x.png"
    }
}, {
    isClass: true,
    priority: 10000.0016,
    key: "tabButton",
    style: {
        width: 80,
        height: 70
    }
}, {
    isClass: true,
    priority: 10000.0019,
    key: "tabButtonSelected",
    style: {
        width: 80,
        height: 70
    }
}, {
    isClass: true,
    priority: 10101.0005,
    key: "finePrintLbl",
    style: {
        width: 150
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "headingLbl",
    style: {
        color: "#334d85",
        top: "10dp",
        left: "10dp",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: "18dp"
        }
    }
} ];