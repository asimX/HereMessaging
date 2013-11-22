var APP = require('core');
var args = arguments[0] || {};

$.avatar.width = APP.deviceWidth * .24;
$.prtCenter.width = APP.deviceWidth * .72;
$.ptrText.width = APP.deviceWidth *.65;

$.title.text = "Welcome "+APP.user.uname;
$.ptrText.text = "THIS WILL SHOW A TIP. Remember you can only mention who is 'around' if you're around.'";
APP.user.checkin.placeName==null?$.location.text="Around":$.location.text = APP.user.placeName;
Ti.API.info(JSON.stringify(APP.user));
//$.avatar.image = APP.user.pic;

var options = {
	msgPull: L('ptrPull', 'Pull to refresh...'),
	msgRelease: L('ptrRelease', 'Release to refresh...'),
	msgUpdating: L('ptrUpating', 'Updating...')
};

var height = 80,
	attached = false,
	pulling = false,
	pulled = false,
	loading = false,
	offset = 0;

// delete special args
// delete args.__parentSymbol;
// delete args.__itemTemplate;
// delete args.$model;
// 
// // set args as options
// // setOptions(args);
// 
// // if(args.importedView){
	// // // for(var i= 0; i< $.getViews().length;i++){
    	// // // $.remove($._views[i]);
    	// // // $._views[i] = null;
	// // // }
	// // $.ptrContainer=null;
	// // $.ptrContainer=Alloy.createController(args.importedView).getView();
// // }
// 	
// 
// //init();
// 
// function show(msg) {
// 
	// if (!attached || pulled) {
		// return false;
	// }
// 
	// pulled = true;
// 
// 	
	// //$.ptrText.text = msg || options.msgUpdating;
// 	
	// $.ptrArrow.hide();
	// //$.ptrIndicator.show();
// 
	// if (OS_IOS) {
// 
		// // __parentSymbol.setContentInsets({
			// // top: height
		// // }, {
			// // animated: true
		// // });
// 
	// } else {
		// __parentSymbol.animate({
			// top: 0
		// });
	// }
// 
	// return true;
// }
// 
// function hide() {
// 
	// if (!attached || !pulled) {
		// return false;
	// }
// 
	// //$.ptrIndicator.hide();
	// $.ptrArrow.transform = Ti.UI.create2DMatrix();
	// $.ptrArrow.show();
	// //$.ptrText.text = options.msgPull;
// 
	// if (OS_IOS) {
// 
		// __parentSymbol.setContentInsets({
			// top: 0
		// }, {
			// animated: true
		// });
// 
	// } else {
		// __parentSymbol.animate({
			// top: -80
		// });
	// }
// 
	// pulled = false;
	// loading = false;
// 
	// return true;
// }
// 
// function refresh() {
// 
	// if (!attached || loading) {
		// return false;
	// }
// 
	// loading = true;
// 
	// show();
// 
	// $.trigger('release', {
		// hide: hide
	// });
// 
	// return true;
// }
// 
// function scrollListener(e) {
// 
	// // if (OS_IOS) {
// // 
		// // if (pulled) {
			// // return;
		// // }
// // 
		// // offset = e.contentOffset.y;
// // 
		// // if (pulling && !loading && offset > -80 && offset < 0) {
			// // pulling = false;
			// // var unrotate = Ti.UI.create2DMatrix();
			// // $.ptrArrow.animate({
				// // transform: unrotate,
				// // duration: 180
			// // });
			// // //$.ptrText.text = options.msgPull;
// // 
		// // } else if (!pulling && !loading && offset < -80) {
			// // pulling = true;
			// // var rotate = Ti.UI.create2DMatrix().rotate(180);
			// // $.ptrArrow.animate({
				// // transform: rotate,
				// // duration: 180
			// // });
			// // //$.ptrText.text = options.msgRelease;
		// // }
// // 
	// // } else {
		// // offset = e.firstVisibleItem;
	// // }
// 
	// return;
// }
// 
// function dragEndListener(e) {
// 
	// // if (!pulled && pulling && !loading && offset < -80) {
		// // pulling = false;
// // 
		// // refresh();
	// // }
// // 
	// return;
// }
// 
// function swipeListener(e) {
// 
	// if (offset === 0 && e.direction === 'down') {
		// refresh();
	// }
// 
	// return;
// }
// 
// function setOptions(_properties) {
	// _.extend(options, _properties);
// 
	// return;
// }
// 
// function attach() {
// 
	// if (attached) {
		// return false;
	// }
// 
	// if (OS_IOS) {
		// __parentSymbol.headerPullView = $.ptr;
	// }
// 
	// init();
// 
	// return true;
// }
// 
// function init() {
// 	
	// __parentSymbol.addEventListener('scroll', scrollListener);
// 
	// //height = $.ptr.height;
	// attached = true;
	// pulling = false;
	// pulled = false;
	// loading = false;
// 
	// offset = 0;
// 
	// if (OS_IOS) {
		// __parentSymbol.addEventListener('dragEnd', dragEndListener);
// 
	// } else {
		// __parentSymbol.top = -height;
// 
		// __parentSymbol.addEventListener('swipe', swipeListener);
	// }
// 
	// //$.ptrText.text = options.msgPull;
// 
	// return;
// }
// 
// function dettach() {
// 
	// if (!attached) {
		// return false;
	// }
// 	
	// __parentSymbol.removeEventListener('scroll', scrollListener);
// 
	// if (OS_IOS) {
		// __parentSymbol.removeEventListener('dragEnd', dragEndListener);
// 
		// __parentSymbol.headerPullView = null;
// 
	// } else {
		// __parentSymbol.removeEventListener('swipe', swipeListener);
// 
		// hide();
	// }
// 
	// attached = false;
// 
	// return true;
// }
// 
// // function importView(){
	// // if(args.importedView)
	// // {
		// // //$.hremove($.view);
		// // $.view = null;
		// // $.view = Alloy.createController(args.importedView);
		// // //$.hadd($.newView);
	// // }
// // }
// 
// exports.setOptions = setOptions;
// exports.show = show;
// exports.hide = hide;
// exports.refresh = refresh;
// exports.dettach = dettach;
// exports.attach = attach;