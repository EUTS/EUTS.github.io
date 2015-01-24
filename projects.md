---
layout: page
title: Projects 
permalink: /projects/
---

#Have an idea for a project? Suggest your own.

One of the purposes of this society is to encourage students to become involved in open sourcing and to develop their team working skills. Below are a list of projects that you can contribute to: 


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
