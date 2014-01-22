var APP = require("core");
var ACS = require("acs");
var LOCATION = require("location");

var args  = arguments[0]||{};

$.thisWin.height = APP.deviceHeight *.3;
$.unameLbl.text = APP.user.uname;

var slideLeft = Ti.UI.createAnimation();
slideLeft.right = "320dp";
slideLeft.duration = 250;

slideLeft.addEventListener('complete', function(e){
	args.view.animate(APP.animHide, function(e){
		$.thisWin.close();	
	});
	//args.view.animate(APP.animHide, function(e){});
	
});

function addShadow() {
	$.thisWin.removeEventListener('postlayout', addShadow);
  	$.thisWin.setShadow({
    	shadowRadius : 4,
    	shadowOpacity : .8,
    	shadowOffset : {
      		x : 2,
      		y : 20
    	},
    	shadowColor : "#000000"
  	});
}
$.thisWin.addEventListener('postlayout', addShadow);

$.taPost.addEventListener("change", function(e){
	$.countLbl.text= 162-$.taPost.value.length;
});

$.thisWin.addEventListener("close", function(e){
	args.menuBtn.enabled=true;
	args.postBtn.enabled=true;
});

var pic;

$.camBtn.addEventListener("click", function(e){
	Titanium.Media.showCamera({
	success:function(event) {
		// called when media returned from the camera
		Ti.API.debug('Our type was: '+event.mediaType);
		if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
			pic = event.media;
			var imageView = Ti.UI.createImageView({
				width:"50%",
				height:Ti.UI.FILL,
				image:event.media
			});
			$.postContainer.remove($.taPost);
			$.postContainer.add(imageView);
		} else {
			alert("got the wrong type back ="+event.mediaType);
		}
	},
	cancel:function() {
		// called when user cancels taking a picture
	},
	error:function(error) {
		// called when there's an error
		var a = Titanium.UI.createAlertDialog({title:'Camera'});
		if (error.code == Titanium.Media.NO_CAMERA) {
			a.setMessage('Please run this test on device');
		} else {
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
	saveToPhotoGallery:true,
	allowEditing:true,
	mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
});
});
$.backBtn.addEventListener("click", function(e){
	$.thisWin.animate(slideLeft, function(e){
		args.view.animate(APP.animHide, function(e){
			
			$.thisWin.close();
		});
	});
});

$.postBtn.addEventListener("click", function(e){
	//refresh coordinates
	LOCATION.getCoords(function(e){
		ACS.savePost({
			content: $.taPost.value,
			lat: e.lat,
			lng: e.lng,
			photo: pic
		},function(e){
			$.thisWin.animate(slideLeft, function(e){
				
			});
			//$.thisWin.close();
		});
	});
});
 