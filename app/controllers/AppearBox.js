var APP = require('core');
var Cloud = require ('ti.cloud');
var ACS = require('acs');


	var args = arguments[0];
	Ti.API.info("latitude: "+ APP.coordinates.lat);
	Ti.API.info("longitude: "+ APP.coordinates.lng);
	ACS.getPlace(APP.coordinates.lng,
		APP.coordinates.lat,
		function(e){
			  
	Ti.API.info("data returned to CALLBACK:  " + JSON.stringify(e));
	for (var i = 0, l = e.places.length; i < l; i++) {
		        
		       //  alert(e.places[i].name);
                var lab = Ti.UI.createLabel({
                 	id:e.places[i].id,
                 	text:e.places[i].name,
                 	font: {fontFamily: 'GillSans-Light', fontSize: "30dp"},
	                top:"3dp",
	//right: "5dp",
	                color: "#535353",
	                ///text: "160" 
                 	
                 });       
                        
            // }
              
              $.thisStatusContentView.add(lab);
              
      lab.addEventListener('click', function(e){
		//e.source.id
		ACS.Checkin(e.source.id,{appear:args.appear,location:args.location}, function(e){
			Ti.App.fireEvent('refreshScreen');
		});
		APP.user.placeID = e.source.id;
		Ti.App.Properties.setString('placeID', e.source.id);
		var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		$.AppearBox.close({transform:t3,duration:300});
		//alert("Street :"+e.source.text);
	});
              
            } // loop
              
              
    });
    
	
    $.AppearBox.width  = APP.deviceWidth*.9;//(plateformwidth-plateformwidth/8);
    $.AppearBox.height = APP.deviceHeight*.70;//(plateformheight-plateformheight/2);  
    $.AppearBox.top = APP.deviceHeight*.1;
    //$.closePopUp.width = APP.deviceWidth*.9 - 10;
    
    
    var deviceHeightScale = APP.deviceHeightScale;
    var deviceWidthScale = APP.deviceWidthScale;

     if(OS_ANDROID){
     $.AppearBox.width  = APP.deviceWidth*.9;//(plateformwidth-plateformwidth/8);
    $.AppearBox.height = APP.deviceHeight*.30;//(plateformheight-plateformheight/2);  
    $.AppearBox.top = APP.deviceHeight*.2;	
     	
    $.closePopUp.width = 75*APP.deviceWidthScale;
	$.closePopUp.top = 40*APP.deviceHeightScale;
	
	//$.statusMsg.height = 85*APP.deviceHeightScale*.5;
	//$.statusMsg.width  = 150*APP.deviceWidthScale;
	//$.statusMsg.top    = $.statusMsg.bottom = 0;//10*APP.deviceHeightScale;
	
	///$.unameTxt.backgroundColor='blue';
//	$.statusMsg.font = {fontSize: "30dp"};
	
	//$.StatusUpdateContainer.height = 85*APP.deviceHeightScale*.5;	
	///$.StatusUpdateContainer.width = 150*APP.deviceWidthScale;	
	//$.loginContainer.left = 15*APP.deviceWidthScale;
	//$.StatusUpdateBtn.width = 75*APP.deviceWidthScale;
	//$.StatusUpdateBtn.top = 40*APP.deviceHeightScale;
	//$.loginBtn.left = 120*APP.deviceWidthScale;
	///$.registerBtn.width = 75*APP.deviceWidthScale;
	///$.registerBtn.top = 10*APP.deviceHeightScale;
	
	//$.thisStatusContentView.height = 240*deviceHeightScale;
};

var t = Titanium.UI.create2DMatrix();
	t = t.scale(0);
 	$.AppearBox.transform = t;
 	
 	
$.closePopUp.addEventListener('click', function()
	{
		var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		$.AppearBox.close({transform:t3,duration:300});
		
	});
	
	


/*
$.addr2.addEventListener('click', function(e)
	{
		var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		$.AppearBox.close({transform:t3,duration:300});
		//alert("City :"+e.source.text);
	});
	
	*/
	
	
/*	
var fields = [$.statusMsg];

function submitForm () {
	

 	
 	ACS.saveMention({
 		mentionTxt: $.statusMsg.value,
 		toUID: toUID,
 		fromUID: APP.user.id,
 		lng: APP.coordinates.lng, 
 		lat: APP.coordinates.lat
 	}, function(e){
 		var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		$.statusUpdate.close({transform:t3,duration:300});
 	});
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
   		var numOfCharsLeft = 160 - $.statusMsg.value.length;
   		$.chars.text = numOfCharsLeft;
   })
*/