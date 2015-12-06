---
layout: post
category : lessons
title : overflow属性
brief: 学习
tags : [css]
excerpt:  overflow为CSS中设置当对象的内容超过其指定高度及宽度时如何管理内容的属性，规定当内容溢出元素框时发生的事情。
id: overflow20141205
---
{% include JB/setup %}

overflow为CSS中设置当对象的内容超过其指定高度及宽度时如何管理内容的属性，规定当内容溢出元素框时发生的事情。

## 需要overflow才能起作用的CSS属性

### CSS3中的resize拉伸
* both水平垂直拉伸
* horizontal水平方向拉伸
* vertical垂直方向拉伸

但是，此声明要想起作用，本元素overflow不能为visible

文本域默认`overflow:auto`，文本域拖拽区域默认大小为17px*17px，也是滚动条的尺寸

### text-overflow:ellipsis  
文本溢出省略号表示，浏览器兼容性也很好，必须与`overflow:hidden`共同存在


##overflow与锚点技术

###锚点定位必备条件
1.容器可滚动，overflow不能为visible

2.锚点元素在容器内

###锚点定位的触发
1.url地址中的锚链和锚点

2.可focus的锚点元素处于focus态

###锚点定位的作用
1.快速定位

2.实现选项卡技术，具体实现方式如下：

	<div class="box">
		<div class="list" id="one">1</div>
		<div class="list" id="two">2</div>
		<div class="list" id="three">3</div>
		<div class="list" id="four">4</div>
	</div>
	<div class="link">
		<a class="click" href="#one">1</a>
		<a class="click" href="#two">2</a>
		<a class="click" href="#three">3</a>
		<a class="click" href="#four">4</a>
	</div>

这样点击link盒子中的a链接即可跳至box盒子中的元素，可实现类选项卡效果。这种实现选项卡的方式虽然简单，但是存在很大的局限性：锚点定位的穿透性很强，会影响外部父元素的滚动位置，页面会产生跳动。故该方法只适用于单屏页面无需滚动的情况，此时制作选项卡效果。

