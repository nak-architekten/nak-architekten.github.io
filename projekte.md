---
layout: projects
title: Projekte
permalink: /projekte/
---


<section id="project-navigator">
    <div class="container-fluid">
		<div class="row">
			<div class="col-xs-12">
				
				<nav class="col-fix-left">
				
					<header>
						<div id="header">
						    <div id="logo">
						    	<a href="/" class="logo">
							        <strong>Numrich Albrecht Klumpp</strong>
						    	</a>
						    </div>
							<nav id="menu">
					    		<a id="menu-projekte" href="/projekte/" class="no1 act btn btn-default">Projekte<span class="visible-xs-inline-block icon icon-arr-s">&nbsp;</span></a>
					    		<a href="/buero/" class="no2 btn btn-default">Büro</a>

								<div id="filterpanel">
								  <a class="act all" href="/projekte/#Alle">Alle Projekte</a>
{% comment %}
Die Reihenfolge der Filter repräsentiert eine inhaltliche Gewichtung. Somit ist diese fest vorgegeben.
{% endcomment %}
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tag_words = site_tags | split:',' | sort %}
{% for tag in tag_words %}
	{% if tag == "Schulen + Kitas" %}<a href="/projekte/#{{ tag | slugify }}">{{ tag }}</a>{% endif %}
{% endfor %}
{% for tag in tag_words %}
	{% if tag == "Sport" %}<a href="/projekte/#{{ tag | slugify }}">{{ tag }}</a>{% endif %}
{% endfor %}
{% for tag in tag_words %}
	{% if tag == "Wohnen + Arbeiten" %}<a href="/projekte/#{{ tag | slugify }}">{{ tag }}</a>{% endif %}
{% endfor %}
{% for tag in tag_words %}
	{% if tag == "Institute + Gesundheit" %}<a href="/projekte/#{{ tag | slugify }}">{{ tag }}</a>{% endif %}
{% endfor %}
{% for tag in tag_words %}
	{% if tag == "Wettbewerbe + Studien" %}<a href="/projekte/#{{ tag | slugify }}">{{ tag }}</a>{% endif %}
{% endfor %}
{% comment %}
Alle Filterkategorien die nicht in der Reihenfolge definiert sind, werden darunter und in alphabetischer Reihenfolge angezeigt.
{% endcomment %}
{% for tag in tag_words %}
	{% if tag != "Schulen + Kitas" and tag != "Sport" and tag != "Wohnen + Arbeiten" and tag != "Institute + Gesundheit" and tag != "Wettbewerbe + Studien" %}
	<a href="/projekte/#{{ tag | slugify }}">{{ tag }}</a>
	{% endif %}
{% endfor %}
								  <div class="clear"></div>
								 </div>

							</nav>
						</div>
					</header>	
				</nav>
			
				<div class="col-dyn-right col-no-padding">
			
					    <div id="project-tiles" class="container-fluid  col-no-padding">
							<div class="row">			

{% for post in site.categories.projekt %}

<div class="project-tile {% for tag in post.tags %}{{ tag | slugify }} {% endfor %}col-xs-12 col-sm-6 col-md-4 col-lg-3">
	<a href="{{ post.url | prepend: site.baseurl }}" data-image="{% for image in post.images limit:1 %}{{ image | prepend: site.url }}{% endfor %}">
		<div class="inner-wrap">
			<h3>{{ post.shorttitle }}</h3>
		</div>
	</a>
</div>

{% endfor %}

					</div>
				</div>
			</div>
		</div>
    </div>
</section>