$(function () {
    //搜索框
    $('#inputSearch').on("focus", function () {
        if(this.value==this.defaultValue){
            this.value="";
        }
    }).on("blur",function () {
        if(this.value==""){
            this.value=this.defaultValue;
        }
    });

    //导航菜单

    $('#nav li').hover(function () {
        $(this).children('.jnNav').show();
    },function () {
        $(this).children('.jnNav').hide();
    });

    //大轮播图

    $("#jnImageroll div a").on("mouseover",function () {
        $(this).addClass('chos').siblings().removeClass('chos');

        $("#JS_imgWrap img").eq($(this).index()).fadeIn()
        .parent().siblings().children().fadeOut();

    });


    //热标

    $(".promoted").append('<s class="hot"></s>');


    //tooltip


    //小轮播图

    $("#jnBrandTab ul li").on("click", function () {
        $(this).addClass('chos').siblings().removeClass('chos');
    })

});
