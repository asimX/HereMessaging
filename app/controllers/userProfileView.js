
var Cloud = require('ti.cloud');
//var Cloud = require('ti.cloud');
var APP = require('core');
var ACS = require('acs');


  var updateWin = null;
  var plateformwidth  = Ti.Platform.displayCaps.platformWidth; 
  var plateformheight = Ti.Platform.displayCaps.platformHeight;
      
       $.profileView.height = (plateformheight/2)-40; 
      
      //Changed the index numbers below in order from 0 - 5
      
      $.leftView.width  = (plateformwidth/2)+30;
      $.leftView.height = ($.profileView.height);
      
      
      $.profileImg.width  = (plateformwidth/2)-30;
      $.profileImg.height = (plateformwidth/2)-30;
      
      $.unameLbl.width  = (plateformwidth/2)+15;
      $.unameLbl.height = ($.profileImg.height/3)-2;
      
      $.emailLbl.width  = (plateformwidth/2)+15;
      $.emailLbl.height = ($.profileImg.height/3)-2;
      
      $.passLbl.width  = (plateformwidth/2)+15;
      $.passLbl.height = ($.profileImg.height/3)-2;
       
      $.locationLbl.width  = (plateformwidth/2)+15;
      $.locationLbl.height = ($.profileImg.height/3)-2;
     // $.locationLbl.top    = ($.profileImg.height)+10;
      
     // $.uploadLbl.width  = (plateformwidth/2)-30;
     // $.uploadLbl.height = ($.profileImg.height/3)-2;
     // $.uploadLbl.top    = ($.profileImg.height)+10;
         
        
     var args       = arguments[0];
     var uid        = args.uid;
     
    $.unameLbl.text = args.uname || "unknwn";
    $.emailLbl.text = args.uemail ||"No emailId";
 
    // if(APP.user.pic == null){
     // $.profileImg.image = "/images/pro.jpg";
    // }else{
    	// $.profileImg.image = APP.user.pic;
    // };
//function profile(){    
     
     ACS.getProfilePic(APP.user.id,function(photos){
     	
        	           	if(photos){
        	           	Ti.API.info("profile user = "+JSON.stringify(photos));
        	           	$.profileImg.image = photos.urls.square_75;		
        	           //alert($.pic.image);
        	           	}
        	           
        	           	
        	           });
        	           
  //        };
  // profile();       
 ACS.getCheckin(APP.user.id,{location:$.locationLbl});
 
 $.profileImg.addEventListener('click', function (evt) {
 	    
 /******************************************************/
 	  var photo;

    if (Ti.Media.openPhotoGallery) {
        // var selectPhoto = Ti.UI.createButton({
            // title: 'Select Photo from Gallery',
            // top: 10 + u, left: 10 + u, right: 10 + u, bottom: 10 + u,
            // height: 40 + u
        // });
        // selectPhoto.addEventListener('click', function (evt) {
             Ti.Media.openPhotoGallery({
                success: function (e) {
                    photo = e.media;
                    
                        	
        if (!photo) {
            alert('Please provide a photo!');
            return;
        }else{
        	
        ACS.uploadPic({
        	         photo:photo,
        	          },function(ph){	
        	          	
        	            ACS.getProfilePic(APP.user.id,function(photos){
        	           	if(photos){
        	           	Ti.API.info("profile user = "+JSON.stringify(photos));
        	           	$.profileImg.image = photos.urls.original;		
        	           //alert($.pic.image);
        	           	}
        	           
        	           	
        	           });
        	           
        	          });
        	 
        };

                    
                }
            });
       // });
     //   content.add(selectPhoto);
    }else if (Ti.Media.showCamera) {
        // var takePhoto = Ti.UI.createButton({
            // title: 'Take Photo with Camera',
            // top: 10 + u, left: 10 + u, right: 10 + u, bottom: 10 + u,
            // height: 40 + u
        // });
        // takePhoto.addEventListener('click', function (evt) {
            Ti.Media.showCamera({
                success: function (e) {
                    photo = e.media;
                    
                        	
        if (!photo) {
            alert('Please provide a photo!');
            return;
        }else{
        	
        ACS.uploadPic({
        	         photo:photo,
        	         
        	          },function(ph){	
        	           ACS.getProfilePic(APP.user.id,function(photos){
        	           	if(photos){
        	           	Ti.API.info("profile user = "+JSON.stringify(photos));
        	           	$.profileImg.image = photos.urls.original;		
        	           //alert($.pic.image);
        	           	}
        	           
        	           	
        	           });
        	           
        	          });
 
        	
        };

                }
            });
        //});
        //content.add(takePhoto);
    }

    /*******************************************************/
        // if (Ti.UI.createProgressBar) {
            // Cloud.onsendstream = function (evt) {
                // uploadProgress.value = evt.progress * 0.5;
            // };
            // Cloud.ondatastream = function (evt) {
                // uploadProgress.value = (evt.progress * 0.5) + 0.5;
            // };
        // }
        
        
        // Cloud.Photos.create({
            // photo: photo,
            // //collection_id: collectionID,
            // 'photo_sync_sizes[]': 'small_75'
        // }, function (e) {
            // //Cloud.onsendstream = Cloud.ondatastream = null;
            // if (e.success) {
                // photo = null;
              // //  collectionID = null;
                // alert('Uploaded!');
            // }
            // else {
                // error(e);
            // }
        // });
        
    });

 
 
 
 
 
 
 
 
 
 
 
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
		  updateWin.animate({transform:t2, duration:200});

	});
   

 $.passLbl.addEventListener('click',function(e){
        updateWin = Alloy.createController('update').getView();
     ///updateWin.visible = false;
       if(Ti.Platform.osname=='android'){
        updateWin.open({modal:true});}else{
        updateWin.open(a);
        }		
 });
