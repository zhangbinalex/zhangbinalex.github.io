// JavaScript Document
$(document).ready(function(e) {
	
	$.ajax({
        url: "yanzhi-item.txt",
        type: 'GET',
		dataType:"JSON",
 
		
        success: function(data) {
			var allnode="";
			for(var i=0;i<data.lis.length;i++){
					
					var node='<li>\
            	<div class="con_item clearfix">\
                	<div class="item_top">\
                    	<div class="item_img">\
                        	<a href="">\
                            	<img src="'+data.lis[i].src+'" />\
                            </a>\
                        </div>\
                        <span class="username">'+data.lis[i].user_name+'</span>\
                        <span class="userjob">'+data.lis[i].introduce+'</span>\
                        <span class="answer">回答了</span>\
                        <span class="time fr">'+data.lis[i].time+'</span>\
                                            </div>\
                    <h3><a href="">'+data.lis[i].title+'</a></h3>\
                    	<div class="item_main">\
                        	<div class="main_l">\
                            	<a href="">\
                                	<i></i>\
                                    <span>1</span>\
                                </a>\
                        </div>\
							<div class="main main_duan">\
                            <p class="answer_p">\
                                            '+data.lis[i].h_p+'<a href="javascriptt:;" class="show">展开</a>\
                                            </p>\
                             <div class="status">\
                                <span class="status_span">'+data.lis[i].comment+'条评论</span>\
                             </div>\
							 </div>\
							 <div class="main main_chang">\
                             		<p>'+data.lis[i].d_p+'<a href="javascriptt:;" class="hide">收起</a></p>\
                                	<div class="status">\
                                 		<span class="status_span ">发布于'+data.lis[i].time+'</span>\
                                		<span class="status_span lastspan">· '+data.lis[i].comment+'条评论</span>\
                             		</div>\
                             	</div>\
                         </div>\
                </div>\
            </li>';
					allnode+=node;
				}
				$(".con_l_ul").eq(0).children("li").eq(0).css("border","none");
				$(".con_l_ul").eq(0).append(allnode);
				var adiv_chang=$(".main_chang");
	
				var adiv_duan=$(".main_duan");
				var ahide=$(".hide");
				
				adiv_duan.each(function(index, element) {
					
					$(this).click(function(e) {
					
						$(this).css("display","none");
						adiv_chang.eq(index).css("display","block");
					});
				});
				ahide.each(function(index, element) {
					$(this).click(function(e) {
					
						adiv_chang.eq(index).css("display","none");
					adiv_duan.eq(index).css("display","block");
					});
					
				});
        }
    });
	
	
	var ohi=$(".hello").eq(0).children("span").eq(0)
	var mydate=new Date();
	
	var hours=mydate.getHours()

	if(hours<6||hours>18)
	{ohi.html("晚上好");
		}
	else if(hours>=6&&hours<12)
	{ohi.html("早上好")
		}
	else if(hours>=12&&hours<=18)
	{ohi.html("下午好");
		}
	
	
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
