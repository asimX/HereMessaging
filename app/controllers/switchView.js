
var Cloud = require('ti.cloud');
var APP = require('core');
var ACS = require('acs');

  var plateformwidth  = Ti.Platform.displayCaps.platformWidth; 
  var plateformheight = Ti.Platform.displayCaps.platformHeight;
 
    
   
 
 
 if(Ti.Platform.osname == 'android'){
      $.switchView.height = plateformheight/6;  
     // $.inSwitchView.height = plateformheight/6;
  }else{
  	  $.switchView.height = plateformheight/3;
  	  //$.inSwitchView.height = plateformheight/4;
  	}

$.alertSwitch.addEventListener('change',function(e){
	
	if ($.alertSwitch.value == false)
        {
        	
            APP.alerts.lacationAlert = false;
            Ti.API.info('location Alert:'+APP.alerts.lacationAlert);
            
        }
        else if ($.alertSwitch.value == true)
        {
        	APP.alerts.lacationAlert = true;
            Ti.API.info('location Alert:'+APP.alerts.lacationAlert);
            
        }
     
     //return;
});

$.mentionSwitch.addEventListener('change',function(){
	
	if ($.mentionSwitch.value == false)
        {
        	
            APP.alerts.mentionAlert = false;
            Ti.API.info('mention Alert:'+APP.alerts.mentionAlert);
            
        }
        else if ($.mentionSwitch.value == true)
        {
        	APP.alerts.mentionAlert = true;
            Ti.API.info('mention Alert:'+APP.alerts.mentionAlert);
            
        }
    

	
});

$.privateSwitch.addEventListener('change',function(){
	
	if ($.privateSwitch.value == false)
        {
        	
            APP.alerts.privateAlert = false;
            Ti.API.info('private Alert:'+APP.alerts.privateAlert);
            
        }
        else if ($.privateSwitch.value == true)
        {
        	APP.alerts.privateAlert = true;
            Ti.API.info('private Alert:'+APP.alerts.privateAlert);
            
        }
    
	
	
});










	
 $.logout.addEventListener('click',function(){
            
    ACS.logout();
	Ti.App.Properties.setString('sessionID', null);
	APP.user.sessionID = null;
	APP.MainWindow.open();
	if(!APP.LoginWindow){
		APP.LoginWindow = Alloy.createController('loginScreen').getView();
	}
	
	APP.LoginWindow.open();        	
  	
  });	