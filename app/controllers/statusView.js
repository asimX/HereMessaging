
var Cloud = require('ti.cloud');
//var Cloud = require('ti.cloud');
var APP = require('core');
var ACS = require('acs');
    
    Alloy.Globals.statusLbl  = $.statusLbl;
        
    Alloy.Globals.updateTime = $.updateTime;
    
  var plateformwidth  = Ti.Platform.displayCaps.platformWidth; 
  var plateformheight = Ti.Platform.displayCaps.platformHeight;
 
    
   var args       = arguments[0];
   var uid        = args.uid;
   $.nameLbl.text     = args.uname || "unknwn";
   
   $.statusLbl.text = args.msg  || "there is no msg for the time being";
   $.updateTime.text =args.time || "N/A";
   
 
 if(Ti.Platform.osname == 'android'){
      
      $. statusView.height = plateformheight/6;
  }else{
  	
  	 $. statusView.height = plateformheight/6;
  	
  	
  }
