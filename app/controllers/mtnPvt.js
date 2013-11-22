
var Cloud = require('ti.cloud');
var APP = require('core');
var ACS = require('acs');



var mentions =  Alloy.createController('mentions').getView();
var pvt =  Alloy.createController('private').getView();
    //mentions.visible = false;
    pvt.visible = false;
    $.mtnPvt.add(mentions);
    $.mtnPvt.add(pvt);
    
//$.mtnPvt.addEventListener('focus',function(){
   mentions.visible = true;
//});

 $.mHeaderNav1.addEventListener('click',function(){
   $.mHeaderNav1.image = "/images/mentios2SelectedIcon.png";
   $.mHeaderNav2.image = '/images/privatesIcon.png';
    //$.mHeaderNav2.backgroundColor ='';	
   mentions.visible = true;
   pvt.visible = false;
  	
});
 
 
 $.mHeaderNav2.addEventListener('click',function(){
   $.mHeaderNav1.image = "/images/mentios2Icon.png";
   $.mHeaderNav2.image = '/images/privatesSelectedIcon.png';
  // $.mHeaderNav2.backgroundColor ="";
   pvt.visible = true;
   mentions.visible = false;
   	
  });