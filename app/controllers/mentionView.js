  
  var APP = require('core');
  var Cloud = require ('ti.cloud');
  var ACS = require('acs');
  var plusSignRow = null;
  var privateOrMention = null;
  
  var plateformwidth  = Ti.Platform.displayCaps.platformWidth; 
  var plateformheight = Ti.Platform.displayCaps.platformHeight;
  
  var mRowAnimateLeft	= Ti.UI.createAnimation({
	 right:plateformwidth,
	 left:-plateformwidth,
	 //curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	 duration: 500
});

	
var mRowAnimateRight = Ti.UI.createAnimation({
	right: 0,
	left: 0,
	//curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration: 500
});

var pRowAnimateLeft	= Ti.UI.createAnimation({
	left:0,
	right:0,
	//curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration: 500
});

	
var pRowAnimateRight = Ti.UI.createAnimation({
	left:plateformwidth,
	right:-plateformwidth,
	//curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration: 500
});
      
  var args        = arguments[0];
   $.mentionTxt.text = args.mentionTxt ||' no mention for the time being!'; 
   $.fname.text    = args.firstname || 'UnKnown';
   $.distance.text = ACS.prettyDate(args.dist.substr(0,18)+'Z') || 'N/A';
 
   var pic; 
    ACS.getProfilePic(args.id,function(photos){
    	
        	           	if(photos){
        	           	$.profileImg.image = photos.urls.square_75;	
        	           	  //pic = photos.urls.square_75;
        	         ///////
        	          if(args.id != APP.user.id){
        	         
        	          	
				       plusSignRow      = Alloy.createController('plusSignRow',{id:args.id,name:args.firstname || 'UnKnown',duration:args.dist.substr(11,8),pic:$.profileImg.image}).getView();
				       plusSignRow.left =  plateformwidth;
				       plusSignRow.top  = - plateformheight/5;
				     $.mentionView.add(plusSignRow);
				    
				       privateOrMention       = Alloy.createController('privateOrMention',{id:args.id,type:args.type}).getView();
				       privateOrMention.right  =  plateformwidth;
				       privateOrMention.top    = - plateformheight/5;
				     $.mentionView.add(privateOrMention);
                         }
         	          
         	          
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
   $.loc.text = APP.user.placeName || 'Around' ;
  
  
   //$.distance.text = APP.user.appear || 'N/A';
   	
   }
   
   //var uid        = args.uid;
   //$.nameLbl.text     = args.uname || "unknwn";
   
  // $.statusLbl.text = args.msg  || "there is no msg for the time being";
  //$.updateTime.text =args.time || "N/A";
   
 
 if(OS_ANDROID){
      $. mentionView.height = plateformheight/6;///
  }else{
  	  $. mentionView.height = plateformheight/5;
  	
  }
  
  
  //$.mentionView.addEventListener('click',function(){
  	
  	
  //});
  
   if(args.id != APP.user.id){
   
    
   // plusSignRow.visible = false;
      

  var isToggled = false;
 $. mentionView.addEventListener('swipe',function(e){
 	
 	if (!isToggled && e.direction ==='left'){
 		
		 	$.mRow.animate(mRowAnimateLeft);  
		    //$. mentionView.remove($.mRow);	
		    // $. mentionView.add(plusSignRow);
		    plusSignRow.animate(pRowAnimateLeft);
		     isToggled = true;
    
  }else if (isToggled && e.direction === 'right'){
  	         $.mRow.animate(mRowAnimateRight);
		  /// $. mentionView.remove(plusSignRow);	
		    //$. mentionView.add($.mRow);
		  	   plusSignRow.animate(pRowAnimateRight);
		     isToggled = false;
 	//plusSignRow.visible = false;
  }
  else if (!isToggled && e.direction ==='right'){
  	         $.mRow.animate(pRowAnimateRight);
		  /// $. mentionView.remove(plusSignRow);	
		    //$. mentionView.add($.mRow);
		  	 privateOrMention.animate(mRowAnimateRight);
		     isToggled = true;
 	//plusSignRow.visible = false;
  }
  
   else if (isToggled && e.direction ==='left'){
  	         $.mRow.animate(mRowAnimateRight);
		  /// $. mentionView.remove(plusSignRow);	
		    //$. mentionView.add($.mRow);
		  	 privateOrMention.animate({
		  	 	right:plateformwidth,
	            left:-plateformwidth,
	           // curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	            duration: 500
		  	 	
		  	 });
		     isToggled = false;
 	//plusSignRow.visible = false;
  }
  
 });
 
  
 Ti.App.addEventListener('restore',function(e){
 	
 	if (isToggled){
  	    $.mRow.animate(mRowAnimateRight);
		plusSignRow.animate(pRowAnimateRight);
		privateOrMention.animate({
		  	 	right:plateformwidth,
	            left:-plateformwidth,
	           // curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	            duration: 500
		  	 	
		  	 });
		
		isToggled = false;
 	//plusSignRow.visible = false;
  }
 	
 	
 });

 
 }; // if(args.id != APP.user.id){
    
//$.mRow.