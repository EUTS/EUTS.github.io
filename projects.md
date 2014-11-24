---
layout: page
title: Projects 
permalink: /projects/
---

####Projects List:
<hr>
{% for project in site.data.projectsdb %}
<div class="site-title">
<a href="{{ project.url }}"> {{ project.name }} </a>
<small class="text"> {{ project.author }} </small>
</div>
<p> {{ project.description }} </p>

<hr>
{% endfor %}
