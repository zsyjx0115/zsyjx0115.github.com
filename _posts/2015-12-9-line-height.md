---
layout: post
category : study
title: line-height详解
brief: 学习
tags : [CSS]
excerpt: 行高指的是文本行的基线间的距离（更简单来说，行高是指文字尺寸与行距之间的和）。而基线（Base line），指的是一行字横排时下沿的基础线，基线并不是汉字的下端沿，而是英文字母x的下端沿，同时还有文字的顶线（Top line）、中线（Middle line）和底线（Bottom line），用以确定文字行的位置。
id: lineheight20151209
---
{% include JB/setup %}


## 定义

行高，两行文字基线之间的距离。

基线？不同字体的基线不同，一般是x的下边缘位置

两行？两行的定义决定了一行的表现

行高可以让单行文本垂直居中，其实是近似居中，根据字体大小不同而偏离中心位置距离不同。

## 行内框盒子模型

所有内联元素样式表现都是该盒子模型。

	<p>这是一行普通的文字<em>hello world</em></p>

上述代码看似简单，其实包含四个盒子：

* 内容区域content area：是一种围绕文字看不见的盒子，大小与字体size有关，即选中文字显示的蓝色区域是content area；
* 内联盒子inline boxes：内联盒子不让内容成块显示，而是排成一行。如果外部有inline水平的标签，则属于内联盒子，如`<em>hello world</em>`；如果只有文字没有外部inline标签，则属于匿名内联盒子，如`这是一行普通的文字`；
* 行框盒子line boxes：每一行就是一个行框盒子，每个行框盒子又是由一个个内联盒子组成，上述代码是一个行框盒子，其中包含三个内联盒子；
* 包含盒子containing box：包含p标签在内的所有内容，此盒子由一行行的行框盒子组成

## line-height的高度机理

内联元素的高度是由line-height决定的。

行高由于其继承性，影响无处不在，即使单行文本也不例外；行高只是幕后黑手，**高度的表现不是行高**，而是由**内容区域**和**行间距**,但***内容区域高度+行间距=行高***

内容区域高度只与字号和字体有关，与行高没有关系；在simsun字体下，内容区域高度=font-size

行高决定了内联盒子的高度；行间距可大可小，行高不变的情况下，随着内容区域变化而变化，保证高度能够正好等于行高。

如果行框盒子里有多个行高不同的内联盒子组成呢？并不一定是最高元素的高度。

## line-height属性值

1. normal：默认属性值。跟着浏览器走，与元素字体关联。
2. number：使用数值作为行高值。***line-height = font-size X number***
3. length：使用具体长度值作为行高
4. percent：使用百分比。相对于设置了该行高属性元素的font-size大小来计算
5. inherit：继承IE8+。

应用差别

* line-height:1.5 所有可继承元素会根据自身的font-size值重新计算行高
* line-height:150%/1.5em 所有课继承元素不会重新计算行高，直接继承该元素的行高值

## 行高与图片

行高不会影响图片实际占用的高度，只是影响文字元素占用的高度。

## 实际应用

### 图片水平垂直居中（IE8+）

	.box{
		line-height: 300px;
		text-align: center;//水平居中
	}
	.box > img{
		veitical-align: center;//垂直居中
	}

### 多行文本水平垂直居中(IE8+)

多行文字水平垂直居中的实现与图片的实现一样，区别在于要把多行文字所在容器的display水平转换成inline-block，跟图片一样，以及重置外部继承的line-height和text-align属性值。

	.box{
		line-height: 300px;
		text-align: center;
	}
	.box > .text{
		display: inline-block;
		line-height: normal;//行高一定要更改，否则行间距跟父元素一样大！
		text-align: left;//多行文字左对齐
		vertical-align:center;
		max-width: 100%;
	}

### 使用行高来代替高度height

在IE6/IE7浏览器中，设置height会让元素haslayout，呈块状样式，占据整行，此时设置line-height代替height就不会占据整行，依然是内联元素样式。

