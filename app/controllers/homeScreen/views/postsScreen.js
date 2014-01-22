var ACS = require('acs');
var APP = require('core');

var args = arguments[0] || {};

$.ptr.init($.postsTV);
var menuBtn = Ti.UI.createImageView({
		//title: 'MENU',
		// color: '#0096ff',
		// style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
		// tintColor: '#0096ff',
		image: "/images/Image_92.png",
		height: Ti.UI.FILL
	});
	
	var postButton = Ti.UI.createButton({
		backgroundImage: '/images/hereScreen/post button.png'
	});
	
	$.contentWin.leftNavButton = menuBtn;
	$.contentWin.rightNavButton=postButton;
	
menuBtn.addEventListener('click',function(e)
	{
		APP.Navigation.presentMenuViewController();
	});
	
	postButton.addEventListener('click', function(e){
		$.transparentView.animate(APP.animOverlay, function(e){
			//test control
			//APP.user.uname=null;
			if(APP.user.uname==null || APP.user.uname=="")
				{
					firstPostView = Alloy.createController('homeScreen/views/firstPost',{view: $.transparentView, postBtn: postButton, menuBtn: menuBtn}).getView();
					menuBtn.enabled=false;
					postButton.enabled=false;
					//contentWin.add(firstPostView);
					firstPostView.open(APP.fadeIn);
					firstPostView.addEventListener("close", function(e){
					//firstPostView.show();
					//firstPostView.animate(APP.fadeIn, function(e){
					
					});
				}
				else
				{
					postView = Alloy.createController('homeScreen/views/postMsg', {view: $.transparentView, postBtn: postButton, menuBtn: menuBtn}).getView();
					menuBtn.enabled=false;
					postButton.enabled=false;
					postView.open(APP.fadeIn);
				}
		});
		
	});
	
var posts = [];
var pageNum = null;
var totalPages = null;

function refreshPosts(f){
		$.loading.show('LOADING...', true);
		pageNum=1;
		//postsTV.add(navBarUnderLay);
		posts = [];
		// posts[0] = Ti.UI.createTableViewRow({
			// background: "transparent",
			// height: "74dp"
		// });
		ACS.getPosts(APP.coordinates.lng, APP.coordinates.lat, pageNum, function(e){
			totalPages = e.totalPages;
			Ti.API.info("get posts returns:  " + JSON.stringify(e));
			for(var i=0; i<e.posts.length; i++){
				// if(e.posts[i].photo){
					// ACS.getPostPhoto({id:e.posts[i].photo.id}, function(f){
						posts.push(Alloy.createController('homeScreen/elements/postRow',{
							msgTxt: e.posts[i].content,
							time: e.posts[i].created_at,
							displayName: e.posts[i].user.custom_fields.displayName,
							pic: e.posts[i].photo
						}).getView());
					// });
				// }
				// else{
					// posts.push(Alloy.createController('homeScreen/elements/postRow',{
						// msgTxt: e.posts[i].content,
						// time: e.posts[i].created_at,
						// displayName: e.posts[i].user.custom_fields.displayName
						// //pic: e.posts[0].photos.urls.original
					// }).getView());
				// }
				// if(i==0){
					// posts[i].top="74dp";
				// }
				//postsTV.add(posts[i]);
			}
			$.postsTV.setData(posts);
			if(pageNum<totalPages){
				pageNum++;
			}
			if(f){
				f.hide();
			}
			$.loading.hide();
		});		
	}

// $.postsTV.add(Ti.UI.createTableViewRow({
	// backgroundColor: 'transparent',
	// height: "64dp",
	// width: Ti.UI.FILL
// }));
	
//refreshPosts();
$.ptr.refresh();
