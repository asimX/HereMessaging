

 var APP = require('core');
  var Cloud = require ('ti.cloud');
  var ACS = require('acs');
  var	privateOrMention = null;
  var plateformwidth  = Ti.Platform.displayCaps.platformWidth; 
  var plateformheight = Ti.Platform.displayCaps.platformHeight;
 
    
   var args        = arguments[0];
   var id = args.id;  
   
   if(args.type == 'private'){
   	$.privateIcon.image ='/images/privatesSelectedIcon.png';
   	$.mention.image = '/images/mentionsIcon.png';
   	
   }else{
   	$.privateIcon.image = "/images/privatesIcon.png";
   	$.mention.image = "/images/mentios2SelectedIcon.png";
   	
   }
 
 
 
 
 var t1 = Titanium.UI.create2DMatrix();
     t1 = t1.scale(1.1);
     
var a = Titanium.UI.createAnimation();
    a.transform = t1;
    a.duration = 200;

// when this animation completes, scale to normal size
a.addEventListener('complete', function(){
	Titanium.API.info('here in complete');
	var t2 = Titanium.UI.create2DMatrix();
	t2 = t2.scale(1.0);
	privateOrMention.animate({transform:t2, duration:200});
});
 

$.mention.addEventListener('click',function(e){
	if(!APP.msgWindowOpen && id != null){
		if(APP.user.uname =='You'){
       privateOrMention = Alloy.createController('firstName').getView();
        }else{
 
		privateOrMention = Alloy.createController('MsgWindow',{toUID:id,type:'public'}).getView();
		}
	    //Ti.App.Properties.setBool('loggedIn', false);
	    //updateWin.visible = false;
	    if(OS_ANDROID){
	    	privateOrMention.open({modal:true});}else{
	        privateOrMention.open(a);
	    }
	}
	
 });
 
 $.privateIcon.addEventListener('click',function(e){
 	
	if(!APP.msgWindowOpen && id != null){
		if(APP.user.uname =='You'){
       privateOrMention = Alloy.createController('firstName').getView();
        }else{	
       privateOrMention = Alloy.createController('MsgWindow',{toUID:id,type:'private'}).getView();
		}
	    //Ti.App.Properties.setBool('loggedIn', false);
	    //updateWin.visible = false;
	    if(OS_ANDROID){
	    	privateOrMention.open({modal:true});}else{
	        privateOrMention.open(a);
	    }
	}
	
	
 });




//$.mention.addEventListener();
