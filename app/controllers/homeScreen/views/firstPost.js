var APP = require('core');
var ACS = require('acs');
require('ti.viewshadow');

var args  = arguments[0]||{};

var nextWin = null;

$.thisWin.height = APP.deviceHeight *.3;
Ti.API.info("OS VERSION:  " + Ti.Platform.version);

function addShadow() {
	$.thisWin.removeEventListener('postlayout', addShadow);
  	$.thisWin.setShadow({
    	shadowRadius : 4,
    	shadowOpacity : .8,
    	shadowOffset : {
      		x : 2,
      		y : 20
    	},
    	shadowColor : "#000000"
  	});
}

$.thisWin.addEventListener('postlayout', addShadow);

var slideLeft = Ti.UI.createAnimation();
slideLeft.right = 320;
slideLeft.duration = 500;

slideLeft.addEventListener('complete', function(e){
	$.thisWin.close();
	//args.view.animate(APP.animHide, function(e){});
	
});

$.thisWin.addEventListener("close", function(e){
	
});

$.backBtn.addEventListener("click", function(e){
	// $.thisWin.fireEvent("cancel");
	// $.thisWin.animate(APP.animHide, function(e){
		// $.thisWin.hide();		
	// });
	$.thisWin.animate(slideLeft, function(e){
		args.view.animate(APP.animHide, function(e){
			args.menuBtn.enabled=true;
			args.postBtn.enabled=true;
		});
	});
	
});

$.nextBtn.addEventListener("click", function(e){
	Ti.API.info("tfName.value:  "+$.tfName.value);
	if($.tfName.value)
	{
		//COMMENTED FOR TESTING UI LOCALLY
		
		ACS.updateUser({username: $.tfName.value}, function(e){
			if(e.success){
				//$.thisWin.hide();
				$.thisWin.animate(slideLeft, function(e){});
				nextWin = Alloy.createController('homeScreen/views/postMsg',{view: args.view, postBtn: args.postBtn, menuBtn: args.menuBtn}).getView();
				// nextWin.addEventListener("close", function(e){
					// $.thisWin.close();
					// // //call acs function to save post and then enable the menu
				// });
				nextWin.open(APP.fadeIn);
				//args.view.animate(APP.animHide, function(e){});
			}
			else{
				Ti.API.info(JSON.parse(e));
			}
		});
		
		//FOR TESTING:
		//APP.user.uname = $.tfName.value;
		//END TESTING
		
		
		
	}
	else
	{
		alert("Please fill in a username");
	}
	
});
