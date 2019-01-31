var Main = function(){
	var getAllData = function(){
		var frames = self.frames[0].frames;
		var obj = [];
		for(var i = 0; i < frames.length; i++){
			var bntId = "bnt_"+frames[i].name.toLowerCase();
			var bntObj = frames[i].document.getElementById(bntId);
			var data = null;
			if(bntObj != null){
				bntObj.click();
				data = bntObj.value;
			}
			var ot = {
				"name":frames[i].name.toLowerCase(),
				"bntData":data
			};
			obj.push(ot);
		}
		return obj;
	};
	this.getData = function(param,index){
		var objs = getAllData();
		int j = 0;
		for(var i = 0; i < objs.length; i++){
			if(param == objs[i].name){
				j++;
				if(index != null && index == j){
					return objs[i].bntData;
				}else{
					return objs[i].bntData;
				}
				
			}
		}
	};
	this.setData = function(param,value,index){
		var frames = self.frames[0].frames;
		for(var i = 0; i < frames.length; i++){
			var bntId = "bnt_"+frames[i].name.toLowerCase();
			var bntObj = frames[i].document.getElementById(bntId);
			if(bntObj != null && param == frames[i].name.toLowerCase()){
				bntObj.value = value;
				bntObj.click();
			}
		}
	};
}
var main = new Main();