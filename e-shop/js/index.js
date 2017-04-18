$(function(){
	var Product = function(id, name, price, img, quantity){
		this.id = id;
		this.name = name;
		this.price = price;
		this.img = img;
		this.quantity = 1;
	};
	var cart = {
		totalQuantity: 0,
        totalAmount: 0,
		productList:[],
        addCart: function(product){
			this.productList.push(product);
			this.totalAmount += parseFloat(product.quantity * product.price);
			this.totalQuantity += product.quantity;
			productComp.render();
        },
        removeCart: function(){

        }
	};
	var productComp = {
		$productList:$('#product-list'),
		init: function(){
			this.loadData();
			this.$productList.on("click",'.btn-add-cart',function(){
				var product = $(this).parents(".product-item").data("item-data");
				product.quantity = parseInt($(this).prev().val());
				cart.addCart(product);
			});
		},
		render: function(){
			$("#quantity").html(cart.totalQuantity);
			$("#money").html(cart.totalAmount);
		},
		loadData:function(){
			$.get('js/data.json',{},function(data){
				for (var i = 0; i < data.length; i++) {
					var product = new Product(data[i].product_id, data[i].product_name, data[i].product_price, data[i].product_img);
					var $product = $('<li class="product-item"><img src="'+product.img+'" alt="">\
											<div class="product_info">\
												<h3 class="product-name">'+product.name+'</h3>\
												<strong class="product-price">$'+product.price+'</strong>\
												<input type="text" class="quantity" value="'+product.quantity+'">\
												<button class="btn-add-cart">ADD</button>\
											</div>\
										</li>');
			$product.data("item-data",product);
			this.$productList.append($product);
				}
			}.bind(this),'json');
		},
		loadMore: function(){

		}
	}
	productComp.init();
})