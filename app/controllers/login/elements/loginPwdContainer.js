var APP = require("core");
var ACS = require("acs");
var animation = require('alloy/animation');

var args = arguments[0] ||{};
var loginBtn = null;
var signUpBtn = null;

//$.viewContainer.height= APP.deviceHeight*.75;
//$.loginFooter.height = APP.deviceHeight*.15;
//$.loginPtr.height = APP.deviceHeight*.38;
$.tfLine3.width = .7*APP.deviceWidth;


if(args.exists){
	loginBtn = Ti.UI.createButton({
    	//backgroundColor: "#202020",
        borderWidth:0,
        title: "Sign In",
		font:{
			fontSize: "30dp",
			fontFamily: 'GillSans-Light'
		},
		color: "#blue",
       	height: "40dp",
        width: "120dp",
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
        top: "20dp"
	});
    
	loginBtn.addEventListener("click",function(e){
		ACS.login({
			uname: args.uname,
			pwd: $.pwdTxt.value
		},function(e){
			//ACS.getCheckin(APP.user.id);
			//ACS.getProfilePic(APP.user.id);
			//ACS.getCheckin(e);
			animation.fadeOut(APP.LoginWindow, 800, function(){
				$.viewContainer=null;	
				APP.LoginWindow.close();
				APP.LoginWindow = null;   
				Alloy.createController('homeScreen/views/home').getView();
				// APP.MainWindow.open();
				// APP.Navigation.open(APP.Tabs, APP.TabBar, APP.TabView, {height: APP.deviceHeight, width: APP.deviceWidth});
			});		
		});
	});
    
    $.pwdTxt.hintText="Password";
    
    //$.loginFooter.backgroundColor="#202020";
    //$.loginFooter.backgroundColor="blue";
    $.viewContainer.add(loginBtn);
}
else{
	//$.loginFooter.layout="horizontal";
	var signUpLbl = Ti.UI.createLabel({
		width: APP.deviceWidth*.70,
		text: "By signing up, you agree to the terms & services of HERE.",
		wordWrap: true,
		font: {
			fontSize: "14dp"
		},
		//height: "60dp",
		color: "#535353",
		//left: "10dp",
		verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		height: Ti.UI.SIZE,
		bottom: '20dp'
	});
	registerBtn=Ti.UI.createButton({
		//backgroundColor: "#000",
		title: "Sign Up",
		font:{
			//fontColor: "#e28302",
			fontSize: "30dp",
			fontFamily: 'GillSans-Light'
		},
		color: "blue",
		height: "40dp",
		width: APP.deviceWidth * .30,
		//left: "15dp",
		//right: "10dp",
		style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
		top: '20dp'
	});
	
	registerBtn.addEventListener("click", function(e){
		ACS.registerUser({
      		username:args.uname,
      	    pwd:$.pwdTxt.value
      	}, function(){           	
      		animation.fadeOut(APP.LoginWindow, 800);
      		$.viewContainer=null;
      		APP.LoginWindow.close();
	        APP.LoginWindow = null;
	        Alloy.createController('homeScreen/views/home').getView();   
	        //APP.MainWindow.open();
	        //APP.Navigation.open(APP.Tabs, APP.TabBar, APP.TabView, {height: APP.deviceHeight, width: APP.deviceWidth});           	
      	});
	});
	
	$.viewContainer.add(registerBtn);
	$.loginFooter.add(signUpLbl);
	
}
