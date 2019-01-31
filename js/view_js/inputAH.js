var InputAh = function(){
	this.submit = function(){
		var value = $("#inputah").val();
	};
}
var inputah = new InputAh();
$("#inputah").bind("click",inputah.submit);