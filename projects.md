---
layout: page
title: Projects 
permalink: /projects/
---

####Projects List:


{% for project in site.data.projectsdb %}
<section class="panel panel-default">
<div class="panel-body">
<div class="site-title">
<a href="{{ project.url }}"> {{ project.name }} </a>
<small class="text"> {{ project.author }} </small>
<div> <a href="{{ project.url }}"><h5> <span class="glyphicon glyphicon-globe"></span>  Code</h5></a>  </div>




</div>
<p> {{ project.description }} </p>
    </div>
</section>


{% endfor %}
