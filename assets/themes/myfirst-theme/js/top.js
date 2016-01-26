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


//search js function
(function(w,d,t,u,n,s,e){
	w['SwiftypeObject']=n;
	w[n]=w[n]||function(){
	  (w[n].q=w[n].q||[]).push(arguments);
	};
	s=d.createElement(t);
	e=d.getElementsByTagName(t)[0];
	s.async=1;
	s.src=u;
	e.parentNode.insertBefore(s,e);
	})(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');

_st('install','po5qdFZDk2T1AX6ThzTT','2.0.0');



// function sum(){
//     var array = arguments;
//     var result = 0;
//     for(var i=0;i<array.length;i++){
//        if(parseInt(array[i]))
//        	result += parseInt(array[i]);
//     }
//     console.log(result);
// }

// sum(1,2,3,false,null,"1.0");