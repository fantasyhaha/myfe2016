/**
 * Created by admin on 2017/2/8.
 */
$(function () {
    $('.tab_menu li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tab_box div').eq($(this).index()).show().siblings().hide();
    })
});