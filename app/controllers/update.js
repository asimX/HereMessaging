var Cloud = require('ti.cloud');
//var Cloud = require('ti.cloud');
var APP = require('core');
var ACS = require('acs');


    
    $.statusUpdate.width  = APP.deviceWidth*.9;//(plateformwidth-plateformwidth/8);
    $.statusUpdate.height = APP.deviceHeight*.30;//(plateformheight-plateformheight/2);  
    $.statusUpdate.top = APP.deviceHeight*.2;
    //$.closePopUp.width = APP.deviceWidth*.9 - 10;
    
    
    var deviceHeightScale = APP.deviceHeightScale;
    var deviceWidthScale = APP.deviceWidthScale;

     if(OS_ANDROID){
	
	$.upass.height = 85*APP.deviceHeightScale*.5;
	$.upass.width  = 150*APP.deviceWidthScale;
	
	//$.statusMsg.top    = $.statusMsg.bottom = 0;//10*APP.deviceHeightScale;
	
	///$.unameTxt.backgroundColor='blue';
	//$.upass.font = {fontSize: "30dp"};
	
	
	$.upass.font = {fontSize: "30dp"};
	$.c_pwdTxt.height = 85*APP.deviceHeightScale*.5;
    $.c_pwdTxt.top = $.c_pwdTxt.bottom = 0;//10*APP.deviceHeightScale;
    $.c_pwdTxt.width =  150*APP.deviceWidthScale;;
    $.c_pwdTxt.font = {fontSize: "30dp"};
	
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
	
var fields = [$.upass,$.c_pwdTxt];

    function submitForm() {
    	
        for (var i = 0; i < fields.length; i++) {
            if (!fields[i].value.length) {
                 fields[i].focus();
                 return;
            }
            fields[i].blur();
        }

	 Cloud.Users.update({
       //     username: username.value,
       //     email: email.value,
            password: $.upass.value,
            password_confirmation: $.c_pwdTxt.value,
       	}, function (e) {
	    if (e.success) {
	    var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		$.statusUpdate.close({transform:t3,duration:300});
	     //});
	        alert('Update Success');
	           
	    } else {
	    	
	        alert('Error:\\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	    });
	    
	   }
	    
	    
	$.StatusUpdateBtn.addEventListener("click",submitForm);
	for (var i = 0; i < fields.length; i++) {
        fields[i].addEventListener('return', submitForm);
    }

	







// 
// var plateformwidth  = Ti.Platform.displayCaps.platformWidth; 
// var plateformheight = Ti.Platform.displayCaps.platformHeight;
//     
    // $.statusUpdate.width  = (plateformwidth-plateformwidth/8);
    // $.statusUpdate.height = (plateformheight-plateformheight/2);
//     
//         
// var deviceHeightScale = APP.deviceHeightScale;
// var deviceWidthScale = APP.deviceWidthScale;
// 
//   
     // if(Ti.Platform.osname=='android'){
// 	
	// $.upass.height = 85*APP.deviceHeightScale*.5;
	// $.upass.width = 150*APP.deviceWidthScale;
	// $.upass.top = $.upass.bottom = 0;//10*APP.deviceHeightScale;
// 	
	// ///$.unameTxt.backgroundColor='blue';
	// $.upass.font = {fontSize: "30dp"};
	// $.c_pwdTxt.height = 85*APP.deviceHeightScale*.5;
	// $.c_pwdTxt.top = $.c_pwdTxt.bottom = 0;//10*APP.deviceHeightScale;
	// $.c_pwdTxt.width =  150*APP.deviceWidthScale;;
	// $.c_pwdTxt.font = {fontSize: "30dp"};
// 	
	// $.updateContainer.height = 85*APP.deviceHeightScale;	
	// $.updateContainer.width = 150*APP.deviceWidthScale;	
// 	
	// //$.loginContainer.left = 15*APP.deviceWidthScale;
// 	
	// $.updateBtn.width = 75*APP.deviceWidthScale;
	// $.updateBtn.top   = 40*APP.deviceHeightScale;
// 	
	// //$.loginBtn.left = 120*APP.deviceWidthScale;
	// ///$.registerBtn.width = 75*APP.deviceWidthScale;
	// ///$.registerBtn.top = 10*APP.deviceHeightScale;
// 	
	// $.thisUpdateContentView.height = 240*deviceHeightScale;
//    
   // };
//    
// var t = Titanium.UI.create2DMatrix();
	// t = t.scale(0);
 	// $.update.transform = t;
//  	
//  	
// $.closePopUp.addEventListener('click', function()
	// {
		// var t3 = Titanium.UI.create2DMatrix();
		    // t3 = t3.scale(0);
		// $.update.close({transform:t3,duration:300});
	// });
// 	
 // var fields = [$.upass,$.c_pwdTxt];
// 
    // function submitForm() {
//     	
        // for (var i = 0; i < fields.length; i++) {
            // if (!fields[i].value.length) {
                 // fields[i].focus();
                 // return;
            // }
            // fields[i].blur();
        // }
// 
	 // Cloud.Users.update({
       // //     username: username.value,
       // //     email: email.value,
            // password: $.upass.value,
            // password_confirmation: $.c_pwdTxt.value,
       	// }, function (e) {
	    // if (e.success) {
// 	        
	        // alert('Update Success');
// 	           
	    // } else {
// 	    	
	        // alert('Error:\\n' +
	            // ((e.error && e.message) || JSON.stringify(e)));
	    // }
	    // });
// 	    
	   // }
// 	    
// 	    
	// $.updateBtn.addEventListener("click",submitForm);
	// for (var i = 0; i < fields.length; i++) {
        // fields[i].addEventListener('return', submitForm);
    // }
// 
// 	
	

	
