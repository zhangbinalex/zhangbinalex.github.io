
$(document).ready(function(e) {
	
	var oqiyi=$("#goqiye");
	var ap=$(".header").children("p");
	var amenua=$(".m_wrap").find("a");
	var osul=$(".s_content");
	var osh2=$(".special").children("h2")
	oqiyi.click(function(e) {
        if($(this).html()=="我要招人")
		{
			oqiyi.html("我要看机会");
			ap.eq(0).html("互联网技术、产品、设计、运营、市场高端人才专场");
			ap.eq(1).html("1V1专业顾问服务");
			ap.eq(2).html("3年+工作经验、30W+年薪资深牛人任你选");
			$(".request").eq(0).html("申请招聘");
			amenua.eq(0).html("一拍首页");
			amenua.eq(1).html("使用攻略");
			osul.eq(0).css("display","none");
			osul.eq(1).css("display","block");
			osh2.html("霸主专享");
			}
		else
		{
			oqiyi.html("我要招人");
			ap.eq(0).html("[ 3年+工作经验，30W+年薪，互联网技术、产品、设计、运营、市场 ]");
			ap.eq(1).html("1V1专业顾问私人订制");
			ap.eq(2).html("限时展示，风尖互联网企业机会任你选");
			$(".request").eq(0).html("我要申请");
			amenua.eq(0).html("首页");
			amenua.eq(1).html("一拍攻略");
			osul.eq(0).css("display","block");
			osul.eq(1).css("display","none");
			osh2.html("大咖专场");
			}
			
			
    });
	
	
	
	var oshadow=$("#shadow");
	var oplay=$("#play");
	var oshadowbor=$("#shadow_border")
	var oshadowcon=$("#shadow_content")
	oplay.click(function(e) {
        oshadow.css("display","block");
		 oshadowbor.css("display","block");
		 oshadowbor.animate({width:"950px",height:"550px",left:"200px"},function(){
			 	oshadowcon.css("display","block");
				$("html, body").css("overflow","hidden");
			 })
		
    });    
	var oclose=$("#close");
	oclose.click(function(e) {
         oshadow.css("display","none");
		 oshadowbor.css({"display":"none","height":"0px","width":"0px","left":"50%"});
		 oshadowcon.css("display","none");
		 $("html, body").css("overflow","");
    });
	
	var oH=$("#offer")
	
		setInterval(function(){
			oH.stop();
		oH.animate({top:"-40px"},250,function(){
				oH.animate({top:"-30px"},250,function(){
					oH.animate({top:"-40px"},250,function(){
							oH.animate({top:"-30px"},250)
						})
					})
			})
		},2000)
		
		
		
		
		
			var oal=$("#move_left");;
	var oar=$("#move_right")
	var index=0;
	var oul=$(".e_ul").eq(0);
	var timer=null;
	oal.mouseover(function(e) {
        $(this).css("background-position","-36px -86px");
    });
	oal.mouseout(function(e) {
        $(this).css("background-position","-36px -26px");
    });
	oar.mouseover(function(e) {
        $(this).css("background-position","0px -86px");
    });
	oar.mouseout(function(e) {
        $(this).css("background-position","0px -26px");
    });
	
	function roll1(){
		clearInterval(timer)
	timer=setInterval(function(){
		if(index>=4)
		{
			index=0;
			oul.css("left","0px");
		}
		index++;
		
		
		oul.animate({left:(-index*1349)+"px"});
		
		 
		},5000)
	}
	roll1();
	oar.click(function(e) {
        clearInterval(timer);
		setTimeout(function(){
			roll1();
			},4000)
		if(index>=4)
		{
			index=0;
			oul.css("left","0px");
			}
		index++;
			oul.stop();
		oul.animate({left:(-index*1349)+"px"});
    });
	oal.click(function(e) {
        clearInterval(timer);
		setTimeout(function(){
			roll1();
			},4000)
		if(index<=0)
		{
			index=4;
			oul.css("left",-4*1349+"px");
			}
		index--;
		oul.stop();
		oul.animate({left:(-index*1349)+"px"});
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
	
	var ogotop=$("#backtop");
	ogotop.click(function(){
		
		$('html, body').animate({scrollTop:"0px"},"slow",function(){
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
});
