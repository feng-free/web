var Left = function(){
	this.init = function(){
		var as = document.getElementsByTagName("a");
		for(var i = 0; i < as.length; i++){
				as[i].onclick = replacePage;
		}
	}
	var replacePage = function(){
		var url = this.dataset.url;
		var mainPage = window.parent.frames[2];
		mainPage.document.getElementsByTagName("iframe")[0].setAttribute("src", url);
		/*先删除后创建*/
		var allsuspects = mainPage.document.getElementsByTagName("script");
		for(var i = 0; i < allsuspects.length; i++){
			allsuspects[i].parentNode.removeChild(allsuspects[i]); 
		} 
		var mainjs = mainPage.document.createElement("script");
		mainjs.src = "js/main.js";
		mainPage.document.body.appendChild(mainjs);		
		var script = mainPage.document.createElement("script");
		script.src = "/js/"+url.substring(0,url.indexOf("."))+".js";
		mainPage.document.body.appendChild(script);
	};
}
var left = new Left();
document.onload = left.init();
