---
layout: page
title: Partners 
permalink: /partners/
---
<div calss="home">
<h4>Cool prople you should know about: </h4>

{% for partner in site.data.partnersdb %}
<section class="panel panel-default">
<div class="panel-body">
<div>
<a href="{{ partner.url }}"> {{ partner.name }} </a>
<small class="text"> {{ partner.short }} </small>
</div>
<p> {{ partner.description }} </p>
    </div>
</section>
 <hr>

{% endfor %}
</div>
