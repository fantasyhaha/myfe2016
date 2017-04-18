require(['jquery','banner-carousel'],function($,Carousel){
		var car1 = new Carousel();
		car1.init({
			width:1002,
			height:420,
			selector:'.banner-content',
			buttonStyle:'circle',
			speed:1000,
			imageData:['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg']
		});

		var car2 = new Carousel();
		car2.init({
			width:1002,
			height:100,
			selector:'.clients-carousel',
			buttonStyle:'square',
			speed:2000,
			imageData:['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg']
		});

})