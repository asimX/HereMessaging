var APP = require('core');
var ACS = require('acs');
var writeMention = null;
var AppearBox = null; 
var UserName = APP.user.uname;

// if(OS_ANDROID) {
// 				
	  // $.currentUserRow.children[0].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
	  // $.currentUserRow.children[1].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
	  // $.currentUserRow.children[2].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
	  // $.currentUserRow.children[3].width = (Ti.Platform.displayCaps.platformWidth/4);
// 	  
  // }
  
var args = arguments[0] || {};

ACS.getProfilePic(APP.user.id,function(photos){
   	if(photos){
   		Ti.API.info("current user = "+JSON.stringify(photos));
   		$.pic.image = photos.urls.small_240;		
   		//alert($.pic.image);
	}
});
//$.totalMention.text = args.mentions || '0';
var totalMentions = null;
ACS.currentUserMention('mentions',APP.user.id,totalMentions);
var params = {
	mentions: totalMentions,
	type: "userRow"
};
var innerRow = Alloy.createController("rowContent",params).getView();
$.currentUserRow.add(innerRow);
//$.appears.text = APP.user.timeAppeared || 'N/A';
//$.location.text =  APP.user.placeName ||'N/A';
 //ACS.getCheckin(APP.user.id);
//ACS.getCheckin(APP.user.id,{appear:$.appears,location:$.location});
//$.userName.text = UserName;//args.username ||'unknown';

 function TotalMentions(){
 };

var t1 = Titanium.UI.create2DMatrix();
	t1 = t1.scale(1.1);
	
/*
var a = Titanium.UI.createAnimation();
	a.transform = t1;
	a.duration = 200;
	
	// when this animation completes, scale to normal size
	a.addEventListener('complete', function()
	{
		Titanium.API.info('here in complete');
		var t2 = Titanium.UI.create2DMatrix();
		    t2 = t2.scale(1.0);
		   writeMention.animate({transform:t2, duration:200});

	});


$.pic.addEventListener('click',function(e){
	//if(e.direction == 'down')
 if(UserName =='You'){
   writeMention = Alloy.createController('firstName').getView();
 }else{
   writeMention   = Alloy.createController('writeMention',{toUID: 'all'}).getView();	
 }
 if(OS_ANDROID){
        writeMention.open({modal:true});}else{
        writeMention.open(a);
        }		
});
*/	
var b = Titanium.UI.createAnimation();
	b.transform = t1;
	b.duration  = 200;
	
	// when this animation completes, scale to normal size
	b.addEventListener('complete', function()
	{
		Titanium.API.info('here in complete');
		var t2 = Titanium.UI.create2DMatrix();
		    t2 = t2.scale(1.0);
		   AppearBox.animate({transform:t2, duration:200});

	});



// $.appearBoxRow.addEventListener('click',function(){
// //ACS.getPlace(function(via){
       // AppearBox = Alloy.createController('AppearBox',{appear:$.appears,location:$.location}).getView();
// 	
 // if(OS_ANDROID){
        // AppearBox.open({modal:true});}else{
        // AppearBox.open(b);
        // }	
	
	
	
//});
		
		//alert(e.places[0].street);
      // $.addr1.text = e.places[0].street;
      // $.addr2.text = e.places[0].city;
    
       
	
//});
//});
// $.refreshBtn.addEventListener('click',function(){
	// Ti.App.fireEvent('refreshScreen');
	// });

/*
 function ottieniVia (latitude,longitude,_cb){
 	  //var places = [];
    
    Titanium.Geolocation.reverseGeocoder(latitude,longitude,function(evt)
        {
               //address = JSON.stringify(evt);
            Ti.API.info("reverse geolocation result = "+JSON.stringify(evt));
            
            _cb(evt);
        
   });
 
    //return places; 
 
  };*/
