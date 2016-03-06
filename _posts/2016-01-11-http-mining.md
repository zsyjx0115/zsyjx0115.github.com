---
layout: post
category : study
title: HTTP小爬虫
brief: 学习
tags : [HTTP, mining]
excerpt: 网络爬虫（又被称为网页蜘蛛，网络机器人，在FOAF社区中间，更经常的称为网页追逐者），是一种按照一定的规则，自动地抓取万维网信息的程序或者脚本。另外一些不常使用的名字还有蚂蚁、自动索引、模拟程序或者蠕虫。使用http模块实现小爬虫。
id: httpmining20160111
---
{% include JB/setup %}

网络爬虫（又被称为网页蜘蛛，网络机器人，在FOAF社区中间，更经常的称为网页追逐者），是一种按照一定的规则，自动地抓取万维网信息的程序或者脚本。另外一些不常使用的名字还有蚂蚁、自动索引、模拟程序或者蠕虫。使用http模块实现小爬虫。

## HTTP小爬虫

	var http = require('http');
	var url = "";
	http.get(url, function(res){
		var html = '';
		
		res.on('data', function(data){
			html += data;
		});
		
		res.on('end', function(){
			console.log(html);
		});
	}).on('error', function(){
		console.log('error');
	});

## 解析html结构

	var http = require('http');
	var cheerio = require('cheerio');//引入cheerio模块，需先安装这个外部模块到环境
	var url = "";
	http.get(url, function(res){
		var html = '';
		
		res.on('data', function(data){
			html += data;
		});
		
		res.on('end', function(){
			var courseData = filterHtml(html);
			printCourse(courseData);
		});
	}).on('error', function(){
		console.log('error');
	});
	//解析HTML函数
	function filterHtml(html){
		var $ = cheerio.load(html);
		var chapters = $("");
		var courseData = [];
		chapters.each(function(){
			var chapter = $(this);
			var chapterTitle = chapter.find('strong').text();
			var videos = chapter.find('.video').children('li');
			var chapterData = [{
				chapterTitle: chapterTitle,
				videos: []
			}];
			videos.each(function(){
				var video = $(this).find('.studyvideo');
				var videoTitle = video.text();
				var id = video.attr('href').split('video/')[1];
				chapterDate.videos.push({
					title: videoTitle,
					id: id
				});
			});
			courseData.push(chapterData);
		});
	}

	function printCourse(course){
		couse.forEach(function(item){
			var cTitle = item.chapterTitle;
			console.log(cTitle + '\n');
			item.videos.forEach(function(video){
				console.log('[' + video.id + ']' + video.title + '\n');
			});
		});
	}
