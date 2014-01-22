// Load required Modules
var APP = require('core');
var Cloud = require('ti.cloud');
var ACS = require('acs');
var TiSideMenu = require('de.marcelpociot.sidemenu');
var animation = require('alloy/animation');

var args  = arguments[0];

var firstPostView = null;
var postView = null;

//$.loading.show('LOADING...', true);

APP.MenuWindow = Ti.UI.createWindow({
	//backgroundColor:'#0299fb',
	//statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
	backgroundImage: "/images/blueWP.png"
});

var leftTableView = Ti.UI.createTableView({
	top: "100dp",
	font:{fontSize:14,color: '#ffffff'},
	rowHeight:40,
	backgroundColor:'transparent',
	data:[
		{title:'HERE',color: "#fff"},
		{title:'ME',color: "#fff"},  
		{title:'INVITE',color: "#fff"},
		{title:'ABOUT',color: "#fff"},
		{title:'HELP',color: "#fff"},
		{title:'LOGOUT',color: "#fff"}
	],
	separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE
});

APP.MenuWindow.add(leftTableView);

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
		case 5:
			ACS.logout(function(e){
				APP.LoginWindow = Alloy.createController('login/loginScreen').getView();
				APP.LoginWindow.open();
				animation.fadeIn(APP.LoginWindow, 800); 
			});
			break;
	}
});

