var Cloud = require('ti.cloud');
var APP = require('core');
var ACS = require('acs');

//var APP = require('core');
var plateformwidth    = Ti.Platform.displayCaps.platformWidth; 
var plateformheight   = Ti.Platform.displayCaps.platformHeight;

           if(OS_ANDROID){
           	
                	$.plusSignRow.height = plateformheight/6; 
                	$.pSignRow.height    =  plateformheight/6;
	    		    $.plusSignRow.children[0].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
	    			$.plusSignRow.children[1].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
	    			$.plusSignRow.children[2].width = (Ti.Platform.displayCaps.platformWidth/4)-1;
	    			$.plusSignRow.children[3].width = (Ti.Platform.displayCaps.platformWidth/4);
	    	
          }else{
          	
  	            $. plusSignRow.height = plateformheight/5;
  	            $. pSignRow.height =  plateformheight/5
  	      	
        }
      
 var args     = arguments[0];
 var id       = args.id;
 var username = args.name;
 $.pname.text = args.name || 'You';
 $.appears.text = args.duration || 'N/A';
 $.profileImg.image = args.pic; 
 ACS.currentUserMention('mentions',args.id,$.totol);
  if(args.id != APP.user.id){
//    	
   	 // ACS.getProfilePic(args.id,function(photos){
        	           	// if(photos){
        	           	// $.profileImg.image = photos.urls.square_75;		
        	           	// }
//         	           
//         	           	
        	           // });
   	 ACS.getCheckin(args.id,{location:$.loc});
   	
   	
   }else{
   	
   // if(APP.user.pic == null){
     // $.profileImg.image = "/images/pro.jpg";
    // }else{
    	// $.profileImg.image = APP.user.pic;
    // };
//  	
   $.loc.text = APP.user.location || 'Around' ;
  
  
   //$.distance.text = APP.user.appear || 'N/A';
   	
   }

     
$.spamBlock.addEventListener('click',function(){

//  OPEN (WITH ANIMATED WOBBLE)
//
	var spamBlockView = Titanium.UI.createView({
		backgroundImage:'/images/btn-settings@2x.png',
		top:-plateformheight/5,
		height:plateformheight/5,
		width:320,
		zIndex:100,
		opacity:0,
		id:id,
		
		
	});
	
	var lasttipLabel =  Titanium.UI.createLabel({
		text:'You`re about to block/spam '+username,
		color:'#fff',
		width:'auto',
		height:20,
		top:2,
		font:{
		fontFamily:'Helvetica Neue',
		fontSize:13,
		//fontWeight:'bold'
		},
		textAlign:'center',
		id:id,
		});
		 
		spamBlockView.add(lasttipLabel);

  var lasttipLabel2 =  Titanium.UI.createLabel({
		text:'You will no longer recieve anything from them.',
		color:'#fff',
		width:'auto',
		height:20,
		top:22,
		font:{
		fontFamily:'Helvetica Neue',
		fontSize:13,
		//fontWeight:'bold'
		},
		textAlign:'center'
		});
		
		 
		spamBlockView.add(lasttipLabel2);
	
		// create first transform to go beyond normal size

	var a = Titanium.UI.createAnimation({
		opacity:0.95,
        duration:1500,
		
	});
		// when this animation completes, scale to normal size
	a.addEventListener('complete', function()
	{
		Titanium.API.info('here in complete');
	
	});
	// create a button to close window
	var spamBtn = Titanium.UI.createImageView({
		image:'/images/spam.png',
		//title:'spam',
		height:50,
		width:50,
		id:id,
		left:2,
		bottom:5,
	});
	spamBlockView.add(spamBtn);
	
	var blockBtn = Titanium.UI.createImageView({
		//title:'Block',
		image:'images/block_black.png',
		height:50,
		width:50,
		id:id,
		right:2,
		bottom:5,
	});
	spamBlockView.add(blockBtn);
	spamBtn.addEventListener('click', function()
	{
		spamBlockView.animate({opacity:0,duration:1500});
		$.pSignRow.animate({opacity:1,duration:1500});
	});
	
    $.plusSignRow.add(spamBlockView);
    $.pSignRow.animate({opacity:0,duration:1500});
	spamBlockView.animate(a);

});