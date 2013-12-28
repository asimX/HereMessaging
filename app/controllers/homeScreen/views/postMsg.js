var APP = require("core");

$.thisWin.height = APP.deviceHeight *.3;
$.unameLbl.text = APP.user.uname;

$.taPost.addEventListener("change", function(e){
	$.countLbl.text= 162-$.taPost.value.length;
});
