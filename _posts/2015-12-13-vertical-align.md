---
layout: post
category : study
title: vertical-align详解
brief: 学习
tags : [CSS]
excerpt: vertical-align这个是设置元素的垂直排列的。该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。允许指定负长度值和百分比值。这会使元素降低而不是升高。在表单元格中，这个属性会设置单元格框中的单元格内容的对齐方式。
id: vertical20151213
---
{% include JB/setup %}

## 四类属性值

* 线类：baseline，top，bottom，middle
* 文本类：text-top，text-bottom
* 上标下标类：sub，super
* 数值百分比类：数值类20px，百分比类：20%

### 数值类和百分比类：

**共性：**

1. 都带数字
2. 都支持负值：margin，letter-spacing，word-spacing，vertical-align
3. 行为表现一致：数值类在baseline对齐基础之上进行上下的偏移量设置；百分比值是相对于行高line-height计算的（IE6/IE7不支持百分比值相对于小数行高）

## vertical-align起作用的前提

apply to： inline-level and 'table-cell' elements
应用于inline水平以及table-cell元素

**inline水平**

	inline: <img>, <span>, <strong>, <em>, 未知元素, ...
	inline-block: <input>(IE8+), <button>(IE8+), ...

**table-cell**

	<td>

默认状态下，图片、按钮、文字和单元格可以使用vertical-align

但是，display可以更改元素的显示水平，CSS声明也可以更改元素的显示水平（比如应用了float或者position:absolute会将元素改为display:block显示）

display:table-cell是自身才会起作用，即须与vertical-align一起使用在同一元素

	p{
		display: table-cell;
		vertical-align: middle;
	}

## vertical-align与line-height

vertical-align的百分比值是相对于line-height计算的。

比如在p段落中添加一个img图片，img图片上line-height:36px设置和vertical-align:baseline的默认设置，此时会发现图片与p父标签的底部有缝隙。为什么呢？

因为baseline对齐是相对于字母x的下边缘对齐的，而行高会影响x所处的位置。故解决办法如下：

1. 干掉vertical-align属性，即将img元素变为块状元素，display:block;
2. 更改baseline对齐方式，改为vertical-align:top/bottom/middle；
3. 干掉line-height,将行高设置为0；

标准里规定：**'inline-block'的基线是正常流中最后一个line box的基线，除非，这个line box 里面既没有line boxes 或者本身overflow属性有计算值不是visible，这种情况下基线是margin底边缘。**

## vertical-align线性类属性值（对齐方式相对父级元素）

**bottom：**

* inline/inline-block元素：元素底部和整行的底部对齐
* table-cell元素：单元格底部padding边缘和表格行的底部对齐

**top：**

* inline/inline-block元素：元素底部和整行的顶部对齐
* table-cell元素：单元格底部padding边缘和表格行的顶部对齐

**middle**

* inline/inline-block元素：元素的垂直中心点和父元素基线上二分之一的x的height处对齐（即近似垂直居中，元素在完全居中点稍微偏下处）设置font-size=0，即可实现完全垂直居中；或者在其后方添加一个内联元素并设置垂直居中，如img+span{vertical-align:middle}
* table-cell元素：单元格填充盒子相对于外面的表格行居中对齐；单元格里的实际高度是相同的，由最高的单元格的高度来决定；td单元格高度不足会用padding填充，故block元素在单元格内也可实现居中

## vertical-align文本类属性值

**text-top:**盒子的顶部和父级content area的顶部对齐（content area只和父元素的fontsize有关，是内容区域）

**text-bottom:**盒子的底部和父级content area的底部对齐

该对齐方式与前后元素没有任何关系，只与父级元素的font-size有关；与行高line-height也没有关系

**一般用在表情图片与文字对齐：**

若使用基线，则图片会偏上；使用顶部底部对齐，容易受其他内联元素影响，造成巨大定位偏差；使用中线是不错的选择，但需要恰好的字体大小，兼容性不是太好；使用文本底部就很合适了，不受行高以及其他内联元素影响。

## vertical-align上标下标类

**sub:**下标---降低盒子的基线到父级合适的下标基线位置

**super:**上标---提高盒子的基线到父级合适的上标基线位置


## 前后不一的作用机制

前后相邻元素的vertical-align的属性设置不一样，会有怎样的表现？

**关注当前元素和父级元素，前后相邻元素并没有直接影响。**

## 兼容性

IE6/IE7:middle解释有问题，认为图片与文字一体，可采用给文字加display:inline-block来解决

故尽量少用middle居中，可使用数值来设置，因为IE对默认baseline对齐解释一定是正确的。

