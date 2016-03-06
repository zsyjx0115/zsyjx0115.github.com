---
layout: post
category : study
title: 执行上下文
brief: 学习
tags : [javascript]
excerpt: 可以将“执行上下文”看做当前代码的运行环境或者作用域。每到调用执行一个函数时，引擎就会自动新建出一个函数上下文，换句话说，就是新建一个局部作用域，可以在该局部作用域中声明私有变量等，在外部的上下文中是无法直接访问到该局部作用域内的元素的。但是，内部的函数可以访问到外部上下文中的声明的变量。
id: context20160105
---
{% include JB/setup %}


## 执行上下文

可以将“执行上下文”看做当前代码的运行环境或者作用域。

每到调用执行一个函数时，引擎就会自动新建出一个函数上下文，换句话说，就是新建一个局部作用域，可以在该局部作用域中声明私有变量等，在外部的上下文中是无法直接访问到该局部作用域内的元素的。但是，内部的函数可以访问到外部上下文中的声明的变量。

定义时的上下文，执行时的上下文不一定是一样的

### 执行上下文堆栈

当javascript代码文件被浏览器载入后，默认最先进入的是一个全局的执行上下文。当在全局上下文中调用执行一个函数时，程序流就进入该被调用函数内，此时引擎就会为该函数创建一个新的执行上下文，并且将其压入到执行上下文堆栈的顶部。浏览器总是执行当前在堆栈顶部的上下文，一旦执行完毕，该上下文就会从堆栈顶部被弹出，然后，进入其下的上下文执行代码。这样，堆栈中的上下文就会被依次执行并且弹出堆栈，直到回到全局的上下文。

### 执行上下文的建立过程

1. 建立阶段(发生在当调用一个函数时，但是在执行函数体内的具体代码以前)
	* 建立变量，函数，arguments对象，参数
	* 建立作用域链
	* 确定this的值
2. 代码执行阶段:
	* 变量赋值，函数引用，执行其它代码

### 作用域提升

**在函数中声明的变量以及函数，其作用域提升到函数顶部。**

看下面的例子：

	(function() {

	   console.log(typeof foo); // function pointer
	   console.log(typeof bar); // undefined
	
	   var foo = 'hello',
	       bar = function() {
	           return 'world';
	       };
	
	   function foo() {
	       return 'hello';
	   }
	
	}());

上述代码定义了一个匿名函数，并且通过()运算符强制理解执行。那么我们知道这个时候就会有个执行上下文被创建，我们看到例子中马上可以访问foo以及bar变量，并且通过typeof输出foo为一个函数引用，bar为undefined。

为什么我们可以在声明foo变量以前就可以访问到foo呢？

因为在上下文的建立阶段，**先是处理arguments, 参数，接着是函数的声明，最后是变量的声明**。那么，发现foo函数的声明后，就会在variableObject下面建立一个foo属性，其值是一个指向函数的引用。当处理变量声明的时候，发现有var foo的声明，但是variableObject已经具有了foo属性，所以直接跳过。当进入代码执行阶段的时候，就可以通过访问到foo属性了，因为它已经就存在，并且是一个函数引用。

为什么bar是undefined呢？

因为bar是变量的声明，在建立阶段的时候，被赋予的默认的值为undefined。由于它只要在代码执行阶段才会被赋予具体的值，所以，当调用typeof(bar)的时候输出的值为undefined。

### apply 参数数组  和   call 参数列表

**改变上下文执行对象**，可以在自定义上下文中执行函数

作用：调用对象的一个方法，用另一个对象代替当前对象，以某个方法当作指定的某个对象的方法来执行。

	var pet={
	 words : '..',
	 speak : function(say){
		console.log(say + ' ' + this.words);
		}
	};
	var dog={
	 words : 'wang'
	};
	//让狗也能说一句话
	pet.speak.call(dog, 'speak');

通过call改变了执行上下文，将上下文由pet改为dog，'speak'是传递的参数列表


**利用apply和call也可实现继承**
	
	function Pet(words){
	 this.words = words;
	 this.speak = function(){
		console.log(this.words);
	   }	
	} 
	function Dog(words){
	 //实现继承
	 Pet.call(this,words);
	 //Pet.apply(this,arguments);
	}
	var dog = new Dog('wang');


	
