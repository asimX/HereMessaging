var args = arguments[0] || {};

var ACS = require('acs');
var APP = require('core');
var moment = require('alloy/moment');
require('ti.viewshadow');

$.msgLbl.text = args.msgTxt;

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

$.rowContainer.addEventListener("postlayout", function(e){
	APP.internalHeight = $.rowContainer.getRect().height + APP.internalHeight;
});
