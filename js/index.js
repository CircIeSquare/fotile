/**
 * Created by hxsd on 2016/10/8.
 */
$(function(){
    //banner背景切换
    var images=["images/banner.png","images/banner1.png","images/banner2.png","images/banner3.png","images/banner4.png","images/banner5.png"];
    var index=1;
    setInterval(function(){
        if(index==images.length){
            index=0;
        }
        $("#banner").find(".background").animate({opacity:0},1500,function(){
            $(this).css("backgroundImage",'url("'+images[index]+'")').animate({opacity:1},1500);
            index++;
        });
    },11500);

    //products
    //缓存tab
    var $tab=$("#products .picture").find("img");
    var $btn=$("#products .btn_nav1").find("li");
    var $count=$("#products .count .num1");
    var $total=$("#products .count .num2");
    var $pre=$("#products .btn_nav2:first-child li");
    var $next=$("#products .btn_nav2:last-child li");
    var num=0;

    $tab.eq(0).show();
    $total.text("/"+$tab.length);
    $btn.each(function(index){
        $(this).on("mouseover",function(){
            $(this).addClass("active");
            $(this).siblings().removeClass();
            //切换要显示的img
            $tab.eq(index).stop().fadeIn().siblings().hide();
            $count.text(index+1);
        });
    })

})