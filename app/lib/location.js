
var APP = require('core');
var gpsProvider = null;
var networkProvider = null;

exports.init = function(e){
	if(OS_IOS){
			if (Ti.Geolocation.locationServicesEnabled) {
    			Ti.Geolocation.purpose = 'Get Current Location';
    			Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
    			Ti.Geolocation.distanceFilter = 1609.34;  //distance in meters, ~1mile
    			Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;

    			Ti.Geolocation.addEventListener('location', function(e) {
			        if (e.error) {
			            alert('Error: ' + e.error);
			        } else {
			            APP.coordinates.lat = parseFloat(e.coords.latitude);
			            APP.coordinates.lng = parseFloat(e.coords.longitude);
			            Ti.App.Properties.setDouble("latitude",APP.coordinates.lat);
			            Ti.App.Properties.setDouble("longitude",APP.coordinates.lng);
			        }
    			});
			} else {
    			alert('Please enable location services');
			}
		}
};

exports.getCoords = function(callback){
	Ti.Geolocation.getCurrentPosition(function(e){
		if(e.error)
		{
			callback({
				lat: APP.coordinates.lat,
				lng: APP.coordinates.lng
			});
		}
		else
		{
			callback({
				lat: e.coords.latitude,
				lng: e.coords.longitude
			});
		}
	});
};

// exports.addLocationListener = function(){
	// if(OS_IOS){
		// if (Ti.Geolocation.locationServicesEnabled) {
			// Ti.Geolocation.purpose = 'Get Current Location';
			// Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;
			// Ti.Geolocation.distanceFilter = 500;
			// //Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
		// }
		// else {
    			// alert('Please enable location services');
		// }
    // }
	// else if (OS_ANDROID){
		// Titanium.Geolocation.Android.manualMode = true;
		// gpsProvider = Ti.Geolocation.Android.createLocationProvider({
		    // name: Ti.Geolocation.PROVIDER_GPS, 
		    // minUpdateDistance: 500
		// });
		// networkProvider = Ti.Geolocation.Android.createLocationProvider({
		    // name: Ti.Geolocation.PROVIDER_NETWORK, 
		    // minUpdateDistance: 500
		// });
		// Ti.Geolocation.Android.addLocationProvider(gpsProvider);
		// Ti.Geolocation.Android.addLocationProvider(networkProvider);
// 		
		// var gpsRule = Ti.Geolocation.Android.createLocationRule({
    		// provider: Ti.Geolocation.PROVIDER_GPS,
		    // // Updates should be accurate to 100m
		    // accuracy: 500
		// });
// 		
		// Ti.Geolocation.Android.addLocationRule(gpsRule);
//     	
    	// var networkRule = Ti.Geolocation.Android.createLocationRule({
    		// provider: Ti.Geolocation.PROVIDER_NETWORK,
    		// accuracy: 500
    	// });
//     	
    	// Ti.Geolocation.Android.addLocationRule(networkRule);
//     	
    	// Ti.Geolocation.addEventListener('location', function(e) {
			// if (e.error) {
				// alert('Error: ' + e.error);
			// } else {
				// // APP.coordinates.lat = parseFloat(e.coords.latitude);
			    // // APP.coordinates.lng = parseFloat(e.coords.longitude);
			    // // Ti.App.Properties.setDouble("latitude",APP.coordinates.lat);
			    // // Ti.App.Properties.setDouble("longitude",APP.coordinates.lng);
			    // alert("leaving checkin location....checking out now");
			// }
    	// });
// 			
	// }
// };
// 
// // exports.addLocationListener = function(params){
	// // // this function will be called after user checks in/appears
// // };
// 
// exports.removeLocationListener = function(params)
// {
	// //This function will be called when user is .5 miles from checkin coordinates
// };
