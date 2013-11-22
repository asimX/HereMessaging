var APP = require('core');
APP.init();
var LBS = require('location');
LBS.init();
var ACS = require('acs');
ACS.init();
var animation = require('alloy/animation');

// var registerWin = null;
// var   homeWin = null;
APP.MainWindow = $.MainWindow;
APP.Navigation = $.tabController;
//APP.Tabs = $.CustomTabs

var deviceHeight = APP.deviceHeight;
var deviceWidth = APP.deviceWidth;

var tabViews = [
	{
		controller: 'homeScreen/home',
		controllerParams: {
			uid:APP.user.id,
			uname:APP.user.uname,
			uemail:APP.user.email,
		},
		tabOrder: 0,
		icon: '/images/hereScreen/tabbar-here.png',
		selectedIcon: '/images/hereScreen/tabbar-here-active.png',
	},
	{
		controller: 'aroundScreen/around',
		controllerParams: {},
		tabOrder: 1,
		icon: '/images/aroundScreen/tabbar-around.png',
		selectedIcon: '/images/aroundScreen/tabbar-around-active.png',
	},
	{
		controller: 'mtnPvt',
		controllerParams: {},
		tabOrder: 2,
		icon: '/images/mentionsScreen/tabbar-mentions.png',
		selectedIcon: '/images/mentionsScreen/tabbar-mentions-active.png',
	},
	{
		controller: 'userProfile',
		controllerParams: {
			uid:APP.user.id,
			uname:APP.user.uname,
			uemail:APP.user.email,
		},
		tabOrder: 3,
		icon: '/images/profileScreen/tabbar-profile.png',
		selectedIcon: '/images/profileScreen/tabbar-profile-active.png',
	}
];



APP.TabBar = {
	//backgroundImage: '/images/btn-settings.png',
	bgColor: "#202020",
	top: APP.deviceHeight*.88,
	height: APP.deviceHeight*.10
};

APP.TabView = {
	height: APP.deviceHeight*.90,
	top: "0dp",
};

// var screenParams = {
	// width: APP.deviceWidth,
	// height: APP.deviceHeight
// };

//var tabBarBG = "/images/btn-settings.png";

APP.Tabs = tabViews;
//APP.TabBarBG = '/images/btn-settings.png';
//APP.screenParams

//Ti.API.info('APP.isLoggedIn:  '+APP.user.isLoggedIn);

	if(APP.user.sessionID){
		
		//if(OS_ANDROID){
		//var home = Alloy.createController('mtnPvt',{uid:APP.user.id,uname:APP.user.uname,uemail:APP.user.email}).getView();
	    //APP.MainWindow.add(home);
	    //APP.MainWindow.open();	
		
		//}else{
		APP.MainWindow.open();	
		APP.Navigation.open(APP.Tabs, APP.TabBar , APP.TabView, {height: APP.deviceHeight, width: APP.deviceWidth});	
		//}
		
	}
	else {
		APP.LoginWindow = Alloy.createController('login/loginScreen').getView();
		APP.LoginWindow.open();
		animation.fadeIn(APP.LoginWindow, 800); 
	}
