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
    {% include post-li.html %}
  {% endfor %}
</ul>