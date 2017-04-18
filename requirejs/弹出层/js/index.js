require(['jquery','Dialog2'],function($,Dialog){
	$("#btn").on("click",function(){
		var dialog = new Dialog();
		dialog.open({
			width:800,
			height:500,
			title:'sad',
			content:'vnfssnvknvsndf'
		});
	});

});