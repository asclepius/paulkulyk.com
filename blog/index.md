---
layout: default
title: ":jasonrudolph => :blog"
---
# {{ page.title }}

<div class="post-list">
  {% for post in site.posts %}
    <span class="title"><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></span>
    <span class="published_on">Published on {{ post.date | date: "%A, %B %d, %Y" }}</span>
  {% endfor %}
</div>