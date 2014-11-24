---
layout: default
title: Posts
permalink: /posts/
---

<div class="home">

  <h1 class="page-heading">Posts</h1>
<hr>
    {% for post in site.posts %}
        <div class="post-title">
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>

        <small class="post-meta">Summary: {{ post.short }}</small>
	</div>
    
<hr>
    {% endfor %}
</div>
