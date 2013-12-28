// Load required Modules
var APP = require('core');
var Cloud = require('ti.cloud');
var ACS = require('acs');
var TiSideMenu = require('de.marcelpociot.sidemenu');

var args  = arguments[0];

var firstPostView = null;

APP.menuWindow = Ti.UI.createWindow({
	backgroundColor:'transparent',
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

var leftTableView = Ti.UI.createTableView({
	top: 100,
	font:{fontSize:12,color: '#ffffff'},
	rowHeight:40,
	backgroundColor:'transparent',
	data:[
		{title:'HERE',color: 'white'},
		{title:'ME',color: 'white'},  
		{title:'INVITE',color: 'white'},
		{title:'ABOUT',color: 'white'},
		{title:'HELP',color: 'white'}
	],
	separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE
});

APP.menuWindow.add(leftTableView);

leftTableView.addEventListener("click", function(e){
	switch(e.index){
		case 0:
		case 1:
			APP.Navigation.hideMenuViewController();
			alert("You clicked " + e.rowData.title + ".");
			break;
		case 2:
			var newWin = Ti.UI.createWindow({
				backgroundColor:'red'
			});
			APP.Navigation.setContentWindow({
				window: newWin,
				animated: true 
			});
			APP.Navigation.hideMenuViewController();
			break;
		case 3:
			var newWin = Ti.UI.createWindow({
				backgroundColor:'red'
			});
			contentWindow.openWindow(newWin);
			APP.Navigation.hideMenuViewController();
			break;
		case 4:
			APP.Navigation.setContentWindow( createContentWindow() );
			APP.Navigation.hideMenuViewController();
			break;
	}
});

function createContentWindow()
{
	var contentWin = Ti.UI.createWindow({
		backgroundColor:'#FFFFFF',
		//title:"RE Side Menu",
		titleImage: "/images/hereScreen/Logo_dark_BK.png",
		barColor:"#EbEbEb",
		translucent: true,
		//extendEdges: [Ti.UI.EXTEND_EDGE_TOP],
		statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
		autoAdjustScrollViewInsets: true,
		navTintColor: 'white'
	});
	
	var transparentView = Ti.UI.createView({
	height: Ti.UI.FILL,
	width: Ti.UI.FILL,
	backgroundColor: '#000',
	opacity: 0
	});
	
	APP.menuBtn = Ti.UI.createButton({
		title: 'MENU',
		color: '#0072ff'
	});
	
	postButton = Ti.UI.createButton({
		backgroundImage: '/images/hereScreen/post button.png'
	});
	
	contentWin.leftNavButton = APP.menuBtn;
	contentWin.rightNavButton=postButton;
	APP.menuBtn.addEventListener('click',function(e)
	{
		APP.Navigation.presentMenuViewController();
	});
	
	postButton.addEventListener('click', function(e){
		transparentView.animate(APP.animOverlay, function(e){
			if(APP.user.posts==0)
				{
					firstPostView = Alloy.createController('homeScreen/views/firstPost',{view: transparentView}).getView();
					APP.menuBtn.enabled=false;
					postButton.enabled=false;
					firstPostView.open();
					firstPostView.addEventListener("cancel", function(e){
						APP.menuBtn.enabled=true;
						postButton.enabled=true;
					});
					// var t = Titanium.UI.create2DMatrix();
		// t = t.scale(0);
// 	
		// var w = Titanium.UI.createWindow({
			// backgroundColor:'#336699',
			// borderWidth:8,
			// borderColor:'#999',
			// height:400,
			// width:300,
			// borderRadius:10,
			// opacity:0.92,
			// transform:t
		// });
// 	
		// // create first transform to go beyond normal size
		// var t1 = Titanium.UI.create2DMatrix();
		// t1 = t1.scale(1.1);
		// var a = Titanium.UI.createAnimation();
		// a.transform = t1;
		// a.duration = 200;
// 	
		// // when this animation completes, scale to normal size
		// a.addEventListener('complete', function()
		// {
			// Titanium.API.info('here in complete');
			// var t2 = Titanium.UI.create2DMatrix();
			// t2 = t2.scale(1.0);
			// w.animate({transform:t2, duration:200});
// 	
		// });
// 	
		// // create a button to close window
		// var b = Titanium.UI.createButton({
			// title:'Close',
			// height:30,
			// width:150
		// });
		// w.add(b);
		// b.addEventListener('click', function()
		// {
			// var t3 = Titanium.UI.create2DMatrix();
			// t3 = t3.scale(0);
			// w.close({transform:t3,duration:300});
		// });
// 	
		// w.open(a);
				}
				else
				{
					Alloy.createController('homeScreen/views/postMsg').getView();
				}
		});
		
	});

	// Module settings
	scaleContentViewLabel = Ti.UI.createLabel({
		text: 'Scale content view:',
		top: 50,
		left: 10
	});
	scaleContentViewBtn = Ti.UI.createSwitch({
		value: true,
		top: 50,
		right: 10
	});
	contentWin.add( scaleContentViewLabel );
	contentWin.add( scaleContentViewBtn );
	scaleContentViewBtn.addEventListener('change',function(e)
	{
		APP.Navigation.setScaleContentView( scaleContentViewBtn.value );
	});


	scaleBackgroundImageViewLabel = Ti.UI.createLabel({
		text: 'Scale background image:',
		top: 100,
		left: 10
	});
	scaleBackgroundImageViewBtn = Ti.UI.createSwitch({
		value: true,
		top: 100,
		right: 10
	});
	contentWin.add( scaleBackgroundImageViewLabel );
	contentWin.add( scaleBackgroundImageViewBtn );
	scaleBackgroundImageViewBtn.addEventListener('change',function(e)
	{
		APP.Navigation.setScaleBackgroundImageView( scaleBackgroundImageViewBtn.value );
	});

	parallaxLabel = Ti.UI.createLabel({
		text: 'Parallax enabled:',
		top: 150,
		left: 10
	});
	parallaxBtn = Ti.UI.createSwitch({
		value: true,
		top: 150,
		right: 10
	});
	contentWin.add( parallaxLabel );
	contentWin.add( parallaxBtn );
	parallaxBtn.addEventListener('change',function(e)
	{
		APP.Navigation.setParallaxEnabled( parallaxBtn.value );
	});


	panLabel = Ti.UI.createLabel({
		text: 'Pan gesture enabled:',
		top: 200,
		left: 10
	});
	panBtn = Ti.UI.createSwitch({
		value: true,
		top: 200,
		right: 10
	});
	contentWin.add( panLabel );
	contentWin.add( panBtn );
	panBtn.addEventListener('change',function(e)
	{
		APP.Navigation.setPanGestureEnabled( panBtn.value );
	});

	scaleLabel = Ti.UI.createLabel({
		text: 'Content View scale:',
		top: 250,
		left: 10
	});
	
	var scaleSlider = Titanium.UI.createSlider({
    	top: 290,
    	min: 0,
    	max: 100,
    	width: '100%',
    	value: 50
    });
	contentWin.add( scaleLabel );
	contentWin.add( scaleSlider );
	contentWin.add(transparentView);
	// scaleSlider.addEventListener('change', function(e) {
	    // APP.Navigation.setContentViewScaleValue( e.value / 100 );
	// });

	var navController = Ti.UI.iOS.createNavigationWindow({
		//statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
		window : contentWin
	});
	
	return navController;
};

var contentWindow = createContentWindow();

$.MainWindow = TiSideMenu.createSideMenu({
	contentView: 		contentWindow,
	menuView: 			APP.menuWindow,
	//backgroundImage: 	'/images/stars.png',
	backgroundColor: "#000",
	contentViewScaleValue: 0.65,
	scaleContentView: true,
	panGestureEnabled: true,
	scaleBackgroundImageView: true,
	parallaxEnabled: true,
	// Blur options
	blurBackground: false,
	tintColor: '#ffffff',
	blurRadius: 20,
	iterations: 10
});

APP.Navigation = $.MainWindow;

APP.Navigation.open();

//APP.Navigation = $.MainWindow;

//APP.Navigation.open();

// declare variables
// var mentionsWin    = null;
// var userProfileWin = null;
// var statusUpdate   = null;

// read in arguments to home
 
// var uid   = args.uid;
// var uname = args.uname;

// var deviceHeightScale = APP.deviceHeightScale;
// var deviceWidthScale  = APP.deviceWidthScale;

// var platformWidth    = APP.deviceWidth; 
// var platformHeight   = APP.deviceHeight;

//$.header.height = APP.TabBar.height;
// if(OS_IOS){
	// if(APP.osVersion>=7.0)
		// $.header.top="20dp";
// }

// $.headerImg.width = APP.deviceWidth * .45;
// $.headerImg.height = APP.TabBar.height*.8;
// $.navBtn.width = APP.deviceWidth * .2;

// try {	 	
// 	
	// Ti.App.addEventListener('refreshScreen',function(){
		// populateSV();
	// }); 
// }
// 	
// catch (e) {
// 	
	// alert("An Error:[" + e.message + "] has occured in line " + e.line + " \nsourceID:"+e.sourceId+"\nsourceURL:"+e.sourceURL);
// 
// }	

//populateSV();  



// $.homeTV.data=[{title: 'Apples'}, {title: 'Bananas'}, {title: 'Carrots'}, {title: 'Potatoes'}, {title: "test1"}];
// 
// //$.ptr.importView({importedView: "/homeScreen/refreshRow"});
// 
// function myLoader(e){
	// setTimeout(function(){e.hide();}, 5000);
// }
// 
// var t1 = Titanium.UI.create2DMatrix();
// t1 = t1.scale(1.1);
// var a = Titanium.UI.createAnimation();
// a.transform = t1;
// a.duration = 200;
// 
// // when this animation completes, scale to normal size
// a.addEventListener('complete', function(){
	// //Titanium.API.info('here in complete');
	// var t2 = Titanium.UI.create2DMatrix();
	// t2 = t2.scale(1.0);
	// statusUpdate.animate({transform:t2, duration:200});
// });
//  
	// $.navBtn.addEventListener('click',function(e){
		// //ACS.getAllUpdates();
		// if(!APP.msgWindowOpen){
	    	// if(APP.user.uname =='You'){
	      		// statusUpdate = Alloy.createController('firstName').getView();
// 	   
	      	// }else{
				// statusUpdate = Alloy.createController('MsgWindow',{toUID: 'all',type:'public'}).getView();
			// }
		    // //Ti.App.Properties.setBool('loggedIn', false);
		    // //updateWin.visible = false;
		    // if(Ti.Platform.osname=='android'){
		    	// statusUpdate.open({modal:true});}else{
		        // statusUpdate.open(a);
		    // }
		// }
// 		
	// });
// 
// $.navBtn.addEventListener('longpress', function(e){
	// // ACS.logout();
	// // Ti.App.Properties.setString('sessionID', null);
	// // APP.user.sessionID = null;
	// // APP.MainWindow.open();
	// // if(!APP.LoginWindow){
		// // APP.LoginWindow = Alloy.createController('loginScreen').getView();
	// // }
	// // APP.LoginWindow.open();
    // //ACS.getAllUpdates();                                                  
// });
 
 
// $.scroller.addEventListener('scroll',function(){
	// Ti.App.fireEvent('restore');
// });

/////////////////////////////////////////////////////////////////////////////////
  
// function populateSV (){
// 	
	// //$.loading.show('LOADING...', true);
// 	
	// for(var i= 0; i< $.scroller.getChildren().length;i++){
	    	// $.scroller.remove($.scroller.children[i]);
	    	// $.scroller.children[i] = null;
	// }
// 	
// 
	// var par = {
           // username:APP.user.uname
// 
	// };
//     
// 
	// var row = Alloy.createController('currentUserRow',args).getView();
		         // $.scroller.add(row);
// 	
// 	
	// ACS.getAllUpdates(function(data){
		// for (var i=0; i < data.length; i++) {
// 
// 		  
			// if(data[i].place){
// 		  
		   		// if(data[i].user.id == APP.user.id){
// 		          	
		        // }	
		        // else{
// 		  	
		  			// // other users 
// 		  	
				  	// var row2 = Alloy.createController('otherPeopleRow',
				  	// {
				  		// username:data[i].user.first_name,
		   	    		// id:data[i].user.id,
		   	    	    // appears:data[i].created_at.substr(11,8),
		   	    	    // location:data[i].place.name
		   	    	// }).getView();
// 		                             
		            // $.scroller.add(row2);	
				// }
// 
			// }
			// else if(data[i].mentionTxt){
// 		  	
		  		// // metions 
// 		  	
				// var par = {
		   	    	// id:data[i].user.id,
		   	    	// mentionTxt:data[i].mentionTxt,
		   	    	// firstname:data[i].user.first_name,
		   	    	// //address:addr,
		   	    	// dist:data[i].created_at, 
		 			// toUID:data[i].toUID,
		   	    	// fromUID:data[i].fromUID,
		   	    	// type:'public',
// 		   	
				// };
// 
   				// if(data[i].toUID == 'all'){
//    	
	     			// var mentionView = Alloy.createController('mentionView',par).getView(); 
	         		// $.scroller.add(mentionView);	
	        		// // dateTime.push(data[i].created_at);  
   				// }
   				// else{
//    	
	   				// var specificUsersRow = Alloy.createController('specificUsersRow',par).getView();	
	        			// $.scroller.add(specificUsersRow);
	      				// //  dateTime.push(data[i].created_at);  
   				// }
// 
		 		// var mentionView = Alloy.createController('mentionView',par).getView(); 
		         // $.scroller.add(mentionView);	
		        // // dateTime.push(data[i].created_at);  
		   	// }else if(data[i].title){
				   // // this on is for post to all users under three miles	
				  	// // 
				  // // posts	
				  	// var par = {
		   	    	// id:data[i].user.id,
		   	    	// mentionTxt:data[i].title,
		   	    	// firstname:data[i].user.first_name,
		   	    	// //address:addr,
		   	    	// dist:data[i].created_at, 
		   	    	// type:'public',
		   	   // };
// 		   	
		     // var mentionView = Alloy.createController('mentionView',par).getView(); 
		         // $.scroller.add(mentionView);	
// 				  	
				  // }
// 		
				// }
// 				
// 			
// 
		// //$.loading.hide();
	// }); 
//  
// 	
// 	
// 	
// 	
// 	
// 	
// 	
// 
// }; //populate SV function;
       
       




   // var total=0;
	    
/*
 // var data = [];
//  var dateTime = [];
 //$.scroller = null;
var args = {
	username:APP.user.uname
	//mentions:total, 
    //appears :APP.user.appear,
    //location:APP.user.location,
	};
    
var row = Alloy.createController('currentUserRow',args).getView();

    $.scroller.add(row);

   
    ACS.getOtherPeople(APP.user.id,function(rows){
    	
     for (var i = 0;  i < rows.length; i++){
     	
     	if(rows[i].id != APP.user.id){
    

    ACS.getloction(rows[i].id,function (chkin) {
     	var place = chkin.place;
     	var user  = chkin.user;
   
		 if(place.id == APP.user.placeID){
     var row2 = Alloy.createController('otherPeopleRow',{username:user.first_name,id:user.id,appears:chkin.created_at.substr(11,8),location:place.name}).getView();
         $.scroller.add(row2);	
         
         //dateTime.push(chkin.created_at);   
        // dateTime.push(chkin.created_at);
         
          	
                            }     
        
        
                    });
       
     	    }
    
     
  
    };
     	
});



setTimeout(function(){
	
	ACS.getPosts(3,APP.coordinates.lng,APP.coordinates.lat,function(data){
	
	Ti.API.info("latitude  : "+ APP.coordinates.lat);
    Ti.API.info("longitude : "+ APP.coordinates.lng);
	Ti.API.info("INSIDE OF getPosts CALLBACK");
     for (var i = 0; i < data.length; i++) {
  
   
     var par = {
   	    	id:data[i].user.id,
   	    	mentionTxt:data[i].title,
   	    	firstname:data[i].user.first_name,
   	    	//address:addr,
   	    	dist:data[i].created_at, 
   	    	type:'public',
   	
   	   };
   	
     var mentionView = Alloy.createController('mentionView',par).getView(); 
         $.scroller.add(mentionView);	
     
     //  dateTime.push(data[i].created_at);    
   	  
   };
   	  
	
}); // 

},3000);

	setTimeout(function(){

	try {
  
  ACS.getMentions('mentions',APP.coordinates.lng,APP.coordinates.lat,APP.user.placeID,function(data){
  //ACS.getMentions('mentions',APP.coordinates.lng,APP.coordinates.lat,function(data){;
  	

 	Ti.API.info("latitude  : "+ APP.coordinates.lat);
    Ti.API.info("longitude : "+ APP.coordinates.lng);
 	Ti.API.info("INSIDE OF getMetions CALLBACK");
     for (var i = 0; i < data.length; i++) {
   
 
   
     var par = {
   	    	id:data[i].user.id,
   	    	mentionTxt:data[i].mentionTxt,
   	    	firstname:data[i].user.first_name,
   	    	//address:addr,
   	    	dist:data[i].created_at, 
 			toUID:data[i].toUID,
   	    	fromUID:data[i].fromUID,
   	    	type:'public',
   	
   	   };
   	
   	if(data[i].toUID == 'all'){
   	
     var mentionView = Alloy.createController('mentionView',par).getView(); 
         $.scroller.add(mentionView);	
        // dateTime.push(data[i].created_at);  
   	}else{
   	
   	var specificUsersRow = Alloy.createController('specificUsersRow',par).getView();	
        $.scroller.add(specificUsersRow);
      //  dateTime.push(data[i].created_at);  
   	}
   	  
   };

      	
  
  });	

	}
	catch (e) {
	
    	alert("An Error:[" + e.message + "] has occured in line " + e.line + " \nsourceID:"+e.sourceId+"\nsourceURL:"+e.sourceURL);
 
 }	 
},3000);

//setTimeout(function(e){
	
//alert(JSON.stringify(dateTime));

//},10000);
// this function is used to get all the checkins which user has selected ever
//ACS.getAppears(APP.user.id);


// this function will be used to alert user if he enters in new location
/*
setInterval(function(){
	
ACS.checkAppearance(APP.coordinates.lng,APP.coordinates.lat,function(e){
	
      if(APP.user.placeID != e.id)   {
      	
      	// alert dialog
  var alertWindow = Titanium.UI.createAlertDialog({
    title: 'Appear',
    message: 'Do you want to appear in :'+ e.name,
    cancel:1,
    buttonNames: ['OK','Cancel']
});
 
alertWindow.addEventListener('click',function(ev){
    Titanium.API.info( "cancel " + ev.cancel );
    Titanium.API.info( "index " + ev.index );
    Titanium.API.info( "index " + ev.source );
    switch(ev.index)
    {
    case 0:
    
      Titanium.API.info( "OK button was hit");
       row.children[1].children[1].text = e.created_at;
       row.children[2].children[1].text = e.name;	
       APP.user.placeID = e.source.id;
	   Ti.App.Properties.setString('placeID',e.source.id);
       Ti.API.info('check appearance called Place Name  :'+ e.name);	
       Ti.API.info('check appearance called ID :'+ e.id);
      
      
      break;
    case 1:
      Titanium.API.info( "cancel button was hit");
      break;
   
    }
});
 
alertWindow.show();
    
      
      };  


});
	
},60000); // after 60 seconds
*/

