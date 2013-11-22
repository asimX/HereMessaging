
//for(var i= 0; i < 5; i++){
 var APP = require('core');
 var Cloud = require ('ti.cloud');
 var ACS = require('acs');	
 
 Ti.API.info("latitude  : "+ APP.coordinates.lat);
 Ti.API.info("longitude : "+ APP.coordinates.lng);
 
 $.header.height = APP.TabBar.height;
 
 // 2013-04-25T14:46:18+0000
 
ACS.getPlaces(function(response){
// var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.78583526611328,-122.40641784667969&radius=4828.03&types=food|cafe|amusement_park|aquarium|bowling_alley|gym|hair_care|hindu_temple|mosque|movie_theater|place_of_worship|school|shopping_mall|spa|stadium|synagogue|university|zoo&sensor=false&key=AIzaSyCS_MXTiCSfqaW3jmbqQJaQmhd40k9kVhI";
var data = [];
// var xhr = Ti.Network.createHTTPClient({
	// onload: function(e){ 	
	 	// var response = JSON.parse(this.responseText);
	 	Ti.API.info(response);
	 	for (var i=0; i < response.length; i++) {
	         
	      data.push(Alloy.createController('aroundScreen/aroundSwipeRow',{
	      	name: response[i].name, 
	      	distance: response[i].distance, 
	      	appearances:response[i].appearances,
	      	placeID: response[i].placeID}).getView());
	      //$.aroundTV.add(Alloy.createController('/aroundScreen/aroundSwipeRow',{}).getView()); 
	          
	    }
	    $.aroundTV.setData(data);
	// },
	// onerror: function(e) {
		// // this function is called when an error occurs, including a timeout
        // Ti.API.debug(e.error);
        // alert('error');
    // },
});
// xhr.open("GET", url);
// xhr.send();
 //
 
 
 /*
 
 ACS.getAppears(APP.user.id,function(checkins){
     var arr =[];
     for (var i=0; i < checkins.length; i++) {
          
          arr.push(checkins[i].place.id);
     };	
     
    var uniqueArray =  unique(arr);
     Ti.API.info("Array two ="+JSON.stringify(uniqueArray));
     
    ////    
    
    
	
});
*/
function unique (arr) {
    var hash = {}, result = [];
    for (var i = 0; i < arr.length; i++)
    	if (!(arr[i] in hash)) { //it works with objects! in FF, at least
    		hash[arr[i]] = true;
    		result.push(arr[i]);
    	}
    return result;
}

//checkins[i]
       //var line1 = Alloy.createController('aroundView',{state:checkins[i].place.name,image:'/images/around/2verDotBox.png',appear:checkins.length, appeared:checkins[i].created_at}).getView(); 
       
       //$.scroller.add(line1);
//var line2 = Alloy.createController('aroundView',{state:'UP TOWN',image:'/images/around/3dotBox.png',appear:'16', appeared:'NOV1,2012 11:20 PM'}).getView(); 
//var line3 = Alloy.createController('aroundView',{state:'UofH',image:'/images/around/2verDotBox.png',appear:'430',appeared:'NOV1,2012 11:20 PM'}).getView(); 
//var line4 = Alloy.createController('aroundView',{state:'WAshington st',image:'/images/around/2horDotBox.png',appear:'153',appeared:'NOV1,2012 11:20 PM'}).getView(); 

//$.scroller.add(line1);
//$.scroller.add(line2);
//$.scroller.add(line3);
//$.scroller.add(line4);
	
//}
