---
layout: post
category : lessons
title : JavaScript判断图片加载完成的方法
brief: 学习
tags : [javascript, img]
excerpt: 有时需要获取图片的尺寸，这需要在图片加载完成以后才可以；或者监测页面加载情况，需要知道图片何时加载完成。判断图片加载完成有三种方式。
id: imgload20150515
---
{% include JB/setup %}

有时需要获取图片的尺寸，这需要在图片加载完成以后才可以；或者监测页面加载情况，需要知道图片何时加载完成。判断图片加载完成有三种方式，下面一一介绍。

## load事件

通过img元素的load事件来获知图片是否加载完成：

	<!DOCTYPE HTML>
	<html>
	<head>
	    <meta charset="utf-8">
	    <title>img - load event</title>
	</head>
	<body>
	    <img id="img1" src="http://pic1.win4000.com/wallpaper/f/51c3bb99a21ea.jpg" 
			style="width:500px;height:300px">
	    <p id="p1">loading...</p>
	    <script type="text/javascript">
			var img1 = document.getElementById("img1");
	        img1.onload = function() {
	            p1.innerHTML = 'loaded'
	        }
	    </script>
	</body>
	</html>

测试，所有浏览器都显示出了“loaded”，说明所有浏览器都支持img的load事件。

## readystatechange事件
通过通过img元素的readystatechange事件来获知图片是否加载完成，当img元素的加载状态发生变化时都会触发该事件，然后判断图片的状态是否已变成complete或loaded：

	<!DOCTYPE HTML>
	<html>
	<head>
	    <meta charset="utf-8">
	    <title>img - readystatechange event</title>
	</head>
	<body>
	    <img id="img1" src="http://pic1.win4000.com/wallpaper/f/51c3bb99a21ea.jpg"
			style="width:500px;height:300px">
	    <p id="p1">loading...</p>
	    <script type="text/javascript">
			var img1 = document.getElementById("img1");
	        img1.onreadystatechange = function() {
	            if(img1.readyState=="complete"||img1.readyState=="loaded"){
	                p1.innerHTML = 'readystatechange:loaded'
	            }
	        }
	    </script>
	</body>
	</html>

测试IE6-IE10支持该事件，其它浏览器不支持。

## img的complete属性
轮询不断监测img的complete属性，如果为true则表明图片已经加载完毕，停止轮询。

	<!DOCTYPE HTML>
	<html>
	<head>
	    <meta charset="utf-8">
	    <title>img - complete attribute</title>
	</head>
	<body>
	    <img id="img1" src="http://pic1.win4000.com/wallpaper/f/51c3bb99a21ea.jpg"
			style="width:500px;height:300px">
	    <p id="p1">loading...</p>
	    <script type="text/javascript">
	        function imgLoad(img, callback) {
	            var timer = setInterval(function() {
	                if (img.complete) {
	                    callback(img)
	                    clearInterval(timer)
	                }
	            }, 50)
	        }
			var img1 = document.getElementById("img1");
	        imgLoad(img1, function() {
	            p1.innerHTML('加载完毕')
	        })
	    </script>
	</body>
	</html>

该属性所有浏览器都支持。


# PS：页面加载百分比模拟小方法

在head里内嵌script标签，监听文件加载完成的百分比来模拟页面加载的百分比。

### css检测：
在最后一个外联样式表的最后加一个隐藏元素的样式，然后在js中轮询该隐藏元素的该样式属性值，若检测到该属性值已正确加载，就说明所有的样式表都加载完成。
也可采用同样的方法来监听每个样式表文件，从而得到加载css文件的完成百分比。

### js检测：
js也一样，最后一个引入js文件结尾为window或全局对象赋值，同样建立轮询，就可以检测脚本文件加载的完成情况

### 全部完成：
window.onload事件或$(document).load()