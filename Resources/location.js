var APP = require("core");

var gpsProvider = null;

var networkProvider = null;

exports.init = function() {
    if (Ti.Geolocation.locationServicesEnabled) {
        Ti.Geolocation.purpose = "Get Current Location";
        Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
        Ti.Geolocation.distanceFilter = 1609.34;
        Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
        Ti.Geolocation.addEventListener("location", function(e) {
            if (e.error) alert("Error: " + e.error); else {
                APP.coordinates.lat = parseFloat(e.coords.latitude);
                APP.coordinates.lng = parseFloat(e.coords.longitude);
                Ti.App.Properties.setDouble("latitude", APP.coordinates.lat);
                Ti.App.Properties.setDouble("longitude", APP.coordinates.lng);
            }
        });
    } else alert("Please enable location services");
};

exports.refreshLocation = function() {};