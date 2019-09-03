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
})