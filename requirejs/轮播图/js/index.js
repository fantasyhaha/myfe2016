require(['jquery','carousel'],function($,Carousel){
		var car1 = new Carousel();
		car1.init({
			selector:'#div1',
			buttonStyle:'circle',
			speed:1000,
			imageData:['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg']
		});

		var car2 = new Carousel();
		car2.init({
			selector:'#div2',
			buttonStyle:'square',
			speed:2000,
			imageData:['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg']
		});

})