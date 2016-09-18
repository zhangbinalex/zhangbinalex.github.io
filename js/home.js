// JavaScript Document
$(document).ready(function(e) {
	
	var ogotop=$("#backtop");
	var ofback=$("#feedback");
	var odivfix=$(".fix_bot");
	
	
	
	var ajli=$(".job").find("li");
	var ajul=$(".job_i");
	ajli.each(function(index, element) {
	$(this).click(function(e) {
      	ajli.each(function(index, element) {
            $(this).removeClass("current");
        });
		ajul.each(function(index, element) {
            $(this).css("display","none");
        });
		ajli.eq(index).addClass("current");
		ajul.eq(index).css("display","block");
	    
    });
      
    });
	
	$.ajax({
        url: "hot_job.txt",
        type: 'GET',
		dataType:"JSON",
 
		
        success: function(data) {
			var allnode="";
			for(var i=0;i<data.lis.length;i++){
					
					var node='<li class="job_item">\
            	<div class="item_top">\
                	<div class="item_top_l">\
                    	<div class="item_name">\
                        	<h2><a href="">'+data.lis[i].j_name+'<span>'+data.lis[i].city+'</span></a> </h2>\
                            <span class="fl">'+data.lis[i].time+'</span>\
                        </div>\
                        <div>\
                        	<span class="salary fl">\
                            '+data.lis[i].salary+'\
                            </span>\
                            <span>'+data.lis[i].request+'</span>\
                            /\
                            <span>'+data.lis[i].education+'</span>\
                        </div>\
                    </div>\
                    <div class="item_top_r">\
                    	<div class="company_name">'+data.lis[i].company+'</div>\
                        <div class="company_type">\
                        	<span>'+data.lis[i].c_type+'</span>\
                            /\
                            <span>'+data.lis[i].finance+'</span>\
                        </div>\
                    </div>\
                </div>\
                <div class="item_bot">\
                	<div class="item_bot_l fl">\
                        '+data.lis[i].explain+'\
                    </div>\
                    <div class="item_bot_r fl">\
                    <span>'+data.lis[i].benefits1+'</span>\
                    <span>'+data.lis[i].benefits2+'</span>\
                    <span>'+data.lis[i].benefits3+'</span>\
                    </div>\
                </div>\
            </li>';
					allnode+=node;
				}
				$(".job_i").eq(0).append(allnode);
				
	$(window).scroll(function(e) {
        var scrollTop=$(document).scrollTop();
		var clientHeight=$(window).height();
		var documentHeight=$(document).height();
		
		if(scrollTop>=(documentHeight-clientHeight-70))
			{	
				var bo=scrollTop-(documentHeight-clientHeight-70)+"px"
				odivfix.css("bottom",bo);
				var bo2=scrollTop-(documentHeight-clientHeight-150)+"px";
				ofback.css("bottom",bo2);
				var bo1=scrollTop-(documentHeight-clientHeight-210)+"px"
				ogotop.css("bottom",bo1)
				}
			else
			{
				odivfix.css("bottom","0px");
				ogotop.css("bottom","140px");
				ofback.css("bottom","80px");
				}
		if(scrollTop==0)
		{
			ogotop.css("display","none")}
		else
		{
			
			ogotop.css("display","block")}
    });
	
        }
    });
	$.ajax({
        url: "new_job.txt",
        type: 'GET',
		dataType:"JSON",
 
		
        success: function(data) {
			var allnode1="";
			for(var i=0;i<data.lis.length;i++){
					
					var node1='<li class="job_item">\
            	<div class="item_top">\
                	<div class="item_top_l">\
                    	<div class="item_name">\
                        	<h2><a href="">'+data.lis[i].j_name+'<span>'+data.lis[i].city+'</span></a> </h2>\
                            <span class="fl">'+data.lis[i].time+'</span>\
                        </div>\
                        <div>\
                        	<span class="salary fl">\
                            '+data.lis[i].salary+'\
                            </span>\
                            <span>'+data.lis[i].request+'</span>\
                            /\
                            <span>'+data.lis[i].education+'</span>\
                        </div>\
                    </div>\
                    <div class="item_top_r">\
                    	<div class="company_name">'+data.lis[i].company+'</div>\
                        <div class="company_type">\
                        	<span>'+data.lis[i].c_type+'</span>\
                            /\
                            <span>'+data.lis[i].finance+'</span>\
                        </div>\
                    </div>\
                </div>\
                <div class="item_bot">\
                	<div class="item_bot_l fl">\
                        '+data.lis[i].explain+'\
                    </div>\
                    <div class="item_bot_r fl">\
                    <span>'+data.lis[i].benefits1+'</span>\
                    <span>'+data.lis[i].benefits2+'</span>\
                    <span>'+data.lis[i].benefits3+'</span>\
                    </div>\
                </div>\
            </li>';
					allnode1+=node1;
				}
				$(".job_i").eq(1).append(allnode1);
        }
    });
    var otxt=$("#search_txt");
	otxt.click(function()
	{
		otxt.attr("placeholder","搜索职位、公司或地点")
		})
	otxt.blur(function() {
        otxt.attr("placeholder","市场策划")
    });
	
	
	
	
	var ocity=$("#c_city");
	var oshadow=$("#shadow");
	var oshadowborder=$("#shadow_border");
	var oshadowcontent=$("#shadow_content");
	var oclose=$("#close")
	ocity.click(function(e) {
        oshadow.css("display","block");
		oshadowborder.css("display","block");
		oshadowborder.animate({width:"490px",height:"470px",left:"410px"},function(){
				oshadowcontent.css("display","block")
			})
    });
	oclose.click(function(e) {
         oshadow.css("display","none");
		oshadowborder.css("display","none");
		oshadowcontent.css("display","none");
		oshadowborder.css({"width":"560px","height":"410px","left":"370px"});
    });
	var omcity=$("#m_city");
	var acli=$("#change li");
	acli.each(function(index, element) {
		$(this).click(function(e) {
            oshadow.css("display","none");
		oshadowborder.css("display","none");
		oshadowcontent.css("display","none");
		oshadowborder.css({"width":"560px","height":"410px","left":"370px"});
		omcity.text($(this).text());
        });    
    });
	
	
	
	
	
	
	
	
	var ahdiv=$(".l_box");
	
	ahdiv.each(function(index, element) {
        $(this).mouseover(function(e) {
			
			 clearTimeout(ahdiv[index].timer)
			 ahdiv[index].timer1=setTimeout(function(){
				 	var ospan=ahdiv.eq(index).find(".blank_span");
					ospan.css({"height":ahdiv.eq(index).innerHeight()+"px","display":"block"})
					var ohdiv2=ahdiv.eq(index).find(".t_detail");
					ohdiv2.css("display","block");
					ahdiv.eq(index).css({"background":"white","border":"2px solid #C9CBCE"})
				 },200) ;
        });
		$(this).mouseout(function(){
			clearTimeout(ahdiv[index].timer1)
			 ahdiv[index].timer=setTimeout(function(){
				 	var ospan=ahdiv.eq(index).find(".blank_span");
					
					ospan.css("display","none");
					var ohdiv2=ahdiv.eq(index).find(".t_detail");
					ohdiv2.css("display","none");
					ahdiv.eq(index).css({"background":"#FAFAFA","border":"2px solid #FAFAFA"})
				 },200)
			})
		
    });
	
	
	var obimg=$(".b_bimg");
	var obli=obimg.children("li").eq(0);
	var osi=$(".b_r").children("i").eq(0);
	var ayin=$(".yin")
	
	var asimg=$(".b_simg").children("li")
	asimg.each(function(index, element) {
        $(this).mouseover(function(e) {
			ayin.each(function(index, element) {
                $(this).css("display","block")
            });
			ayin.eq(index).css("display","none")	
			osi.stop();
            osi.animate({top:55*index},150);
			obimg.stop();
			obimg.animate({top:-obli.height()*index},150)
			clearInterval(obimg.timer3);
			obimg.timer3=setInterval(function(){
				var obtop=parseInt(obimg.css("top"));
				var z;
				if(obtop==0)
				{z=0;}
				else
				{
				z=-obtop/obli.innerHeight();
				}
				
				if (obtop<=-2/3*obimg.innerHeight())
				{
					
					z=0;
					ayin.each(function(index, element) {
                $(this).css("display","block")
            });
			ayin.eq(z).css("display","none")
					obimg.animate({top:0},150);
					osi.animate({top:0},150);
					
					}
				else
				{
					z++;
					ayin.each(function(index, element) {
                $(this).css("display","block")
            });
			ayin.eq(z).css("display","none")
					obimg.animate({top:-obli.innerHeight()*z},150);
					osi.animate({top:55*z},150);
					
					}
			},5000)
        });
		obimg.mouseover(function(){
			
			clearInterval(obimg.timer3);
			})
		obimg.mouseout(function(){
			clearInterval(obimg.timer3);
			obimg.timer3=setInterval(function(){
				var obtop=parseInt(obimg.css("top"));
				var z;
				if(obtop==0)
				{z=0;}
				else
				{
				z=-obtop/obli.innerHeight();
				}
				
				if (obtop<=-2/3*obimg.innerHeight())
				{
					
					z=0;
					ayin.each(function(index, element) {
                $(this).css("display","block")
            });
			ayin.eq(z).css("display","none")
					obimg.animate({top:0},150);
					osi.animate({top:0},150);
					
					}
				else
				{
					z++;
					ayin.each(function(index, element) {
                $(this).css("display","block")
            });
			ayin.eq(z).css("display","none")
					obimg.animate({top:-obli.innerHeight()*z},150);
					osi.animate({top:55*z},150);
					
					}
			},5000)
			})
    });

		
		obimg.timer3=setInterval(function(){
				clearInterval(obimg.timer3);
				var obtop=parseInt(obimg.css("top"));
				var z;
				if(obtop==0)
				{z=0;}
				else
				{
				z=-obtop/obli.innerHeight();
				}
				
				if (obtop<=-2/3*obimg.innerHeight())
				{
					
					z=0;
					ayin.each(function(index, element) {
                $(this).css("display","block")
            });
			ayin.eq(z).css("display","none")
					obimg.animate({top:0},150);
					osi.animate({top:0},150);
					
					}
				else
				{
					z++;
					ayin.each(function(index, element) {
                $(this).css("display","block")
            });
			ayin.eq(z).css("display","none")
					obimg.animate({top:-obli.innerHeight()*z},150);
					osi.animate({top:55*z},150);
					
					}
			},5000)
		
	
	
	
	
	var afli=$("#four_move").children("li");
	afli.each(function(index, element) {
        enter($(this));
		leave($(this));
    });
	function enter(obj)
	{
		var ospan=obj.children("span").eq(0);
		obj.mouseenter(function(e) {
			var n=getN(obj,e);
			switch (n)
			{
				case 0:
					ospan.css({"left":"115px","top":"0"})
					break;
					
				case 1:
					ospan.css({"left":"0","top":"115px"})
					break;				
				case 2:
					ospan.css({"left":"-115px","top":"0"})
					break;					
				case 3:
					ospan.css({"left":"0","top":"-115px"})
					break;
			}
			ospan.stop();
			ospan.animate({top:"0",left:"0"},{duration:500,easing:"easeOutQuint"})
            
        });
		}
	function leave(obj)
	{
		var ospan=obj.children("span").eq(0);
		obj.mouseleave(function(e) {
			var n=getN(obj,e);
			switch (n)
			{
				case 0:
					var left1=115+"px";
					var top1="0";
					break;
					
				case 1:
					var left1="0";
					var top1=115+"px";
					break;
				
				case 2:
					var left1=-115+"px";
					var top1="0";
					break;
					
				case 3:
					var left1="0";
					var top1=-115+"px";
					break;
			}
			ospan.stop();
			ospan.animate({top:top1,left:left1},{duration:500,easing:"easeOutQuint"})
            
        });
		}	
		
	function getN(obj, ev)
	{	
		var scrollTop=$(document).scrollTop();
		
		var x=obj.offset().left+obj.innerWidth()/2-ev.clientX;
		var y=obj.offset().top+obj.innerHeight()/2-(ev.clientY+scrollTop);
		
		return Math.round((d2a(Math.atan2(y, x))+180)/90)%4;
	}
	
	function d2a(d)
	{
		return d*180/Math.PI;
	}
	
	
	ogotop.click(function(){
		
		$('html, body').animate({scrollTop:"0px"},"slow",function(){
			ogotop.css("display","none");
			})
		})
		
	var ofdiv=$(".f_link").eq(0);
	var ofbtn=$("#f_button");
	
	ofbtn.click(function(e) {
        if(ofbtn.text()=="收起")
		{
			
			ofdiv.addClass("hidden");
			ofbtn.html("展开<i></i>");
			var oi=ofbtn.children("i");
			oi.removeClass().addClass("xia");
			}
		else
		{
			
		
			ofdiv.removeClass("hidden");
			
			$(document).scrollTop($(document).height()-$(window).height())	
			
			ofbtn.html("收起<i></i>");
			var oi=ofbtn.children("i");
			oi.removeClass().addClass("shang");
			}
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
});

