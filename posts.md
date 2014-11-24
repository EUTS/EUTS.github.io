---
layout: default
title: Posts
permalink: /posts/
---

<div class="home">

Share your knowledge with others here! Write about a project you're working on, a new tool you've learned, or a tutorial to help others. To learn more on how to post check out this <a href="https://github.com/EUTS/EUTS.github.io#how-to-post">link</a>

<hr>
<br>
  <h1 class="page-heading">List of Articles:</h1>
  
    {% for post in site.posts %}
        <div class="post-title">
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>

        <small class="post-meta">Summary: {{ post.short }}</small>
	</div>
    
<hr>
    {% endfor %}
</div>
