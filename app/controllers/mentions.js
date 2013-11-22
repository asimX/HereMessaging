var Cloud = require('ti.cloud');
var APP = require('core');
var ACS = require('acs');
var addr;
var loginWin   = null;
var privateWin = null;

////$.mentions.open();

//var plateformwidth  = Ti.Platform.displayCaps.platformWidth; 
//var plateformheight = Ti.Platform.displayCaps.platformHeight;
     
   // $.mentions.right = plateformwidth/6,
  //  $.mentions.width = plateformwidth-plateformwidth/6,


 var str;
  ACS.getMyMentions(APP.user.id,'mentions',APP.coordinates.lng,APP.coordinates.lat,APP.user.placeID,function(data){
 // ACS.ottieniVia(APP.coordinates.lat,APP.coordinates.lng,function(via){

    //   alert(places.places.street);
      
   for (var i = 0; i < data.length; i++) {
   	
   	// Ti.API.info(i);
   	 //Ti.API.info('['+ data[0].coordinates[0][1] +','+ data[0].coordinates[0][0]+']');
   	 
   // ACS.ottieniVia(data[i].coordinates[0][1],data[i].coordinates[0][0],function(plc){
//   
    // addr = plc.places[0].street;
//    
    // Ti.API.info(addr);
//    	
   // });
   
   
     var params = {
   	    	id:data[i].user.id,
   	    	mentionTxt:data[i].mentionTxt,
   	    	firstname:data[i].user.first_name,
   	    	address:addr,
   	    	dist:data[i].created_at, 
 			toUID:data[i].toUID,
   	    	fromUID:data[i].fromUID,
   	    	type:'public',
   	
   	    }
   	
   var mentionView = Alloy.createController('mentionView',params).getView();
    
    $.scroller.add(mentionView);
  
   	
   	  
   };

         	
  	
  });	





 

// $.mHomeTab.addEventListener('click',function(){
// 	
	// $.mentions.close();
// 	
	// //loginWin = Alloy.createController('index').getView();
	// if(APP.LoginWindow==null){
		// APP.loginWindow = Alloy.createController('loginScreen').getView();
    // }
//     
    // APP.loginWindown.open();
// });

// $.mHeaderNav2.addEventListener('click',function(){
// 	
	     // // privateWin = Alloy.createController('private').getView();
         // // privateWin.open();
// 	
// 	
// });
