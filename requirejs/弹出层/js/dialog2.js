define(['jquery'],function($){
	function Dialog(){
		this.defaultVal={
			width:400,
			height:300
		};
		Dialog.prototype.open = function(options){	
			this.$container= $('<div class="dialog-container"></div>');
   			this.$mask=$('<div class="dialog-mask"></div>');
			this.$box=$('<div class="dialog-box"></div>');
			this.$head=$('<div class="head"></div>');	
			this.$lf=$('<div class="lf"><h3 style="margin:0;"></h3></div>');
			this.$rt=$('<div class="rt">[X]</div>');
			this.$content=$('<div class="dialog-content"></div>');
			var _this=this;
			$.extend(this.defaultVal,options);
			this.$container.append(this.$mask).append(this.$box);
			this.$box.append(this.$head).append(this.$content.html(this.defaultVal.content))
			.css({
				width:this.defaultVal.width,	
				height:this.defaultVal.height,
				'margin-left':-this.defaultVal.width/2,
				'margin-top':-this.defaultVal.height/2
			})	
			// this.$content.html();
			this.$head.append(this.$lf.html(this.defaultVal.title)).append(this.$rt);
			$("body").append(this.$container);
			this.$rt.on("click",function(){
				_this.close();
			})
		};
		Dialog.prototype.close = function(){
				this.$container.remove();
		};
	};
	return Dialog;
});