$(document).ready(function(){
	$(".link-box").on('mouseover',function(){
		$(this).addClass("link-hover");
	});
	$(".link-box").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
		$(this).removeClass("link-hover");
	});
	$(".post-heading>a").on('mouseover',function(){
		$(this).addClass("headingshake");
	});
	$(".post-heading>a").on('mouseout',function(){
		$(this).removeClass("headingshake");
	});

	$(document).scroll(function(){
		var $navbar = $(".navbar");
		var $welcome = $("#welcome");
		var height = $welcome.height();
		var scrollTop = $(document).scrollTop();
		if(height <=  scrollTop + 50){
			if(scrollTop < height + 80)
				$(document).scrollTop(height);
			$navbar.addClass("navbar-fixed");
			$(".container-content").css("margin-top","110px");
		}
		else{
			$navbar.removeClass("navbar-fixed");
		}
	})
})