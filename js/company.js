// JavaScript Document
$(document).ready(function(e) {
	$.ajax({ 
	url:"company.txt",
	type:'GET',
	dataType:"JSON",
	success: function(data){
		var allnode="";
		for(var i=0;i<data.items.length;i++)
		{
			var node='<li>'+
                	'<div class="item_content">'+
                        '<div class="item_top clearfix">'+
                            '<img class="item_comimg" src="'+data.items[i].imgsrc+'" />'+
                            '<div class="item_top_right">'+
                            	'<h3>'+data.items[i].company+'</h3>'+
                                '<p><span>'+data.items[i].Interview_evaluation+'</span>&nbsp;&nbsp;条面试评价</p>'+
                                '<p><span>'+data.items[i].position+'</span>&nbsp;&nbsp;个在招职位</p>'+
                                '<p><span>'+data.items[i].deal+'</span>&nbsp;&nbsp;简历处理率</p>'+
                            '</div>'+
                        '</div>'+
                        '<p class="item_mid">'+
                        	''+data.items[i].company+''+
                        '</p>'+                     
                    '</div>'+
                    '<div class="item_bot">'+
                    	'<span class="b_l">'+
                        	'<img src="img/83.png" />'+data.items[i].type+''+
                        '</span>'+
                        '<span class="item_bot_mar">'+
                        	'<img src="img/84.png" />'+data.items[i].financing+''+
                        '</span>'+
                        '<span>'+
                        	'<img src="img/85.png" />'+data.items[i].city+''+
                        '</span>'+
                    '</div>'+
                '</li>'
			allnode+=node;
			}
		var ou=$(".con_item").eq(0);
		ou.append(allnode);
		
		
		$(".tcdPageCode").createPage({
	pageCount:20,
	current:1,
	backFn:function(p){
	
		if(p<=2)
		{
		$.ajax({ 
	url:"company1.txt",
	type:'GET',
	dataType:"JSON",
	success: function(data){
		var allnode1="";
		
		for(var i=0;i<data.im[p-1].items.length;i++)
		{
			var node1='<li>'+
                	'<div class="item_content">'+
                        '<div class="item_top clearfix">'+
                            '<img class="item_comimg" src="'+data.im[p-1].items[i].imgsrc+'" />'+
                            '<div class="item_top_right">'+
                            	'<h3>'+data.im[p-1].items[i].company+'</h3>'+
                                '<p><span>'+data.im[p-1].items[i].Interview_evaluation+'</span>&nbsp;&nbsp;条面试评价</p>'+
                                '<p><span>'+data.im[p-1].items[i].position+'</span>&nbsp;&nbsp;个在招职位</p>'+
                                '<p><span>'+data.im[p-1].items[i].deal+'</span>&nbsp;&nbsp;简历处理率</p>'+
                            '</div>'+
                        '</div>'+
                        '<p class="item_mid">'+
                        	''+data.im[p-1].items[i].company+''+
                        '</p>'+                     
                    '</div>'+
                    '<div class="item_bot">'+
                    	'<span class="b_l">'+
                        	'<img src="img/83.png" />'+data.im[p-1].items[i].type+''+
                        '</span>'+
                        '<span class="item_bot_mar">'+
                        	'<img src="img/84.png" />'+data.im[p-1].items[i].financing+''+
                        '</span>'+
                        '<span>'+
                        	'<img src="img/85.png" />'+data.im[p-1].items[i].city+''+
                        '</span>'+
                    '</div>'+
                '</li>'
			allnode1+=node1;
			}
		var ou=$(".con_item").eq(0);
		ou.html(allnode1);
		$('html, body').animate({scrollTop:"630px"},"slow",function(){
			ogotop.css("display","none");
			})
		}})
		}
		else
		{
			alert("没数据了。。就两页")}
		console.log(p);
	}
});
		
		
		
		
		}
	})
	
	
	
	
	
	
		var ali=$(".li_con");
	ali.each(function(index, element) {
		$(this).mouseenter(function(e) {
			var oliabs=ali.eq(index).children(".li_abs").eq(0);
			oliabs.css("display","block");
			oliabs.animate({opacity:"0.95"},200)
		});
		$(this).mouseleave(function(e) {
			var oliabs=ali.eq(index).children(".li_abs").eq(0);
			
			oliabs.animate({opacity:"0"},200);
			oliabs.css("display","none");
		});
	});
    	var oconul=$("#content_ul");
		var oal=$("#turn_left");
		var oar=$("#turn_right");
		var index=0;
		oal.click(function(e) {
			index++
			if(index!=-2)
			{
				oar.css("display","block")
				}
			if(index==0)
			{
				oal.css("display","none")}	
			oconul.stop();
            oconul.animate({left:index*1070-1+"px"},300)
        });
		oar.click(function(e) {
			index--
			if(index==-2)
			{
				oar.css("display","none")
				}
			if(index!=0)
			{
				oal.css("display","block")}	
			oconul.stop();
            oconul.animate({left:index*1070-1+"px"},300)
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
