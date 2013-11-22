
var Cloud = require('ti.cloud');
var APP = require('core');
var ACS = require('acs');
var plusSignRow = null;

var plateformwidth    = Ti.Platform.displayCaps.platformWidth; 
var plateformheight   = Ti.Platform.displayCaps.platformHeight;
       
                            if(OS_ANDROID){
	
					    			$.sUserRow.children[0].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
					    			$.sUserRow.children[1].width = (Ti.Platform.displayCaps.platformWidth - $.sUserRow.children[0].width)-1;
					    			///$.thirdRow.children[3].width = (Ti.Platform.displayCaps.platformWidth/4);
	
                                  }
          
var mRowAnimateLeft	= Ti.UI.createAnimation({
	 right:plateformwidth,
	left:-plateformwidth,
	curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration: 500
});
	
var mRowAnimateRight = Ti.UI.createAnimation({
	right: 0,
	left: 0,
	curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration: 500
});
var pRowAnimateLeft	= Ti.UI.createAnimation({
	left:0,
	right:0,
	curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration: 500
});
var pRowAnimateRight = Ti.UI.createAnimation({
	left:plateformwidth,
	right:-plateformwidth,
	curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration: 500
});



var args  = arguments[0];
 ACS.getOtherUser(args.fromUID,$.fromUser); 
 ACS.getOtherUser(args.toUID,$.toUser); 
 $.duration.text = ACS.prettyDate(args.dist.substr(0,18)+'Z') ||'N/A';
 var pic;
 
  ACS.getProfilePic(args.id,function(photos){
        	           	if(photos){
        	           	$.profileImg.image = photos.urls.square_75;		
        	           	pic = photos.urls.square_75;
        	         
        	           	
        	           	}
         // plusSignRow.visible = false;
       plusSignRow      = Alloy.createController('plusSignRow',{id:args.id,name:args.firstname || 'UnKnown',duration:args.dist.substr(11,8),pic:$.profileImg.image}).getView();
       plusSignRow.left =  plateformwidth;
       plusSignRow.top  = - plateformheight/5;
       $.specificUsersRow.add(plusSignRow);	           
        	           	
        	           });
 
 ACS.getProfilePic(args.toUID,function(photos){
        	           	if(photos){
        	           	$.toImage.image = photos.urls.square_75;		
        	           	pic = photos.urls.square_75;
        	           	}
        	           
        	           	
        	           });
        	           
 if(args.id != APP.user.id){
   	
   	
   	ACS.getCheckin(args.id,{location:$.loc});
   	
   	
   }else{
   	
   // if(APP.user.pic == null){
     // $.profileImg.image = "/images/pro.jpg";
     	// pic = "/images/pro.jpg";
    // }else{
    	// $.profileImg.image = APP.user.pic;
    	// pic = APP.user.pic;
    // };
//  	
   $.loc.text = APP.user.location || 'Around' ;
  
  
   //$.distance.text = APP.user.appear || 'N/A';
   	
   }
 

$.mention.text = args.mentionTxt; 
//$.address.text = args.address;

//var uid   = args.uid;
//var uname = args.uname;

     


var isToggled = false;
   $.specificUsersRow.addEventListener('swipe',function(e){
 	
 	if (!isToggled && e.direction ==='left'){
 		
		 	$.sUserRow.animate(mRowAnimateLeft);  
		   // $. specificUsersRow.remove($.sUserRow);	
		   // $. specificUsersRow.add(plusSignRow);
		    plusSignRow.animate(pRowAnimateLeft);
		     isToggled = true;
    
  }else if (isToggled && e.direction ==='right'){
  	
		    plusSignRow.animate(pRowAnimateRight);
		   // $. specificUsersRow.remove(plusSignRow);	
		    //$. specificUsersRow.add($.sUserRow);
		  	$.sUserRow.animate(mRowAnimateRight); 
		     isToggled = false;
 	//plusSignRow.visible = false;
  }
   });
   
   
Ti.App.addEventListener('restore',function(e){
 	
 	if (isToggled){
 		
           plusSignRow.animate(pRowAnimateRight);
		   $.sUserRow.animate(mRowAnimateRight); 
		   isToggled = false;
 	
  }
 	
 	
 });

   
   
   
   
   
   
   
   
   
   
   
   
   
   
