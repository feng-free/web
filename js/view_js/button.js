var Button = function(){
	this.submit = function(){
		var doc = self.parent.parent.document;
		var	button = doc.getElementById("mainButton");
		button.click();
	};
	this.setData = function(){
		var params = $("#bnt_button").val();
		if(params){
			$("#down").attr("href",params);
        	$("#down").attr("download",params.substring(params.lastIndexOf("/")+1));
        	$("#download").trigger("click");//自动触发下载链接
		}
		$("#bnt_button").val("");
	}
}
var button = new Button();
$("#button").bind("click",button.submit);
$("#bnt_button").bind("click",button.setData);