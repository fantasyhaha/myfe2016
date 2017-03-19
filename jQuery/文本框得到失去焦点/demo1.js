/**
 * Created by admin on 2017/2/7.
 */
//$(function(){
//    $(':input').focus(function () {
//        $(this).addClass('focus');
//    }).blur(function () {
//        $(this).removeClass('focus');
//    })
//});

$(function(){
$(":input").focus(function(){
	  //$(this).addClass("focus").val(this.value==this.defaultValue?"":this.value);
	  $(this).addClass("focus");
	  if(/*this.value*/$(this).val() == this.defaultValue){
		  //$(this).val("");
		  this.value = "";
	  }
}).blur(function(){
	 $(this).removeClass("focus").val(this.value==""?this.defaultValue:this.value);
});
})