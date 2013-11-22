var APP = require('core');
var ACS = require('acs');

var args = arguments[0] || {};

var contentType = args.type;

if(contentType==="userRow"){
	
	// var welcome = Ti.UI.createLabel({
		// font:{
    		// fontSize:"12dp",
    		// fontWeight: "normal"
    	// },
    	// //color:"#797979",
    	// text:"Welcome ",
    	// left:"10dp",
    	// //top: "0dp",
    	// textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	// });
	// welcome.text = "Welcome ";
	// welcome.left = "5dp";
	// welcome.top = "2dp";

	var poster = Ti.UI.createLabel({
		font:{
			fontFamily: 'GillSans-Light',
			fontWeight: "bold",
			fontSize:"20dp"
		},
	    color:"#494949",
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	    text: APP.user.uname,
	    top: "2dp"
	});
	
	var tipLabel = Ti.UI.createLabel({
			font:{
    			fontSize:"12dp",
    			fontWeight: "normal"
    		},
    		//text: e.tipsText,
    		wordWrap: true,
    		left: "10dp",
    		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	ACS.getTips(function(e){
		tipLabel.text = e.tipsText;
	})
	
	//$.headerInnerRow.add(welcome);
	$.headerInnerRow.add(poster);
	
	$.bodyInnerRow.add(tipLabel);
}
