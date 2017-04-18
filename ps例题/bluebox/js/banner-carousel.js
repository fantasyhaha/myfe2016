define(['jquery'],function($){
	function Carousel(){
		this.defaultVal={
			speed:800,
			buttonStyle:'square'
		},
		this.$container=$('<div class="carousel-container"></div>');
		this.$content=$('<div class="carousel-content"></div>');
		this.$tab=$('<ul class="carousel-tab"></ul>');
		this.$arrow=$('<div class="carousel-arrow"></div>');
		this.$prev=$('<span class="lt"></span>');
		this.$next=$('<span class="gt"></span>');
		
	}
	Carousel.prototype.init = function(options){
			var iNow=0;    
			var _this=this;
			$.extend(this.defaultVal,options);
			this.$container.append(this.$content).append(this.$tab).append(this.$arrow);
			this.$arrow.append(this.$prev).append(this.$next);
			this.$container.css({
				height:this.defaultVal.height
			});
			this.$content.css({
				width:this.defaultVal.width,
				height:this.defaultVal.height
			});
			for(var i=0;i<this.defaultVal.imageData.length;i++){
				this.$content.append('<img class="'+(i == 0?'selected':'')+'" src="'+this.defaultVal.imageData[i]+'"></img>');
				this.$tab.append('<li class="'+(i == 0?'selected':'')+'">'+(i+1)+'</li>')
			}
			$(this.defaultVal.selector).append(this.$container);
			$("li",this.$tab).on("click",function(){
				changeImage($(this).index());
			});
			function changeImage(idx){
				$("li",_this.$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
				$('img',_this.$content).eq(idx).addClass('selected').siblings().removeClass('selected');

			}
			this.$prev.on('click',function(){
				iNow--;
				if(iNow == -1){
					iNow=_this.defaultVal.imageData.length-1;
				}
				changeImage(iNow);
			});
			this.$next.on('click',function(){
				iNow++;
				if(iNow == _this.defaultVal.imageData.length){
					iNow=0;
				}
				changeImage(iNow);
			})
			var timer;
			function run(){
			timer=setInterval(function(){
				_this.$next.trigger('click');
			},_this.defaultVal.speed);	
			};
			run();
			this.$container.hover(function() {
				clearInterval(timer);	
			}, function() {
				run();
			});
		}	
	return Carousel;
})