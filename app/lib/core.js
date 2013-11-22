var Alloy = require('alloy');
var Cloud = require('ti.cloud');

/* 
 * App Singleton
 * @type {Object}
 */
Alloy.Globals = {
	/**
	 * UI parameters
	 */
	deviceWidthScale: Ti.Platform.displayCaps.platformWidth/320,
	deviceHeightScale: Ti.Platform.displayCaps.platformHeight/480,
	deviceWidth: Ti.Platform.displayCaps.platformWidth,
	deviceHeight: Ti.Platform.displayCaps.platformHeight,
	/**
	 * user parameters
	 */
	alerts:{
		
	        locationAlert:true,
	        mentionAlert:true,
	        privateAlert:true,
	},
	
	user: {
		email: null,
		uname: null,
		id: null,
		sessionID: null,
		pwd: null,
		checkin:{
			id:null,
			lat: null,
			lng: null,
			placeID: null,
			placeName: "Around"
		},
		checkout: null,
		//placeID: null,
		timeAppeared: null,
		pic: null,
		//placeName: "Around"  // the default is "Around when user is not checked in"
	},
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
	
	//Settings: null,
	/**
	 * Main Window of Application that holds all the tabviews
	 * @type {Object}
	 */
	MainWindow: null,
	/**
	 * Modal Login Window that will not be part of the tabgroup
	 * @type {Object}
	 */
	LoginWindow: null,
	/**
	 * Navigation Widget using for routing controllers
	 * @type {Object}
	 */
	Tabs: null,
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
		this.user.uname = Ti.App.Properties.getString('uname');
		this.user.id = Ti.App.Properties.getString('uid');
		this.user.sessionID = Ti.App.Properties.getString('sessionID');
		this.user.checkin.id = Ti.App.Properties.getString('checkInID');
		this.user.checkin.placeID = Ti.App.Properties.getString('placeID');
		this.user.timeAppeared = Ti.App.Properties.getString('timeAppeared');
		this.user.checkin.placeName = Ti.App.Properties.getString('placeName');
		this.coordinates.lat = Ti.App.Properties.getDouble('latitude');
		this.coordinates.lng = Ti.App.Properties.getDouble('longitude');
		this.config.maxDistance = Ti.App.Properties.getDouble('maxDistance');
		// SET CLOUD SESSION ID - THIS IS NECESSARY TO DO THINGS LIKE CREATE AND UPDATE 
		// AND GET THIS FROM PERSISTED STORAGE (APP PROPERTIES)
		Cloud.sessionId = Ti.App.Properties.getString('sessionID');
		this.osVersion = parseFloat(Ti.Platform.version);	
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
