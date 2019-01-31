var SingbleFyName = function(){
	
	this.submit = function(){
		var selectfy = main.getData("selectfy");
		console.log(selectfy);
		var date = main.getData("singbledate");
		console.log(date);
		var s = "成功";
		main.setData("logregion",s);
		/*var path = "2018/11/21/2403/video_20181121_114524.mp4";
		main.setData("button",path);*/
	}
}
var singblefyname = new SingbleFyName();
$("#mainButton").bind("click",singblefyname.submit);