// var $likeimg = $("#ds-thread #ds-reset span.ds-icon-heart");
// var $likebox = $("#ds-thread #ds-reset a.ds-like-thread-button");
// $likebox.toggle(function(){
// 	$likeimg.css("background-position","0 -117px");
// },function(){
// 	$likeimg.css("background-position","0 -130px");
// });

$(document).ready(function() {
	var loadtimer = setTimeout(function(){
      $(".waitload").css("display","block");
      $("body").css("overflow","hidden");
    },1000);
    $(window).load(function(){
      clearTimeout(loadtimer);
      $(".waitload").css("display","none");
      $(".navbar").addClass("navbar-fixed");
      $("body").css("overflow","auto");
    });
});