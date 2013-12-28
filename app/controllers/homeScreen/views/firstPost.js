var APP = require('core');
var ACS = require('acs');

var args  = arguments[0]||{};

var nextWin = null;

$.thisWin.height = APP.deviceHeight *.3;
Ti.API.info("OS VERSION:  " + Ti.Platform.version);

// if(OS_IOS){
	// if(parseFloat(Ti.Platform.version)>=7.0){
		// $.thisWin.top="80dp";
	// }
// }

$.backBtn.addEventListener("click", function(e){
	$.thisWin.fireEvent("cancel");
	$.thisWin.close();
	args.view.animate(APP.animHide, function(e){});
});

$.nextBtn.addEventListener("click", function(e){
	Ti.API.info("tfName.value:  "+$.tfName.value);
	if($.tfName.value)
	{
		//COMMENTED FOR TESTING UI LOCALLY
		
		ACS.updateUser({username: $.tfName.value}, function(e){
			if(e.success){
				$.thisWin.close();
				args.view.animate(APP.animHide, function(e){});
			}
			else{
				Ti.API.info(JSON.parse(e));
			}
		});
		
		//FOR TESTING:
		//APP.user.uname = $.tfName.value;
		//END TESTING
		
		$.thisWin.hide();
		nextWin = Alloy.createController('homeScreen/views/postMsg').getView();
		nextWin.addEventListener("close", function(e){
			$.thisWin.close();
			
			//call acs function to save post and then enable the menu and post btn
		});
		nextWin.open();
		
	}
	else
	{
		alert("Please fill in a username");
	}
	
});
