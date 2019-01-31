(function($){
	$.SelectFy = function(){
		//初始化方法
	 	this.init = function(){
		 	selectfy.loadGaoyuan();
	 	}
	 	//加载第一个下拉框数据
		this.loadGaoyuan = function(){
            var data = [{"code":1,"name":"demo1"},{"code":2,"name":"demo2"},{"code":3,"name":"demo3"},{"code":4,"name":"demo4"}];
            $("#gaoyuan").html("");//清空
            var html = '<option value="0">全部</option>';
            for(var i = 0; i < data.length; i++){
                html += '<option value='+data[i].code+'>'+data[i].name+'</option>';
            }
            $("#gaoyuan").html(html);
			/*$.ajax({
        		type : "POST",
        		url : 'listOffice',
        		data :{"type":1,"parent_id":0},
        		success : function(data){
        			if(data){
        				$("#gaoyuan").html("");//清空
        				var html = '<option value="0">全部</option>';
    					for(var i = 0; i < data.length; i++){
    						html += '<option value='+data[i].code+'>'+data[i].name+'</option>';
    					}
    				}else{
    					alert("加载数据失败");
    				}
        			$("#gaoyuan").html(html);
        		}
        	});*/
		};
		//加载第二个下拉框数据
		this.loadZhongyuan = function(){
			var param = $("#gaoyuan").val();
            var data = [{"code":1,"name":"demo1"},{"code":2,"name":"demo2"},{"code":3,"name":"demo3"},{"code":4,"name":"demo4"}];
            $("#zhongyuan").html("");//清空
            var html = '<option value="0">全部</option>';
            for(var i = 0; i < data.length; i++){
                html += '<option value='+data[i].code+'>'+data[i].name+'</option>';
            }
            $("#zhongyuan").html(html);
			/*$.ajax({
        		type : "POST",
        		url : "listOffice",
        		data :{"type":1,"parent_id":param},
        		success : function(data){
        			if(data){
        				$("#zhongyuan").html("");//清空
        				var html = '<option value="0">全部</option>';
        				if(param != 0){
        					html += '<option value="-1">-</option>';
        					for(var i = 0; i < data.length; i++){
        						html += '<option value='+data[i].code+'>'+data[i].name+'</option>';
        					}
        				}else{
        					$("#jicengyuan").html(html);
        				}
    				}else{
    					alert("加载数据失败");
    				}
        			$("#zhongyuan").html(html);
        		}
        	});*/
		};
		//加载第三个下拉框数据
		this.loadJiyuan = function(){
			var param1 = $("#gaoyuan").val();
			var param2 = $("#zhongyuan").val();
            var data = [{"code":1,"name":"demo1"},{"code":2,"name":"demo2"},{"code":3,"name":"demo3"},{"code":4,"name":"demo4"}];
            $("#jicengyuan").html("");//清空
            var html = '<option value="0">全部</option>';
            for(var i = 0; i < data.length; i++){
                html += '<option value='+data[i].code+'>'+data[i].name+'</option>';
            }
            $("#jicengyuan").html(html);
			/*$.ajax({
        		type : "POST",
        		url :  "listOffice",
        		data : {"type":1,"parent_id":param2},
        		success : function(data){
        			if(data){
        				$("#jicengyuan").html("");//清空
        				var html = '<option value="0">全部</option>';
        				if(param2 != 0){
        					html += '<option value="-1">-</option>';
        					for(var i = 0; i < data.length; i++){
        						html += '<option value='+data[i].code+'>'+data[i].name+'</option>';
        					}
        				}
        				if(param2 == 0 || param1 == 0){
        					html = '<option value="0">全部</option>';
        				}
        				if(param2 == -1){
        					html = '<option value="-1">-</option>';
        				}
    				}else{
    					alert("加载数据失败");
    				}
        			$("#jicengyuan").html(html);
        		}
        	});*/
		};
		//提交
		this.submit = function(){
			var param1 = $("#gaoyuan").val();
			var param2 = $("#zhongyuan").val();
			var param3 = $("#jicengyuan").val();
			var jbfy = '';
			var type = 0;
			if(param1 == 0){//下载所有
				jbfy = 0;
				type = 2;
			}else{
				if(param2 == 0){//下载所有
					jbfy = param1;
					type = 2; 
				}else if(param2 == -1){//只下载自己
					type = 1;
					jbfy = param1;
				}else{
					if(param3 == 0){//下载所有
						type = 2;
						jbfy = param2;
					}else if(param3 == -1){//只下载自己
						type = 1;
						jbfy = param2;
					}else{
						type = 1;
						jbfy = param3;
					}
				}
			}
			var result = {"type":type,"jbfy":jbfy};
            $("#bnt_selectfy").val(JSON.stringify(result));
			return 	result;		
		};
        this.show = function(){
            var frame = window.parent.document.getElementById("frames");
            frame.setAttribute("rows","50%,10%,40%");
        };
	};
})(jQuery);
var selectfy = new jQuery.SelectFy();
$("#selectFy").bind("mouseover",selectfy.show);
$("#bnt_selectfy").bind("click",selectfy.submit);
$(function(){
    selectfy.init();
});