var APP = require('core');
var Cloud = require ('ti.cloud');
var ACS = require('acs');

// var plateformwidth  = Ti.Platform.displayCaps.platformWidth; 
// var plateformheight = Ti.Platform.displayCaps.platformHeight;

	var toUID = arguments[0].toUID || 'all';
	var type = arguments[0].type || 'public';
	
    
    $.statusUpdate.width  = APP.deviceWidth*.9;//(plateformwidth-plateformwidth/8);
    $.statusUpdate.height = APP.deviceHeight*.30;//(plateformheight-plateformheight/2);  
    $.statusUpdate.top = APP.deviceHeight*.2;
    //$.closePopUp.width = APP.deviceWidth*.9 - 10;
    
    
    var deviceHeightScale = APP.deviceHeightScale;
    var deviceWidthScale = APP.deviceWidthScale;

     if(OS_ANDROID){
	
	$.statusMsg.height = 85*APP.deviceHeightScale*.5;
	$.statusMsg.width  = 150*APP.deviceWidthScale;
	//$.statusMsg.top    = $.statusMsg.bottom = 0;//10*APP.deviceHeightScale;
	
	///$.unameTxt.backgroundColor='blue';
	$.statusMsg.font = {fontSize: "30dp"};
	
	//$.StatusUpdateContainer.height = 85*APP.deviceHeightScale*.5;	
	//$.StatusUpdateContainer.width = 150*APP.deviceWidthScale;	
	//$.loginContainer.left = 15*APP.deviceWidthScale;
	$.StatusUpdateBtn.width = 75*APP.deviceWidthScale;
	$.StatusUpdateBtn.top = 40*APP.deviceHeightScale;
	//$.loginBtn.left = 120*APP.deviceWidthScale;
	///$.registerBtn.width = 75*APP.deviceWidthScale;
	///$.registerBtn.top = 10*APP.deviceHeightScale;
	
	$.thisStatusContentView.height = 240*deviceHeightScale;
};

var t = Titanium.UI.create2DMatrix();
	t = t.scale(0);
 	$.statusUpdate.transform = t;
 	
 	
$.closePopUp.addEventListener('click', function()
	{
		var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		$.statusUpdate.close({transform:t3,duration:300});
	});
	
var fields = [$.statusMsg];

function submitForm () {
	
    // for (var i = 0; i < fields.length; i++) {
        // if (!fields[i].value.length) {
            // fields[i].focus();
            // return;
        // }
//         
        // fields[i].blur();
//         
    // }
    if(toUID == 'all' && type == 'public'){
 	
 	ACS.savePost({
 		content:$.statusMsg.value,
 		title: $.statusMsg.value,
 		//toUID: toUID,
 		//fromUID: APP.user.id,
 		lng: APP.coordinates.lng, 
 		lat: APP.coordinates.lat,
 		//type:type,
 	}, function(e){
 		var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		$.statusUpdate.close({transform:t3,duration:300});
		setTimeout(function(e) {
        //splash.close(fadeOut);
        //$.index.open();
        switch(type){
        	case 'public':
        	 Ti.App.fireEvent('refreshScreen');
        	break;
        	case'private':
        	 Ti.App.fireEvent('refreshPrivate');
        	 
        	break;
        	
        }
       
        }, 3000);
		
 	});
 	
 	}else{
 		
 	ACS.saveMention({
 		mentionTxt: $.statusMsg.value,
 		toUID: toUID,
 		fromUID: APP.user.id,
 		placeID:APP.user.placeID,
 		//lng: APP.coordinates.lng, 
 		//lat: APP.coordinates.lat,
 		type:type,
 	}, function(e){
 		var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		$.statusUpdate.close({transform:t3,duration:300});
		setTimeout(function(e) {
        //splash.close(fadeOut);
        //$.index.open();
        switch(type){
        	case 'public':
        	 Ti.App.fireEvent('refreshScreen');
        	break;
        	case'private':
        	 Ti.App.fireEvent('refreshPrivate');
        	 
        	break;
        	
        }
       
        }, 3000);
		
 	});	
 		
 		
 		
 	}
 	
 	
}
	    
	$.StatusUpdateBtn.addEventListener("click",submitForm);
	Ti.API.info("app session id: "+APP.user.sessionID);
	for (var i = 0; i < fields.length; i++) {
      
      fields[i].addEventListener('return', submitForm);
   }
   
   $.statusUpdate.addEventListener("open", function(e){
   		APP.msgWindowOpen=true;
   		$.statusMsg.focus();
   });
   
   $.statusUpdate.addEventListener("close", function(e){
   		APP.msgWindowOpen=false;
   })
   $.statusMsg.addEventListener("change", function(e){
   		var numOfCharsLeft = 162 - $.statusMsg.value.length;
   		$.chars.text = numOfCharsLeft;
   })
