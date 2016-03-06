---
layout: post
category : lessons
title : margin重叠问题
brief: 学习
tags : [CSS, margin]
excerpt: 两个毗邻盒子元素的margin值会共用，毗邻是指同级和嵌套元素，若这两个盒子之间没有非空内容、padding、border进行分隔，则都会共用margin值
id: marginoverlap20151205
---

## Margin叠加问题

两个毗邻盒子元素的margin值会共用，毗邻是指同级和嵌套元素，若这两个盒子之间没有非空内容、padding、border进行分隔，则都会共用margin值（貌似只是margin-top会共用）
边界重叠是指两个或多个盒子(可能相邻也可能嵌套)的相邻边界(其间没有任何非空内容、补白、边框)重合在一起而形成一个单一边界。

1. 水平边距永远不会重合。
2. 在规范文档中，2个或以上的块级盒模型相邻的垂直margin会重叠。最终的margin值计算方法如下：
   
   * 全部都为正值，取最大者；
   * 不全是正值，则都取绝对值，然后用正值减去最大值；
   * 没有正值，则都取绝对值，然后用0减去最大值。
   * ***注意：相邻的盒模型可能由DOM元素动态产生并没有相邻或继承关系。***

3. 相邻的盒模型中，如果其中的一个是浮动的（float），垂直margin不会重叠，并且浮动的盒模型和它的子元素之间也是这样。
4. 设置了overflow属性的元素和它的子元素之间的margin不被重叠（overflow取值为visible除外）。
5. 设置了绝对定位（position:absolute）的盒模型，垂直margin不会被重叠，并且和他们的子元素之间也是一样。
6. 设置了display:inline-block的元素，垂直margin不会重叠，甚至和他们的子元素之间也是一样。
7. 如果一个盒模型的上下margin相邻，这时它的margin可能重叠覆盖（collapse through）它。在这种情况下，元素的位置（position）取决于它的相邻元素的margin是否重叠。

   * 如果元素的margin和它的父元素的margin-top重叠在一起，盒模型border-top的边界定义和它的父元素相同。
   * 另外，任意元素的父元素不参与margin的重叠，或者说只有父元素的margin-bottom是参与计算的。如果元素的border-top非零，那么元素的border-top边界位置和原来一样。
   * 一个应用了清除操作的元素的margin-top绝不会和它的块级父元素的margin-bottom重叠。
   * ***注意，那些已经被重叠覆盖的元素的位置对其他已经重叠的元素的位置没有任何影响；只有在对这些元素的子元素定位时，border-top边界位置才是必需的。***
8. 根元素的垂直margin不会被重叠。


## 与父级元素重叠
示例如：

	body{width:100%; height:100%} 
	.container{width:90%;height:90%;margin-top:5%;}

上述实现结果body也会有margin-top外间距。

**解决方案**：

1. 父元素上加overflow:hidden
2. 两元素之间加上border或padding 
3. 子元素脱离文档流，float或者absolute(CSS2.1规定浮动元素和绝对定位元素不参与Margin折叠)

## 同级元素重叠：

前子元素的margin-bottom与后子元素的margin-top值会发生重叠，二者择其高者显示。


**解决方案**：

1. 子元素display:inline-block;变成行级元素
2. 增加父元素容器，将父元素容器设置overflow-hidden，让父元素生成BFC。
