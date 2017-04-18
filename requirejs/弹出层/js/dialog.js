define(['jquery'],function($){
	return{
		defaultVal:{
			width:400,
			height:300
		},
		open:function(options){
		$.extend(this.defaultVal,options);	
			var str= '<div class="dialog-container">'
   						+'<div class="dialog-mask">'
							+'<div class="dialog-box">'
								+'<div class="head">'	
									+'<div class="lf"><h3 style="margin:0;">'+this.defaultVal.title+'</h3></div>'
									+'<div class="rt">[X]</div>'
								+'</div>'
								+'<div class="dialog-content">'+this.defaultVal.content+'</div>'
							+'</div>'
   						+'</div>'	
					+'</div>';
			$("body").append(str);
			$(".dialog-box").css({
				width:this.defaultVal.width,	
				height:this.defaultVal.height,
				'margin-left':-this.defaultVal.width/2,
				'margin-top':-this.defaultVal.height/2
			});
		},
		close:function(){
				$(".dialog-container").remove();
		}
	}
});