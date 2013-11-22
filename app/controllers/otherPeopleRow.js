var APP = require('core');
var ACS = require('acs');
var writeMention = null;
var AppearBox = null; 


var UserName = APP.user.uname;

if(OS_ANDROID) {

 	  $.currentUserRow.children[0].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
	  $.currentUserRow.children[1].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
	  $.currentUserRow.children[2].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
	  $.currentUserRow.children[3].width = (Ti.Platform.displayCaps.platformWidth/4);
	  
 };
  
var args = arguments[0] || {};
var mentionReceiverID = args.id;
 ACS.getProfilePic(args.id,function(photos){
        	           	if(photos){
        	           		Ti.API.info("other user = "+JSON.stringify(photos));
        	              	$.pic.image = photos.urls.square_75;		
        	                //alert($.pic.image);
        	           	}
	
        	       });
 //var status = '';       	       





//$.pic.image = args.image || '/images/pro.jpg';
//$.totalMention.text = args.mentions || '0';
ACS.currentUserMention('mentions',args.id,$.totalMention);
$.appears.text = args.appears  || '11:20 Am';
$.location.text = args.location ||'Around';
//ACS.getCheckin(args.id,{appear:$.appears,location:$.location});
$.userName.text = args.username ||'unknown';

 function TotalMentions(){
 };
 
 
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
	writeMention.animate({transform:t2, duration:200});
});
 
$.doMention.addEventListener('click',function(e){
	
	ACS.checkIfAlreadyMentioned('mentions',mentionReceiverID,function(status){
		
		switch(status){
			 case 'Active':
				 ACS.isResponded('mentions',mentionReceiverID,APP.user.id,function(rep){
			     switch(rep){ 	
				 case 'noReply':
				// msgWin();
				 alert('You cant mention him he did not reply first one');
				 break;
				 case 'replied':
				 msgWin(mentionReceiverID);
				// alert('replied');
				 break;
				 };

			    });
		
			break;
			case 'Inactive':
			   //  alert('Inactive');
			    msgWin(mentionReceiverID);
			break;

		}

   });
   
	
});
 
 
 function msgWin(mentionReceiverID){
 		
	     if(!APP.msgWindowOpen){
   
	         if(APP.user.uname =='You'){
	         	
	           writeMention = Alloy.createController('firstName').getView();
	   
	        }else{
	
		       writeMention = Alloy.createController('MsgWindow',{toUID:mentionReceiverID,type:'public'}).getView();
			
			}
			
		    if(Ti.Platform.osname=='android'){
		    	writeMention.open({modal:true});}else{
		        writeMention.open(a);
		    }
		    
       }
 
 	
 }
 
 
 
 
 
 
 
 
 
/*
var t1 = Titanium.UI.create2DMatrix();
	t1 = t1.scale(1.1);
	
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



$.appearBoxRow.addEventListener('click',function(){
//ACS.getPlace(function(via){
       AppearBox = Alloy.createController('AppearBox',{appear:$.appears,location:$.location}).getView();
	
 if(OS_ANDROID){
        AppearBox.open({modal:true});}else{
        AppearBox.open(b);
        }	
	
	
	
//});
		
		//alert(e.places[0].street);
      // $.addr1.text = e.places[0].street;
      // $.addr2.text = e.places[0].city;
    
       
	
});
//});
$.refreshBtn.addEventListener('click',function(){
	Ti.API.fireEvent('refreshScreen');
	});

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
