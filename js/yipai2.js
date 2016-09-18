// JavaScript Document
$(document).ready(function(e) {
    var ogotop=$("#backtop");
	ogotop.click(function(){
		
		$('html, body').animate({scrollTop:"0px"},"fast",function(){
			ogotop.css("display","none");
			})
		})
	$(window).scroll(function(e) {
		 var scrollTop=$(document).scrollTop();
        if(scrollTop==0)
		{
			ogotop.css("display","none")}
		else
		{
			
			ogotop.css("display","block")}
    });	
	var obapp=$(".bot_app");
	var oqr=obapp.children("div").eq(0);
	obapp.mouseenter(function(e) {
		clearTimeout(oqr.timer)
		oqr.css("display","block");
		oqr.stop();
        oqr.animate({opacity:"1"},150);
    });
	obapp.mouseleave(function(e) {
		oqr.timer=setTimeout(function(){
				oqr.stop();
				oqr.animate({opacity:"0"},150,function(){
					oqr.css("display","none");
					});
			},200)
       
    });
	
	
	var op=$(".current").eq(0);
	var opc=$(".m_p_content").eq(0);
	var op1=$(".m_pro").eq(0)
	var op1c=$(".m_pro_content").eq(0);
	op.click(function(e) {
		op.addClass("current");
		op1.removeClass("current");
        opc.css("display","block");
		op1c.css("display","none");
		
    });
	op1.click(function(e) {
		op1.addClass("current");
		op.removeClass("current");
        opc.css("display","none");
		op1c.css("display","block");
		
    });
	var aanswer=$(".answer");
	var ali=$(".m_p_content").children("li");
	var alispan=ali.find("span");
	
	ali.each(function(index, element) {
        $(this).click(function(e) {
			ali.each(function(index, element) {
                $(this).css("background-color","");
            });
            aanswer.each(function(index, element) {
				if($(this).css("display")=="block")
				{
				alispan.eq(index).css("background-position","0 0px");	
               aanswer.eq(index).slideUp("fast");}
				}
				)
			if(aanswer.eq(index).css("display")=="none")
			{	
			aanswer.eq(index).slideDown("fast");
			alispan.eq(index).css("background-position","0 -25px");
			}
			/*ali.each(function(index, element) {
                $(this).css("background-color","");
            });
            aanswer.each(function(index, element) {
                $(this).css("display","none");
				
            });
			$(this).css("background-color","rgb(250,250,250)");
		 aanswer.eq(index).css("display","block");	 */
        });
    });
	
});
