//搜索框

$(function () {
    $("#inputSearch").on("focus", function () {
        if(this.value==this.defaultValue){
            this.value="";
        }
    }).on("blur", function () {
        if(this.value==""){
        this.value=this.defaultValue;
        }
        })
});

//导航菜单

$("#nav li").hover( function () {
    $(this).children(".jnNav").show();
}, function () {
    $(this).children(".jnNav").hide();
});

//hot

$(".promoted").append('<s class="hot"></s>');

//大轮播图
$(".left a").on("mouseover", function () {
    $(this).addClass('chos').siblings().removeClass('chos');
    $(".left img").eq($(this).index()).fadeIn()
        .parent().siblings().children().fadeOut();
});

//网页换肤
$li= $("#skin li");
$li.click(function () {
    switchSkin(this.id);
});
function switchSkin(skinName){
    $("#"+skinName).addClass("selected").siblings().removeClass("selected");
    $("#cssfile").attr("href","styles/skin/"+ skinName +".css");
}
//小轮播图

$("#brandTab li").on("click", function () {
    $(this).addClass('chos').siblings().removeClass('chos');
    var idx=$("#brandTab li").index(this);
    showBrandList(idx);
    return false;
}).eq(0).click();
function showBrandList(index){
    var $rollobj=$("#brandList");
    var width= $rollobj.find("li").outerWidth();
    width=width*4;
    $rollobj.stop(true,false).animate({ left : -width*index},1000);
}