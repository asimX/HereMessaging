var APP = require('core');
var ACS = require('acs');
var Cloud = require('ti.cloud');

var  hereWin = null;
var deviceHeightScale = APP.deviceHeightScale;
var deviceWidthScale = APP.deviceWidthScale;

//var loginBtn = null;
var pwdContainer = null;

var animation = require('alloy/animation');

// if(OS_ANDROID){
// 	
	// $.unameTxt.height = 85*APP.deviceHeightScale*.5;
	// $.unameTxt.width = 150*APP.deviceWidthScale;
	// $.unameTxt.top = $.unameTxt.bottom = 0;//10*APP.deviceHeightScale;
// 	
	// ///$.unameTxt.backgroundColor='blue';
	// $.unameTxt.font = {fontSize: "30dp"};
	// $.pwdTxt.height = 85*APP.deviceHeightScale*.5;
	// $.pwdTxt.top = $.pwdTxt.bottom = 0;//10*APP.deviceHeightScale;
	// $.pwdTxt.width =  150*APP.deviceWidthScale;;
	// $.pwdTxt.font = {fontSize: "30dp"};
	// $.loginContainer.height = 85*APP.deviceHeightScale;	
	// $.loginContainer.width = 150*APP.deviceWidthScale;	
	// //$.loginContainer.left = 15*APP.deviceWidthScale;
	// $.loginBtn.width = 75*APP.deviceWidthScale;
	// $.loginBtn.top = 40*APP.deviceHeightScale;
	// //$.loginBtn.left = 120*APP.deviceWidthScale;
	// ///$.registerBtn.width = 75*APP.deviceWidthScale;
	// ///$.registerBtn.top = 10*APP.deviceHeightScale;
// 	
	// $.thisContentView.height = 340*deviceHeightScale;
// 	
	// $.signUp.left = 160*APP.deviceWidthScale;
	// for(var i=0; i<$.loginTabGroup.getChildren().length;i++){
		// //thisWin.remove(thisWin.children[i]);
		// $.loginTabGroup.children[i].top = $.loginTabGroup.height/3;
	// }
// };

//$.loginTabGroup.bottom = (OS_ANDROID)? -100 : -70;

$.loginHeader.height = APP.deviceHeight*.25;
//$.loginFooter.height = APP.deviceHeight*.12;
//$.loginPtr.height = APP.deviceHeight*.38;

$.tfLine1.width = $.tfLine2.width = .8*APP.deviceWidth;

//Attach some simple on/off actions
// $.checkBox.on = function() {
    // this.backgroundColor = '#007690';
    // this.title='\u2713';
    // this.value = true;
// };
//  
// $.checkBox.off = function() {
    // this.backgroundColor = '#aaa';
    // this.title='';
    // this.value = false;
// };
//  
// $.checkBox.addEventListener('click', function(e) {
//     
    // if(false == e.source.value) {
        // e.source.on();
       // // APP.checkBox = true;
    // } else {
        // e.source.off();
       // // APP.checkBox = false;
    // }
// });

// APP.unameTxt=$.unameTxt;
// APP.pwdTxt=$.pwdTxt;
//var fields = [$.unameTxt,$.pwdTxt];
//$.pwdTxt.enabled = false;
$.unameTxt.addEventListener('focus',function(e){
	 if(pwdContainer){
	 	animation.fadeAndRemove(pwdContainer, 800, $.parentContainer, function(e){
	 		//$.parentContainer.remove(pwdContainer);
	 		pwdContainer=null;
	 	});
	 }
	 //$.loginBtn.show();
	 //$.loginTabGroup.bottom = (OS_ANDROID)? -100 : -70;
});

$.unameTxt.addEventListener('blur',function(e){
	ACS.alreadyExit({
		search:$.unameTxt,
		//pwdTxt:$.pwdTxt,
		//loginBtn:$.loginBtn,
		//loginTabGroup:$.loginTabGroup 
	}, function(e){
		pwdContainer = Alloy.createController("login/loginPwdContainer",{exists: e.exists,uname: $.unameTxt.value}).getView();
		$.parentContainer.add(pwdContainer);
		animation.fadeIn(pwdContainer,800);
	});
}); //$.unameTxt.addEventListener('blur',function(e){
	
// $.signUp.addEventListener('click',function(){
// 	
	 // for (var i = 0; i < fields.length; i++) {
        // if (!fields[i].value.length) {
            // fields[i].focus();
            // return;
        // }
        // fields[i].blur();
    // }
// 	
// //APP.checkBox	
// if($.checkBox.value == true){
//    
      // ACS.registerUser({
      	           // username:$.unameTxt,
      	           // pass:$.pwdTxt
      	           // },function(){
//       	           	
      	           	// APP.LoginWindow.close();
	                // APP.LoginWindow = null;   
	                // APP.MainWindow.open();
	                // APP.Navigation.open(APP.Tabs, APP.TabBar, APP.TabView, {height: APP.deviceHeight, width: APP.deviceWidth});
//       	           	
      	           // });
//    
  // }else{
// 	
	// alert("please accept terms and conditions");
// 	
  // }
// 	
// 	
// });	 // sign up button click
// 
// 
// 
// var fields = [$.unameTxt,$.pwdTxt];
// 
// function submitForm() {
    // for (var i = 0; i < fields.length; i++) {
        // if (!fields[i].value.length) {
            // fields[i].focus();
            // return;
        // }
        // fields[i].blur();
    // }
	// Ti.API.info('USERNAME:  '+ $.unameTxt.value);
	// Ti.API.info('PASSWORD:  '+ $.pwdTxt.value);
// 	
	// ACS.login({
		// uname: $.unameTxt.value,
		// pwd: $.pwdTxt.value
	// },function(e){
// 			
	// ACS.getCheckin(APP.user.id);
	// ACS.getProfilePic(APP.user.id);
	// //ACS.getCheckin(e);	
	// APP.LoginWindow.close();
	// APP.LoginWindow = null;   
	// APP.MainWindow.open();
	// APP.Navigation.open(APP.Tabs, APP.TabBar, APP.TabView, {height: APP.deviceHeight, width: APP.deviceWidth});
// 		
	// });
// 	
// 	
// }
// 	    
// 	    
// $.loginBtn.addEventListener("click",submitForm);
	
	 
	




