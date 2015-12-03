$(document).ready(function() {
	//控制welcome page中菜单栏跟随页面滚动的位置变换
    $(document).scroll(function() {
        var $navbar = $(".navbar");
        var $welcome = $("#welcome");
        var height = $welcome.height();
        var scrollTop = $(document).scrollTop();
        if (height <= scrollTop + 50) {
            if (scrollTop < height + 80) $(document).scrollTop(height);
            $navbar.addClass("navbar-fixed");
            $(".container-content").css("margin-top", "120px");
        } else {
            $navbar.removeClass("navbar-fixed");
        }
    });

	//跳转链接添加动画效果
	var $linkbox = $(".link-box");
    $linkbox.on('mouseover', function() {
        $(this).addClass("link-hover");
    });
    $linkbox.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass("link-hover");
    });
    //post文章标题晃动动画
    var $heading = $(".post-heading>a");
    $heading.on('mouseover', function() {
        $(this).addClass("headingshake");
    });
    $heading.on('mouseout', function() {
        $(this).removeClass("headingshake");
    });
    //post文章左侧时间栏小动画
    var $date = $(".date");
    var $brief = $(".brief");
    $brief.on('mouseover', function(){
    	var $this = $(this);
    	$this.css("opacity", "1");
    	$this.siblings('.date').css("opacity", "0");
    	$this.siblings('.band').css({
    		'top' : '90px',
    		'opacity' : '1'
    	});
    });
    $brief.on('mouseout', function(){
    	var $this = $(this);
    	$this.siblings('.band').css({
    		'top' : '50px',
    		'opacity' : '0'
    	});
    	$this.css("opacity", "0");
    	$this.siblings('.date').css("opacity", "1");
    });
    //post文章底部的tag导航
    var $taglist = $(".taglist li");
    $taglist.each(function(){
    	var color = GenerateColor();
    	$(this).css("border-bottom-color",color);
    })
    $taglist.on('mouseover', function(){
    	var $this = $(this);
    	$this.find("a").css({
    		'opacity': '1',
    		'top': '-5px'
    	});
    });
    $taglist.on('mouseout', function(){
    	var $this = $(this);
    	$this.find("a").css({
    		'opacity': '0',
    		'top': '20px',
    		'transition-timing-function': 'ease-in'
    	});
    });

});

function GenerateColor(){
	var colorList = ["#E41B83", "#19D2A9", "#2875D0", "#F9AA21", "#DA9D82",
				"#DA2E0A", "#BC51EA", "#F53A81", "#3AE6F5","#CC71DE",
				"#EA76B2", "#62C2D5", "#AFD562", "#D6E9C6", "#AADA82"];
	var random = Math.floor(Math.random() * 15);
	return colorList[random];
}