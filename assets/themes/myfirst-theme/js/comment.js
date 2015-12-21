// var $likeimg = $("#ds-thread #ds-reset span.ds-icon-heart");
// var $likebox = $("#ds-thread #ds-reset a.ds-like-thread-button");
// $likebox.toggle(function(){
// 	$likeimg.css("background-position","0 -117px");
// },function(){
// 	$likeimg.css("background-position","0 -130px");
// });

$(document).ready(function() {
	// var loadtimer = setTimeout(function(){
 //      $(".waitload").css("display","block");
 //      $("body").css("overflow","hidden");
 //    },1000);
 //    $(window).load(function(){
 //      clearTimeout(loadtimer);
 //      $(".waitload").css("display","none");
 //      $(".navbar").addClass("navbar-fixed");
 //      $("body").css("overflow","auto");
 //    });

    var $md = $(".md-content");
    var $ptags = $md.find("p");
    // $ptags.each(function(index){
    // 	console.log("index: " + index);
    // 	var formula = $(this).html();
    // 	var copy = formula;
    // 	console.log(formula);
    // 	var matchs = new RegExp('[^//$]{1}\\$([^//$]+)\\$[^//$]{1}','g');
    // 	var result = matchs.exec(formula);
    // 	//console.log("result: " + result);
    // 	for(var i=0; result != null ; i++){
    // 		var subindex = result.index+1+2*i;
    // 		copy = copy.substr(0,subindex) + "$" + copy.substr(subindex);
    // 		//console.log("copy "+subindex + " " + copy);
    // 		subindex = subindex + result[1].length + 3;
    // 		copy = copy.substr(0,subindex) + "$" + copy.substr(subindex);
    // 		//console.log("copy "+subindex + " " + copy);
    // 		result = matchs.exec(formula);
    // 		//console.log("result: " + result);
    // 	}
    // 	$(this).html(copy);
    // 	// result = formula.match(matchs);
    // 	 console.log("copy: " + copy);
    // })
});