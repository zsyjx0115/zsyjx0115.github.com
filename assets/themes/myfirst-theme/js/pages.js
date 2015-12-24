$(document).ready(function(){
	/*
	**Achieve Page
	*/
	var $content = $(".span12");
	var total_height = $content.outerHeight();
	//alert(total_height);
	//插入中间的时间轴
	var $center = $("#timeline");
	var $line = $("<div id='centerline'></div>");
	$line.height(total_height);
	$line.css("left","50%");
	$line.prependTo($center);

	//设置时间轴上标签条的背景颜色
	var $achieves = $(".container .achieves");
	$achieves.each(function(){
		var achieves = $(this).find(".achieve");
		achieves.each(function(index){
			var $achieve = $(this);
			var color = GenerateColor();
			$achieve.css("background-color", color);
			$achieve.append("<div class='triangle'></div>");
			if(index % 2)
				$achieve.children().last().css("border-left-color", color);
			else
				$achieve.children().last().css("border-right-color", color);
		});
	});

	/*
	**Tags Page
	*/
	var $tagCenter = $(".tag-center");
	$tagCenter.each(function(){
		$this = $(this);
		var height = $this.parent().outerHeight();
		$this.height(height);
	});


	/*
	**Categories Page
	*/


	/*
	**Pages Page
	*/
});

function GenerateColor(){
	var colorList = ["#E41B83", "#D24A19", "#2875D0", "#F9AA21", "#DA9D82",
				"#DA2E0A", "#BC51EA", "#F53A81", "#2EC8D5","#CC71DE",
				"#EA76B2", "#62C2D5", "#AFD562", "#A769FF", "#AADA82"];
	var random = Math.floor(Math.random() * 15);
	return colorList[random];
}