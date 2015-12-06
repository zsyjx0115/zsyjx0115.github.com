$(document).ready(function(){
	var $top = $(".top");
	var $win = $(window);
	$win.scroll(function(){
		var scrolltop = $win.scrollTop();
		var height = $win.height();
		if(scrolltop > height){
			$top.css("display","block");
		}
		else{
			$top.css("display","none");
		}
	});
	$top.on('click',function(){
		var scroll = $win.scrollTop();
		var dis = Math.floor(scroll / 4);
		var g = Math.floor(dis / 20);
		var time = setInterval(function(){
			if(scroll == 0){
				clearInterval(time);
			}
			if(scroll < 350){
				dis = 50;
				g = 0;
			}
			scroll -= dis;
			scroll = scroll < 0 ? 0 : scroll;
			$win.scrollTop(scroll);
			dis -= g;
			dis = dis < 50 ? 50 : dis;
			g = dis < 50 ? 0 : g + 50;
			console.log("dis:" + dis + " g" + g + "scroll "+scroll);
		},50);
	});
});	