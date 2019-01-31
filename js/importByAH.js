var InputByAh = function(){
	
	this.submit = function(){
		var inputah = main.getData("inputah");
		console.log(inputah);
		var date = main.getData("singbledate");
		console.log(date);
		var s = "成功";
		main.setData("logregion",s);
	};
}
var inputbyah = new InputByAh();
$("#mainButton").bind("click",inputbyah.submit);