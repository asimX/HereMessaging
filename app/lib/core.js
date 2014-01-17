var Alloy = require('alloy');
var Cloud = require('ti.cloud');

/* 
 * App Singleton
 * @type {Object}
 */

//keep record of all global variables in app here

Alloy.Globals = {
	/**
	 * UI parameters
	 */
	deviceWidthScale: Ti.Platform.displayCaps.platformWidth/320,
	deviceHeightScale: Ti.Platform.displayCaps.platformHeight/480,
	deviceWidth: Ti.Platform.displayCaps.platformWidth,
	deviceHeight: Ti.Platform.displayCaps.platformHeight,
	internalHeight: 0,
	/**
	 * user parameters
	 */
	alerts:{
		
	        locationAlert:true,
	        mentionAlert:true,
	        privateAlert:true,
	},
	
	//DARK TRANSPARENCY OVERLAY FOR MODAL WINDOWS
	// darkTransparentOverlay: Ti.UI.createView({
			// height: Ti.UI.FILL,
			// width: Ti.UI.FILL,
			// backgroundColor: '#000',
			// opacity: 0,
			// zIndex: 20
	// }),
	
	//ANIMATIONS FOR DARK OVERLAY
	animOverlay: Ti.UI.createAnimation({
				 	opacity: 0.2,
					duration: 250
	}),
	
	animHide: Ti.UI.createAnimation({
		opacity: 0.0,
		duration: 250
	}),
	
	fadeIn:{
		opacity: 1.0,
		duration: 500
	},
	
	user: {
		email: null,
		uname: null,
		id: null,
		sessionID: null,
		pwd: null,
		posts: 0,
		//placeID: null,
		//timeAppeared: null,
		pic: null,
		//placeName: "Around"  // the default is "Around when user is not checked in"
	},
	
	//menuWin.add(leftTableView);
	/**
	 * coordinates
	 */
	coordinates: {
		lat: null,
		lng: null
	},
	/**
	 * App config params
	 */
	config: {
		maxDistance: null,
		osVersion: null
	},
	
	msgWindowOpen: false,
	
	//menuBtn: null,
	//postBtn: null,
	/**
	 * Posts Window of Application
	 * @type {Object}
	 */
	PostsWindow: null,
	/**
	 * Window containing Main Menu
	 * @type {Object}
	 */
	MenuWindow: null,
	/**
	 * Modal Login Window that will not be part of the main menu
	 * @type {Object}
	 */
	LoginWindow: null,
	/**
	 * Navigation Widget using for routing controllers
	 * @type {Object}
	 */
	Navigation: null,
	/**
	 * Initialize the application
	 * NOTE: This should only be fired in index controller file and only once.
	 * @type {Function}
	 */
	init: function() {
		// TODO: Sanity Check to make sure globals are set properly
		// Global system Events
		Ti.Network.addEventListener('change', _.bind(this.networkObserverUpdate, this));
		Ti.App.addEventListener('pause', _.bind(this.exit, this));
		Ti.App.addEventListener('close', _.bind(this.exit, this));
		Ti.App.addEventListener('resume', _.bind(this.resume, this));
		
		//initializing user parameters
		this.user.email = Ti.App.Properties.getString('email');
		this.log('info', 'EMAIL:  '+this.user.email);
		this.user.uname = Ti.App.Properties.getString('uname');
		this.log('info', 'USERNAME:  '+this.user.uname);
		this.user.id = Ti.App.Properties.getString('uid');
		this.log('info', 'UID:  '+this.user.id);
		this.user.sessionID = Ti.App.Properties.getString('sessionID');
		//this.user.posts = Ti.App.Properties.getDouble('posts');
		this.coordinates.lat = Ti.App.Properties.getDouble('latitude');
		this.coordinates.lng = Ti.App.Properties.getDouble('longitude');
		
		// SET CLOUD SESSION ID - THIS IS NECESSARY TO DO THINGS LIKE CREATE AND UPDATE 
		// AND GET THIS FROM PERSISTED STORAGE (APP PROPERTIES)
		Cloud.sessionId = Ti.App.Properties.getString('sessionID');
		this.osVersion = parseFloat(Ti.Platform.version);
		this.internalHeight = 0;
		},
	/**
	 * Loads in the appropriate controller and config data
	 */
	loadContent: function() {
		this.log('debug', 'APP.loadContent');		
	},
	/**
	 * Registers the app for push notifications
	 */
	registerPush: function() {
		this.log('debug', 'APP.registerPush');
	},
	/**
	 * Global network event handler
	 * @param {Object} _event Standard Ti callback
	 */
	networkObserverUpdate: function(_event) {
		this.log('debug', 'APP.networkObserverUpdate');
	},
	/**
	 * Exit event observer
	 */
	exit: function() {
		this.log('debug', 'APP.exit');
	},
	/**
	 * Resume event observer
	 */
	resume: function() {
		this.log('debug', 'APP.resume');
	},
	/**
	 * Pause event observer
	 */
	pause: function() {
		this.log('debug', 'APP.pause');
	},
	/**
	 * Logger utility for console data
	 */
	log: function(_serverity, _msg) {
		switch(_serverity.toLowerCase()) {
			case 'debug':
				Ti.API.debug(_msg);
				break;
			case 'error':
				Ti.API.error(_msg);
				break;
			case 'info':
				Ti.API.info(_msg);
				break;
			case 'log':
				Ti.API.log(_msg);
				break;
			case 'trace':
				Ti.API.trace(_msg);
				break;
			case 'warn':
				Ti.API.warn(_msg);
				break;
		}
	}
};

module.exports = Alloy.Globals;
