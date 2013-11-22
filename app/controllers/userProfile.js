var Cloud = require('ti.cloud');
//var Cloud = require('ti.cloud');
var APP = require('core');
var ACS = require('acs');



  var updateWin = null;
  var plateformwidth  = Ti.Platform.displayCaps.platformWidth; 
  var plateformheight = Ti.Platform.displayCaps.platformHeight;
      
      //$.profileScroll.bottom = $.footer.height;
      
     var args       = arguments[0];
     var uid        = args.uid;
     
  //  $.unameLbl.text = args.uname || "unknwn";
    ///$.emailLbl.text = args.uemail ||"No emailId";
 	
 	 
    var  userProfileView = Alloy.createController('userProfileView',args).getView();
         $.profileScroll.add(userProfileView);
 	 
   // var  statusView = Alloy.createController('accordianView').getView();
     //    $.profileScroll.add(statusView);
 	
    var  switchView = Alloy.createController('switchView').getView();
         $.profileScroll.add(switchView);
 	
 
 	
 ///});

 //switch view logic 
 /*
 $.switchView.visible = false;
 
 $.accordianbtn.addEventListener('click',function(){
   
   if($.switchView.visible == false){
   	 $.accordianbtn.image ="images/visible.png";
   	 $.switchView.visible = true;
   	 
   }else{
   	
   	$.accordianbtn.image ="images/hidden.png";
   	$.switchView.visible = false;
   	
       }
   	
  	
 });
 
 */
 
 
