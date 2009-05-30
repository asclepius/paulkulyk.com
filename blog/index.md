---
layout: default
title: ":jasonrudolph => :blog"
---
<a href="http://feeds.feedburner.com/jasonrudolph" title="Jason Rudolph - Atom/RSS Feed">
  <img src="/images/rss-icon-traditional-32.png" alt="RSS" style="float: right;"/>
</a>

# {{ page.title }}

<ul class="posts">
  {% for post in site.posts %}
    <li>
      <span class="title"><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></span>
      <span class="published_on">Published on {{ post.date | date: "%A, %B %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>