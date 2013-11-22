var APP = require('core')
var Cloud = require('ti.cloud');
var loginWin = null;
var hereWin = null; 

var deviceHeightScale = APP.deviceHeightScale;
var deviceWidthScale = APP.deviceWidthScale;


 if(Ti.Platform.osname=='android'){
	
	$.registerUnameTxt.height = 85*APP.deviceHeightScale*.5;
	$.registerUnameTxt.width = 150*APP.deviceWidthScale;
	$.registerUnameTxt.top = $.registerUnameTxt.bottom = 0;//10*APP.deviceHeightScale;
	///$.unameTxt.backgroundColor='blue';
	$.registerUnameTxt.font = {fontSize: "30dp"};
	
	
	$.registerPwdTxt.height = 85*APP.deviceHeightScale*.5;
	$.registerPwdTxt.top = $.registerPwdTxt.bottom = 0;//10*APP.deviceHeightScale;
	$.registerPwdTxt.width =  150*APP.deviceWidthScale;;
	$.registerPwdTxt.font = {fontSize: "30dp"};
	
	$.registerConformPwdTxt.height = 85*APP.deviceHeightScale*.5;
	$.registerConformPwdTxt.top = $.registerConformPwdTxt.bottom = 0;//10*APP.deviceHeightScale;
	$.registerConformPwdTxt.width =  150*APP.deviceWidthScale;;
	$.registerConformPwdTxt.font = {fontSize: "30dp"};
	
	$.registerFnameTxt.height = 85*APP.deviceHeightScale*.5;
	$.registerFnameTxt.top = $.registerFnameTxt.bottom = 0;//10*APP.deviceHeightScale;
	$.registerFnameTxt.width =  150*APP.deviceWidthScale;;
	$.registerFnameTxt.font = {fontSize: "30dp"};

    $.registerLnameTxt.height = 85*APP.deviceHeightScale*.5;
	$.registerLnameTxt.top = $.registerLnameTxt.bottom = 0;//10*APP.deviceHeightScale;
	$.registerLnameTxt.width =  150*APP.deviceWidthScale;;
	$.registerLnameTxt.font = {fontSize: "30dp"};

	
	$.registerContainer.height = 212*APP.deviceHeightScale;	
	$.registerContainer.width = 150*APP.deviceWidthScale;
	
		
	//$.loginContainer.left = 15*APP.deviceWidthScale;
	$.registerSubmitBtn.width = 75*APP.deviceWidthScale;
	$.registerSubmitBtn.top = 40*APP.deviceHeightScale;
	
	
	//$.loginBtn.left = 120*APP.deviceWidthScale;
	///$.registerBtn.width = 75*APP.deviceWidthScale;
	///$.registerBtn.top = 10*APP.deviceHeightScale;
	
	$.registerContentView.height = 340*deviceHeightScale;
};

/// create user by ACS

 var fields = [ $.registerUnameTxt,$.registerPwdTxt,$.registerConformPwdTxt,$.registerFnameTxt,$.registerLnameTxt ];

    function submitForm() {
        for (var i = 0; i < fields.length; i++) {
            if (!fields[i].value.length) {
                fields[i].focus();
                return;
            }
            fields[i].blur();
        }
        if ($.registerPwdTxt.value != $.registerConformPwdTxt.value) {
            alert('Passwords do not match!');
           $.registerConformPwdTxt.focus();
            return;
        }
      //  $.registerSubmitBtn.hide();

        Cloud.Users.create({
            username:$.registerUnameTxt.value,
            email:$.registerUnameTxt.value,
            password:$.registerPwdTxt.value,
            password_confirmation:$.registerConformPwdTxt.value,
            first_name:$.registerFnameTxt.value,
            last_name:$.registerLnameTxt.value,
            
        }, function (e) {
            if (e.success) {
            	
                var user = e.users[0];
                alert('Created! You are now logged in as ' + user.id);
                
                Alloy.Globals.userid = user.id;
                
                $.registerUnameTxt.value = $.registerPwdTxt.value = $.registerConformPwdTxt.value = $.registerFnameTxt.value = $.registerLnameTxt.value = '';
               
              /* ************************************************* */
                hereWin = Alloy.createController('home',{uid:user.id,uname:user.first_name}).getView();
                hereWin.open();
              /* ********************************************** */
                
            }
            else {
                //error(e);
                alert('Error:\\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
            }
          /// $.registerSubmitBtn.show();
        });
    }

   $.registerSubmitBtn.addEventListener('click',submitForm);
    for (var i = 0; i < fields.length; i++) {
        fields[i].addEventListener('return', submitForm);
    }





/// ACS ends




//$.registerSubmitBtn.addEventListener('click',function(){
	
	
	
	
	
	
  //   });

//function submit(){
	
	
	///  $.registerWin.close();
	  ///loginWin = Alloy.createController('index').getView();	
      ///loginWin.open();
      
    
///};



///$.registerWin.open();

