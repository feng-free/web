var SingbleDate = function(){
	this.show = function(){
		var frame = window.parent.document.getElementById("frames");
	    frame.setAttribute("rows","10%,50%,40%");
	};
	this.submit = function(){
		var date = $("#date").val();
		$("#bnt_singbledate").val(date);
	}
	this.hide = function(){
		var frame = window.parent.document.getElementById("frames");
		frame.setAttribute("rows","10%,10%,90%");
	};
}
var singbledate = new SingbleDate();
$("#singbleDate").bind("mouseover",singbledate.show);
$("#bnt_singbledate").bind("click",singbledate.submit);