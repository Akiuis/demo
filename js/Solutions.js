(function(){
	// 右上角开启下拉
	$('.header_country .on').click(function(){
		$(this).next().slideToggle(300)
	})
	// 搜索框
	$('.search_icon').click(function(){
		$(this).next().animate({
			width:"211px"
		})
		$('input[name=searchKey]').focus()
	})
	$('input[name=searchKey]').blur(function(){
		$(this).parent().parent().animate({
			width:"0"
		})
	})
	// 下侧滚动
	var nav_w = $(window).width();
	$('.nav > li').hover(function(){
		var n=$(this).index();
		var left=29+parseFloat($(this).css('padding-left'))*n*2;
		for(var i=0;i<n;i++){
			left+=$('.nav > li').eq(i).width();
		}
		if(i==6)
		{
			left+=10;
		}
		left += (nav_w - 1066);
		$('.nav_hover').stop().animate({'left':left});
		$('.subnav',this).stop(true,true).slideDown();
		
	},function(){
		var n=$('.nav > li.on').index();
		if(n==-1){
			left=-70;
		}
		else{
			var left=29+parseFloat($('.nav > li.on').css('padding-left'))*n*2;
			for(var i=0;i<n;i++){
				left+=$('.nav > li').eq(i).width();
			}
			left += (nav_w - 1066);
		}
		$('.nav_hover').stop().animate({'left':left});
		$('.subnav',this).stop().slideUp();

	});
	//展示第一个下拉框的信息
	$('.pro_subnav1 li').hover(function(){
		var i=$(this).attr('rel');
		if(i){
			$(this).addClass('on').siblings().removeClass('on');
			$('.pro_subnav2 ul').eq(i).stop().fadeIn().siblings().hide();
		}
	});
	if($('.pro_subnav1').length>0){
		$('.pro_subnav1 li:last a').css('border','none');
	}
	// 右侧
	$(".side_service a").hover(function(){
		$(".service_pull",this).toggle();
	});
	// 播放视频隐藏
	$('#shvideo').click(function(){
		$(this).parent().next().slideToggle()
	})
	//解决方案
	$('.solution_list').on('mouseover','li',function(){
		$('.hover',this).stop().show();
	});
	$('.solution_list').on('mouseleave','li',function(){
		$('.hover',this).stop().slideUp();
	});
	// 图片懒加载
	var flag = true
	window.onscroll = function(){
		var scrollTop = document.scrollTop || document.documentElement.scrollTop
		scrollTop += 400
		if(scrollTop>$('.solution_list').offset().top && flag){
			flag = false
			setTimeout(function(){
				$('.solution_list .img').css({
					backgroundImage:"url(../img/181756056597002160.jpg)"
				})
			},3000)
		}
	}
	imgLoad()
	function imgLoad(){
		var scrollTop = document.scrollTop || document.documentElement.scrollTop
		scrollTop += 400
		if(scrollTop>$('.solution_list').offset().top && flag){
			flag = false
			setTimeout(function(){
				$('.solution_list .img').css({
					backgroundImage:"url(../img/181756056597002160.jpg)"
				})
			},3000)
		}
	}
	// 添加新元素
	$('#solution_more').click(function(){
		var data=getSolutionlist();
		$div='';
        var rel = data.list;
		for(var i in rel){
			$div+='<li><a href="javascript:;">'
        		+'<div class="img" style="background-image:url('+rel[i].img+')"></div>'
            	+'<div class="main">'
            	+'<div class="title ellipsis" title="'+rel[i].title+'">'+rel[i].title+'</div>'
                +'<div class="con">'+rel[i].con+'</div>'  
                +'<div class="hover">'
				+'<i class="arrowT"></i>'
                +'<div class="title ellipsis" title="'+rel[i].title+'">'+rel[i].title+'</div>'
                +'<div class="con">'+rel[i].all_con+'</div>'
                +'</div></div></a></li>';
		}
		$('.solution_list').append($div);
		$(this).hide()
	})
	function getSolutionlist(){
		var obj = {}
		obj.list=[
			{
				title:"越南河内机场-T2航站楼",
			img: "../img/181756056597002160.jpg",
			con: "T2航站楼于2015年初投入使用，机场有两座指挥塔，其中包括一座90米高的指挥塔，这是中南半岛最高的空中交通管制塔。目前，这是越南面积最大、服务能力最大的机场。",
			all_con: "T2航站楼于2015年初投入使用，机场有两座指挥塔，其中包括一座90米高的指挥塔，这是中南半岛最高的空中交通管制塔。目前，这是越南面积最大、服务能力最大的机场。"
			},
			{
				title:"越南河内机场-T2航站楼",
			img: "../img/181756056597002160.jpg",
			con: "T2航站楼于2015年初投入使用，机场有两座指挥塔，其中包括一座90米高的指挥塔，这是中南半岛最高的空中交通管制塔。目前，这是越南面积最大、服务能力最大的机场。",
			all_con: "T2航站楼于2015年初投入使用，机场有两座指挥塔，其中包括一座90米高的指挥塔，这是中南半岛最高的空中交通管制塔。目前，这是越南面积最大、服务能力最大的机场。"
			},
			{
				title:"越南河内机场-T2航站楼",
			img: "../img/181756056597002160.jpg",
			con: "T2航站楼于2015年初投入使用，机场有两座指挥塔，其中包括一座90米高的指挥塔，这是中南半岛最高的空中交通管制塔。目前，这是越南面积最大、服务能力最大的机场。",
			all_con: "T2航站楼于2015年初投入使用，机场有两座指挥塔，其中包括一座90米高的指挥塔，这是中南半岛最高的空中交通管制塔。目前，这是越南面积最大、服务能力最大的机场。"
			},
			{
				title:"越南河内机场-T2航站楼",
			img: "../img/181756056597002160.jpg",
			con: "T2航站楼于2015年初投入使用，机场有两座指挥塔，其中包括一座90米高的指挥塔，这是中南半岛最高的空中交通管制塔。目前，这是越南面积最大、服务能力最大的机场。",
			all_con: "T2航站楼于2015年初投入使用，机场有两座指挥塔，其中包括一座90米高的指挥塔，这是中南半岛最高的空中交通管制塔。目前，这是越南面积最大、服务能力最大的机场。"
			},
			{
				title:"越南河内机场-T2航站楼",
			img: "../img/181756056597002160.jpg",
			con: "T2航站楼于2015年初投入使用，机场有两座指挥塔，其中包括一座90米高的指挥塔，这是中南半岛最高的空中交通管制塔。目前，这是越南面积最大、服务能力最大的机场。",
			all_con: "T2航站楼于2015年初投入使用，机场有两座指挥塔，其中包括一座90米高的指挥塔，这是中南半岛最高的空中交通管制塔。目前，这是越南面积最大、服务能力最大的机场。"
			},
			{
				title:"越南河内机场-T2航站楼",
			img: "../img/181756056597002160.jpg",
			con: "T2航站楼于2015年初投入使用，机场有两座指挥塔，其中包括一座90米高的指挥塔，这是中南半岛最高的空中交通管制塔。目前，这是越南面积最大、服务能力最大的机场。",
			all_con: "T2航站楼于2015年初投入使用，机场有两座指挥塔，其中包括一座90米高的指挥塔，这是中南半岛最高的空中交通管制塔。目前，这是越南面积最大、服务能力最大的机场。"
			}
		]
		return obj
	}
})()
