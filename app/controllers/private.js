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
  
  
   
  Ti.App.addEventListener('refreshPrivate',function(){
	   
	var indicater = Ti.UI.createView({
		height:1,
		top:70,
		backgroundColor:'#fff',
		
	});	
	var load = Ti.UI.createLabel({
		text:'Loading...',
		font:{fontWeight: 'bold',
        	  fontSize:12,
         },
         color:"#535353",
         textAlign:'center',
        // top:0,
         //right:15,
	});  
	
	indicater.add(load);
    $.pvt.add(indicater);  
    
    indicater.animate({
    	height:80,
        duration:1000,
    });
		   $.sc.animate({
		   	 top : 150,
		   	 duration:1000,
		   	
		   },function(){ });
	 
    
			setTimeout(function(){
				indicater.animate({
            	height:1,
           	    duration:1000,
                });
				
				$.sc.animate({
		   	     top : 70,
		   	     duration:1000,
		   	    },function(){$.pvt.remove(indicater);});
		
		 loadPrivateMentions();	
				
			},5000);
	
}); 
  
  
  
  loadPrivateMentions();
  
function loadPrivateMentions(){
	
	for(var i= 0; i< $.sc.getChildren().length;i++){
	    	$.sc.remove($.sc.children[i]);
	    	$.sc.children[i] = null;
	   };
	   
var str;
 
   ACS.getMyPrivates(APP.user.id,'mentions',APP.coordinates.lng,APP.coordinates.lat,APP.user.placeID,function(data){
    // ACS.ottieniVia(APP.coordinates.lat,APP.coordinates.lng,function(via){

    //   alert(places.places.street);
      
   for (var i = 0; i < data.length; i++) {
   	
   	// Ti.API.info(i);
   	 //Ti.API.info('['+ data[0].coordinates[0][1] +','+ data[0].coordinates[0][0]+']');
   	 
  
   
   
     var params = {
   	    	id:data[i].user.id,
   	    	mentionTxt:data[i].mentionTxt,
   	    	firstname:data[i].user.first_name,
   	    	address:addr,
   	    	dist:data[i].created_at, 
 			toUID:data[i].toUID,
   	    	fromUID:data[i].fromUID,
   	    	type:'private',
   	
   	    }
   	
   var mentionView = Alloy.createController('mentionView',params).getView();
    
    $.sc.add(mentionView);
  
   	
   	  
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

	
} // load private mentions
