$(function(){
    $(window).scroll(function(event){
        var scrollTop=document.body.scrollTop;
        if(scrollTop>364){
            $(".mynav").css("background-color","#fff");
            $(".mynav a").css("color","#000");
            $(".mynav").css("box-shadow","0px 1px 10px rgb(244,244,244)");
        }else{
            $(".mynav").css("background-color","#030303");
            $(".mynav a").css("color","#fff");
            $(".mynav").css("box-shadow","0px 0px 0px #000");
        }        

    });
})