function createContentWindow()
{
	var contentWin = Alloy.createController("homeScreen/views/postsScreen").getView();
	
	// Ti.UI.createWindow({
		// backgroundColor: "#808080",//"#eaeaea",
		// titleImage: "/images/hereScreen/Logo_dark_BK.png",
		// barColor: "#ffffff",//eaeaea",
		// translucent: true,
		// extendEdges: [Ti.UI.EXTEND_EDGE_TOP],
		// statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
		// autoAdjustScrollViewInsets: true,
		// //navTintColor: '#1b9bf8'
		// //tintColor: "#dd007aff"
		// //backgroundImage: "/images/blueWP.png"
	// });
	
	// var bgImageView = Ti.UI.createImageView({
		// backgroundImage: "/images/blueWP.png",
		// opacity: .6,
		// height: Ti.UI.FILL,
		// width: Ti.UI.FILL
		// //zIndex: 1
	// });
	// var transparentView = Ti.UI.createView({
	// height: Ti.UI.FILL,
	// width: Ti.UI.FILL,
	// backgroundColor: '#000',
	// opacity: 0,
	// //zIndex: 2
	// });
	
	// var menuBtn = Ti.UI.createButton({
		// title: 'MENU',
		// color: '#0072ff'
	// });
// 	
	// var postButton = Ti.UI.createButton({
		// backgroundImage: '/images/hereScreen/post button.png'
	// });
// 	
	// contentWin.leftNavButton = menuBtn;
	// contentWin.rightNavButton=postButton;
	// menuBtn.addEventListener('click',function(e)
	// {
		// APP.Navigation.presentMenuViewController();
	// });
// 	
	// postButton.addEventListener('click', function(e){
		// transparentView.animate(APP.animOverlay, function(e){
			// //test control
			// //APP.user.uname=null;
			// if(APP.user.uname==null || APP.user.uname=="")
				// {
					// firstPostView = Alloy.createController('homeScreen/views/firstPost',{view: transparentView, postBtn: postButton, menuBtn: menuBtn}).getView();
					// menuBtn.enabled=false;
					// postButton.enabled=false;
					// //contentWin.add(firstPostView);
					// firstPostView.open(APP.fadeIn);
					// firstPostView.addEventListener("close", function(e){
					// //firstPostView.show();
					// //firstPostView.animate(APP.fadeIn, function(e){
// 					
					// });
				// }
				// else
				// {
					// postView = Alloy.createController('homeScreen/views/postMsg', {view: transparentView, postBtn: postButton, menuBtn: menuBtn}).getView();
					// menuBtn.enabled=false;
					// postButton.enabled=false;
					// postView.open(APP.fadeIn);
				// }
		// });
// 		
	// });
	
	// var postData = [
		// {
			// template: "txtTemplate",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "txtTemplate",
			// msgLabel: {
				// text: 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfas'
			// }
		// },
		// {
			// template: "txtTemplate",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "txtTemplate",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "txtTemplate",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "txtTemplate",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "txtTemplate",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "txtTemplate",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "txtTemplate",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "txtTemplate",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// }
	// ];
	
	var posts = [];
	
	// Ti.UI.createScrollView({
		// height: Ti.UI.FILL,
		// width: Ti.UI.FILL,
		// contentHeight: Ti.UI.SIZE,
		// verticalBounce: true,
		// scrollType: "vertical",
		// top: 0,
		// bottom: 0,
		// layout: "vertical",
		// backgroundColor: 'transparent',
		// //zIndex: 2,
		// showVerticalScrollIndicator: true,
		// scrollToTop: true,
		// //zIndex:2
	// });
	
	// var timeLineView = Ti.UI.createImageView({
		// height: Ti.UI.FILL,
		// width: "5dp",
		// image: "/images/blue_timeline.png",
		// left: "39dp",
		// bottom: 0,
		// //zIndex: 2,
		// top: 0
	// });
	
	// var navBarUnderLay = Ti.UI.createView({
		// backgroundColor: "#fff",
		// height: "64dp",
		// top: 0,
		// width: Ti.UI.FILL
	// });
	
	//contentWin.add(timeLineView);
	//postsTV.add(navBarUnderLay);
	//contentWin.add(bgImageView);
	
	
	
	
	// var nearBottom = null;
	// var postIndex = null;
	// var pulledToRefresh = false;
	// postsTV.addEventListener("scrollend", function(e){
		// postIndex = posts.length;
		// if(nearBottom)
		// {
			// $.loading.show('LOADING...', true);
			// if(pageNum<totalPages){
	    		// for(var i=0; i<e.posts.length; i++){
					// posts[postIndex+i]= Alloy.createController('homeScreen/elements/postRow',{
						// msgTxt: e.posts[i].content,
						// time: e.posts[i].created_at,
						// displayName: e.posts[i].user.custom_fields.displayName
					// }).getView();
// 					
					// postsTV.add(posts[postIndex+i]);
				// }
				// pageNum++;
	    	// }
	    	// else{
	    		// alert("NO MORE POSTS HERE!");
	    	// }
			// // for(var i=0; i<20; i++){
				// // posts.push(Alloy.createController('homeScreen/elements/postRow').getView());
				// // postsTV.add(posts[first+i]);	
				// // //internalHeight = posts[first+i].getRect().height + internalHeight;
			// // }
			// nearBottom=null;
			// $.loading.hide();
		// }
		// else if(pulledToRefresh)
		// {
			// if(postsTV.children)
	    	// {
	    		// // var numOfChildren = postsTV.getChildren().length;
	    		// // for(var i=0;i<numOfChildren;i++){
	    			// // postsTV.remove(postsTV.children[i]);
	    			// // postsTV.children[i]=null;
	    		// // }
	    		// postsTV.removeAllChildren();
	    		// posts=[];
	    	// }
// 	    	
	    	// pulledToRefresh=false;
	    	// refreshPosts();
// 	    	
		// }
	// });
// // 	
	// // postsTV.addEventListener("swipe", function(e){
		// // scrollDirection = e.direction;
	// // });
	// //var internalHeight = 0;
	// postsTV.addEventListener('scroll', function (e) {
	    // if(e.y>0)
	    // {
		    // var tolerance = 0;
		    // nearBottom = (APP.internalHeight - e.y) <= (postsTV.getRect().height + tolerance);
		    // Ti.API.info('internalHeight:  '+APP.internalHeight);
		    // Ti.API.info('e.y:  '+e.y);
		    // Ti.API.info('near bottom', nearBottom);
		    // Ti.API.info('scrollView Height:  '+postsTV.getRect().height);
	    // }
	    // if(e.y<-50){
	    	// pulledToRefresh=true;
	    // }
	// });
	
	// var pageNum = null;
	// var totalPages = null;
	// var postsTV = Ti.UI.createTableView({
		// //height: Ti.UI.FILL,
		// //width: Ti.UI.FILL,
		// top: 0,
		// backgroundColor: "transparent",
		// separatorColor: "transparent",
		// //headerView: navBarUnderLay
		// //data: posts
	// });
	// function refreshPosts(){
		// $.loading.show('LOADING...', true);
		// pageNum=1;
		// //postsTV.add(navBarUnderLay);
		// posts = [];
		// posts[0] = Ti.UI.createTableViewRow({
			// background: "transparent",
			// height: "74dp"
		// });
		// ACS.getPosts(APP.coordinates.lng, APP.coordinates.lat, pageNum, function(e){
			// totalPages = e.totalPages;
			// Ti.API.info("get posts returns:  " + JSON.stringify(e));
			// for(var i=0; i<e.posts.length; i++){
				// posts.push(Alloy.createController('homeScreen/elements/postRow',{
					// msgTxt: e.posts[i].content,
					// time: e.posts[i].created_at,
					// displayName: e.posts[i].user.custom_fields.displayName
				// }).getView());
				// // if(i==0){
					// // posts[i].top="74dp";
				// // }
				// //postsTV.add(posts[i]);
			// }
			// $.postsTV.setData(posts);
			// if(pageNum<totalPages){
				// pageNum++;
			// }
			// $.loading.hide();
		// });
// 		
	// }
// 	
	// refreshPosts();
	
	//contentWin.add(postsTV);
	//contentWin.add(transparentView);
	
	var navController = Ti.UI.iOS.createNavigationWindow({
		//statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK,
		//autoAdjustScrollViewInsets: true,
		//fullscreen: true,
		//translucent: true,
		window : contentWin,
		//barColor: "#EaEaEa"
	});
	
	return navController;
};

APP.PostsWindow = createContentWindow();

$.MainWindow = TiSideMenu.createSideMenu({
	contentView: 		APP.PostsWindow,
	menuView: 			APP.MenuWindow,
	//backgroundImage: 	'/images/stars.png',
	backgroundColor: "#fff",
	contentViewScaleValue: 0.7,
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
$.loading.hide();
