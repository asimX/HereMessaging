var APP = require("core");
var ACS = require("acs");

var args = arguments[0] || {};
$.iconContainer.width = APP.deviceWidth *.20;
$.rowCenterView.width = APP.deviceWidth *.60;
$.rowRightView.width = APP.deviceWidth *.20;
$.innerView.width = APP.deviceWidth * .20;
$.placeLbl.text=args.name;
$.distanceLbl.text=args.distance;
$.numOfAppearances.text=args.appearances;
//$.placeLblContainer.width=Ti.UI.SIZE;

var left=true;
//$.placeLbl.left="100dp";
//var leftStart = APP.deviceWidth * .55;

var animation = Titanium.UI.createAnimation({
    left:0,
    duration:5000,
    curve: Titanium.UI.ANIMATION_CURVE_LINEAR
});

var animationHandler = function() {
  if(left){
    $.placeLbl.left = 0;
    left = false;
  }else{
    animation.left = 0;
    left = true;
  }
 
  $.placeLbl.animate(animation);
};

$.aroundtvRow.addEventListener('click', function(e){
	ACS.Checkin(args.placeID,{},function(e)
	{
		if(e.success){
			$.aroundIcon.image = "/images/aroundScreen/tabbar-around-active.png";
			$.distanceLbl.text="H";
			$.distanceLbl.color="#ff8e00";
			alert('Now appearing in !'+APP.user.checkin.placeName);
		}
		else{
			alert('Error occured in appearing. Error code: ' + e.code + '. Message: ' + e.message);
		}
		
	});
	
});
// animation.addEventListener('complete',animationHandler);
 // if(args.name.length>18)
 // {
 	// $.placeLbl.left="100dp";
 	// $.placeLbl.animate(animation);
 // }

// $.appears.text   = args.appear || 'N/A';
// $.dot.image     = args.image;
// $.appeared.text = args.appeared;
// $.entity.text   = args.state;
