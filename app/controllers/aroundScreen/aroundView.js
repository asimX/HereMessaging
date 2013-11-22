 var APP = require('core');
 var Cloud = require ('ti.cloud');
 var ACS = require('acs');
// var aroundSwipeRow = null;
 //var privateOrMention = null;

var args = arguments[0] || {};

$.around.text = args.state || 'N/A';
$.cube1.image = args.image;
$.appear.text = args.appear;
$.duration.text = ACS.prettyDate(args.appeared.substr(0,18)+'Z') || 'N/A';
$.miles.text = ACS.distance(args.lat,args.lng,APP.coordinates.lat,APP.coordinates.lng); //APP.coordinates.lng,APP.coordinates.lat


$.content;


  
  var plateformwidth  = Ti.Platform.displayCaps.platformWidth; 
  var plateformheight = Ti.Platform.displayCaps.platformHeight;
  
  
  
if(OS_ANDROID) {
				
	//  $.content.children[0].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
	//  $.currentUserRow.children[1].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
	//  $.currentUserRow.children[2].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
	//  $.currentUserRow.children[3].width = (Ti.Platform.displayCaps.platformWidth/4);
	  
  }
 
  var mRowAnimateLeft	= Ti.UI.createAnimation({
	 right:plateformwidth,
	 left:-plateformwidth,
	 //curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	 duration: 1000
});

	
var mRowAnimateRight = Ti.UI.createAnimation({
	right: 0,
	left: 0,
	//curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration: 1000
});

var pRowAnimateLeft	= Ti.UI.createAnimation({
	left:0,
	right:0,
	//curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration: 1000
});

	
var pRowAnimateRight = Ti.UI.createAnimation({
	left:plateformwidth,
	right:-plateformwidth,
	//curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration: 1000
});
        	         ///////
   var aroundSwipeRow   = Alloy.createController('aroundSwipeRow',{appear:args.appear,image:args.image,state:args.state,appeared:args.appeared}).getView();
       aroundSwipeRow.left =    plateformwidth;
       aroundSwipeRow.top  =   -plateformheight/6;  
    $.content.add(aroundSwipeRow);
  
  
  var isToggled = false;
  
 $.content.addEventListener('swipe',function(e){
 	
 	if (!isToggled && e.direction ==='left'){
 		
		 	$.mRow.animate(mRowAnimateLeft);  
		    //$. mentionView.remove($.mRow);	
		    // $. mentionView.add(plusSignRow);
		    aroundSwipeRow.animate(pRowAnimateLeft);
		     isToggled = true;
    
  }else if (isToggled && e.direction === 'right'){
  	         $.mRow.animate(mRowAnimateRight);
		  /// $. mentionView.remove(plusSignRow);	
		    //$. mentionView.add($.mRow);
		  	 aroundSwipeRow.animate(pRowAnimateRight);
		     isToggled = false;
 	//plusSignRow.visible = false;
  }

  
 });
    
//$.mRow.