---
layout: page
---
{% include JB/setup %}
<div>
  
</div>

<ul class="posts">
  {% for post in site.posts %}
    <li class="post-article">
      <div class="post-heading"><a href="{{ BASE_PATH }}{{ post.url }}">{{post.title}}</a></div>
      <div class="post-body">{{post.describe}}</div>
      <div class="date">
        <span class="year">{{ post.date | date: "%Y" }}</span>
        <span class="day">{{ post.date | date: "%d" }}</span>
        <span class="month">{{ post.date | date: "%m" }}</span>
      </div>
    </li>
  {% endfor %}
</ul>

## To-Do

This theme is still unfinished. If you'd like to be added as a contributor, [please fork](http://github.com/plusjade/jekyll-bootstrap)!
We need to clean up the themes, make theme usage guides with theme-specific markup examples.


