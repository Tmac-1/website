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
    $('#closePage').on('click',function(){
        console.log(111)
        window.opener=null;
		window.open('','_self');
		window.close();
    })
})