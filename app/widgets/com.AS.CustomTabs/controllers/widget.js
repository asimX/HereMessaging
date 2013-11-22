var args = arguments[0] ||{};
var _tabs = null;
var _tabBarBackground = null;
var _screenParams = null;
var _controllers = [];
var _tabIcons = [];

var _views = {
	currentView: null,
	currentViewIndex: null,
};


/**
 * Initialize Navigation Widget - Should only be called once
 * @param {Object} _o
 * 		leftMenuController {String} string name of the view controller
 * 		rightMenuController {String} string name of the view controller
 */
exports.open = function(tabs, tabBar, tabView, screenParams) {
	_tabs = tabs || {};
	_tabBar = tabBar || {};
	_tabView = tabView || {};
	_screenParams = screenParams || {};
	//Ti.API.info('TABS LENGTH:  '+_tabs.length);
	//Ti.API.info('SCREEN PARAMS:  '+JSON.stringify(screenParams));
	
	// set TabView and TabBar sizes
	//$.tabBar.top=_tabBar.top; //_screenParams.height*.79;
	$.tabBar.height = _tabBar.height; // _screenParams.height*.2;
	$.tabBar.backgroundColor = _tabBar.bgColor;
	$.tabBar.bottom = "0dp";
	//$.tabBar.backgroundImage = _tabBar.backgroundImage.toString();
	
	$.tabView.height = _tabView.height;//_screenParams.height*.8;
	$.tabView.top = _tabView.top;
	
	// set up each of the tab views and icons
	for(var i=0;i<_tabs.length;i++){
		
 		try{
 	
		//Ti.API.info('controller in tab array:  '+_tabs[i].controller);
		//Ti.API.info('controller params:  '+JSON.stringify(_tabs[i].controllerParams));
		_controllers[i] = {
			view: Alloy.createController(_tabs[i].controller,_tabs[i].controllerParams).getView(),
			tabOrder: _tabs[i].tabOrder
		};
		
		//Ti.API.info('VIEW CREATED: '+JSON.stringify(_controllers[i]));
		var tabImageContainer = Ti.UI.createView({
			backgroundColor: "transparent",
			width: _screenParams.width/_tabs.length,
			layout: "absolute",
			tabOrder: _tabs[i].tabOrder,
			height: Ti.UI.FILL
			// borderColor: "red",
			// borderWidth: .5
			
		});
		
		_tabIcons[i] = {
			iconView: Ti.UI.createView({
				backgroundImage: _tabs[i].icon,
				backgroundColor: "transparent",
				width: _tabBar.height*.8,//(tabs.controller=="mtnPvt"||tabs.controller=="userProfile")?(_screenParams.width/_tabs.length)*.8:_tabBar.height*.7,//_screenParams.width/_tabs.length,
				tabOrder: _tabs[i].tabOrder,
				//bottom: 10,
				height: _tabBar.height*.8, //_screenParams.height*.18
				layout: "absolute"//top: 2
			}),
			icon: _tabs[i].icon,
			selectedIcon: _tabs[i].selectedIcon
		};
		
		if(_tabs[i].controller==="mtnPvt"||_tabs[i].controller==="userProfile"){
			_tabIcons[i].iconView.width = (_screenParams.width/_tabs.length)*.7;
			_tabIcons[i].iconView.height = _tabBar.height*.5;
		};
		
		tabImageContainer.add(_tabIcons[i].iconView);
		$.tabBar.add(tabImageContainer);
		//$.tabBar.add(_tabIcons[i].iconView);
		$.tabView.add(_controllers[i].view);
		
		if(tabs[i].tabOrder==0){
			_controllers[i].view.show();
			_tabIcons[i].iconView.backgroundImage = _tabIcons[i].selectedIcon;
			_views.currentView = _controllers[i];
			_views.currentViewIndex = i;
		}
		else{
			_controllers[i].view.hide();
		}
		
		//Ti.API.info("_controllers:  "+JSON.stringify(_controllers));
		//_tabIcons[i].iconView.addEventListener('click',function(e){
		tabImageContainer.addEventListener('click',function(e){
			if(_views.currentViewIndex==e.source.tabOrder){
				
			}
			else{
				_tabIcons[_views.currentViewIndex].iconView.backgroundImage = _tabIcons[_views.currentViewIndex].icon;
				_tabIcons[e.source.tabOrder].iconView.backgroundImage = _tabIcons[e.source.tabOrder].selectedIcon;
				_controllers[_views.currentViewIndex].view.hide();
				_controllers[e.source.tabOrder].view.show();
				_views.currentViewIndex=e.source.tabOrder;
			}
		});
		
		_tabIcons[i].iconView.addEventListener('click',function(e){
			if(_views.currentViewIndex==e.source.tabOrder){
				
			}
			else{
				_tabIcons[_views.currentViewIndex].iconView.backgroundImage = _tabIcons[_views.currentViewIndex].icon;
				_tabIcons[e.source.tabOrder].iconView.backgroundImage = _tabIcons[e.source.tabOrder].selectedIcon;
				_controllers[_views.currentViewIndex].view.hide();
				_controllers[e.source.tabOrder].view.show();
				_views.currentViewIndex=e.source.tabOrder;
			}
		});
		
		
		 }
   catch (e) {
        
        Ti.API.info("An Error:[" + e.message + "] has occured in line " + e.line + " \nsourceID:"+e.sourceId+"\nsourceURL:"+e.sourceURL);
       
       }	  
		
		
	}// end forloop
	
	
	
};