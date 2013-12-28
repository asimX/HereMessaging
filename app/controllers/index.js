var APP = require('core');
APP.init();
var LBS = require('location');
LBS.init();
var ACS = require('acs');
ACS.init();
var animation = require('alloy/animation');
var TiSideMenu = require('de.marcelpociot.sidemenu');

	//COMMENTED FOR TESTING UI LOCALLY
	if(APP.user.sessionID){
		
		$.MainWindow = Alloy.createController('homeScreen/views/home').getView();
	
	
	//COMMENTED FOR TESTING UI LOCALLY
		
	}
	else {
		APP.LoginWindow = Alloy.createController('login/loginScreen').getView();
		APP.LoginWindow.open();
		animation.fadeIn(APP.LoginWindow, 800); 
	}

