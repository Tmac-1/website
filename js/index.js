$(function(){
    $('.close').on('click',function(){
        $('.nav_warp').css('height',0)
    })
    $('#menu').on('click',function(){
        $('.nav_warp').css('height',"100%")
    })
    $('.close').hover(function(){
        $(this).css('transform',' rotate(180deg)')
    },function(){
        $(this).css('transform',' rotate(0deg)')
    })
    $('.ul01').css('min-height', $('.imgItem').height())
    // console.log($(window).width())
    // 导航点击
    $('.layui-nav').on('click','.layui-nav-item a',function(){
      var filter = $(this)[0].dataset.filter;
    //   console.log(filter)
      $('.layui-nav-item').removeClass('layui-this');
      $(this).addClass('layui-this');
      if(filter == '*'){
        $('.imgItem').width("33.3%")
      }else{
        if( $(window).width() > 430){
            $(filter).width("33.3%")
        }else{
            $(filter).width("100%")
        }  
        $('.imgItem:not('+ filter +')').width(0)
      }
    })
    $('.lookMore_p1').on('click',function(){
        layer.msg('没有更多案例了~')
    })
    $(window).scroll(function() {
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        //scrollTop就是触发滚轮事件时滚轮的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log("滚动距离" + scrollTop);
        if(scrollTop > 400){
            $('.header_wrap').addClass('scroll_active')
        }else{
            $('.header_wrap').removeClass('scroll_active')
        }
    })
})