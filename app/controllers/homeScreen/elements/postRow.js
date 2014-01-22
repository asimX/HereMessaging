var args = arguments[0] || {};

var ACS = require('acs');
var APP = require('core');
var moment = require('alloy/moment');
require('ti.viewshadow');

$.txtContainerView.setShadow({
	shadowRadius : 1.5,
    	shadowOpacity : .4,
    	shadowOffset : {
      		x : .5,
      		y : .5
    	},
    	shadowColor : "#000"//"#1b9bf8"
});

var dateString = moment(args.time);
var timeFromNow = moment(dateString).fromNow();
$.timeLbl.text = timeFromNow;

$.nameLbl.text = args.displayName;

if(args.pic){
	
	ACS.getPostPhoto({
		id: args.pic.id
		// where:{
			// filename: args.pic.id
		// }
	}, function(e){
		var imgView = Ti.UI.createImageView({
			image: e.photo,
			left: "10dp",
			right: "10dp",
			bottom: "10dp",
			height: Ti.UI.SIZE,	
			//width: "90%",
			//height: APP.deviceWidth*.8,
			top: "40dp",
			zIndex: 2,
			//backgroundColor: 'yellow'
		});
		$.txtContainerView.remove($.msgLbl);
		$.txtContainerView.add(imgView);
	});	
}
else{
	$.msgLbl.text=args.msgTxt;
}
// $.rowContainer.addEventListener("postlayout", function(e){
	// APP.internalHeight = $.rowContainer.getRect().height + APP.internalHeight;
// });
