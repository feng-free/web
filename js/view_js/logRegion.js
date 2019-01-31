var LogRegion = function(){
	this.show = function(){
		var frame = window.parent.document.getElementById("frames");
		frame.setAttribute("rows","10%,10%,90%");
	};
	this.submit = function(){
		var params = $("#bnt_logregion").val();
		$("#resultInfo").text(params);
	};
};
var logregion = new LogRegion();
$("#logRegion").bind("mouseover",logregion.show);
$("#bnt_logregion").bind("click",logregion.submit);
