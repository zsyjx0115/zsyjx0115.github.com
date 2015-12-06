var $likeimg = $("#ds-thread #ds-reset span.ds-icon-heart");
var $likebox = $("#ds-thread #ds-reset a.ds-like-thread-button");
$likebox.toggle(function(){
	$likeimg.css("background-position","0 -117px");
},function(){
	$likeimg.css("background-position","0 -130px");
});