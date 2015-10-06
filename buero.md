---
layout: office
title: Büro
permalink: /buero/
---

<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
                <nav class="col-fix-left">
                    <header>
                        <div id="header">
                            <div id="logo">
                                <a href="/" class="logo"><strong>Numrich Albrecht Klumpp</strong></a>
                            </div>

                            <nav id="menu">
                                <a href="/projekte/" id="menu-projekte" class="no1 btn btn-default">Projekte</a> 
                                <a href="/buero/" class="no2 act btn btn-default">Büro</a>
			                    <div id="filterpanel">
									<a class="hidden-xs" href="/buero/#Impressum">Impressum</a>
			                        <div class="hidden-xs clear"></div>
			                    </div>
                            </nav>
                        </div>
                    </header>

                </nav>

                <div class="col-dyn-right col-no-padding">
                    <div id="content" class="container-fluid col-no-padding">


                        <div class="row row-first">
                            <div class="col-xs-12">
                                <h3 class="visible-xs-inline-block">Kontakt</h3>
                            </div>

                            <div class="col-xs-12 col-md-6 col-lg-5 col-no-padding">
                                <div id="carousel-kontakt" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover">
                                    <!-- Indicators -->

                                    <ol class="carousel-indicators"></ol>

                                    <div class="carousel-inner" role="listbox">
                                        <div class="item loadfast active">
                                            <img class="img-responsive" src="{% if site.url contains 'localhost' %}{% else %}http://res.cloudinary.com/{{site.cloudinaryaccount}}/image/fetch/w_600,h_400,c_fill,q_88,f_auto,fl_progressive,fl_force_strip/{% endif %}{{site.url}}/buero/kontakt/1-IMG_6031-BEA.jpg">
                                        </div>
                                        <div class="item loadfast">
                                            <img class="img-responsive" src="{% if site.url contains 'localhost' %}{% else %}http://res.cloudinary.com/{{site.cloudinaryaccount}}/image/fetch/w_600,h_400,c_fill,q_88,f_auto,fl_progressive,fl_force_strip/{% endif %}{{site.url}}/buero/kontakt/2-IMG_6036-BEA.jpg">
                                        </div>
                                        <div class="item">
                                            <img class="img-responsive" src="{% if site.url contains 'localhost' %}{% else %}http://res.cloudinary.com/{{site.cloudinaryaccount}}/image/fetch/w_600,h_400,c_fill,q_88,f_auto,fl_progressive,fl_force_strip/{% endif %}{{site.url}}/buero/kontakt/3-IMG_6027-BEA.jpg">
                                        </div>
                                        <div class="item">
                                            <img class="img-responsive" src="{% if site.url contains 'localhost' %}{% else %}http://res.cloudinary.com/{{site.cloudinaryaccount}}/image/fetch/w_600,h_400,c_fill,q_88,f_auto,fl_progressive,fl_force_strip/{% endif %}{{site.url}}/buero/kontakt/4-IMG_6033-BEA.jpg">
                                        </div>
                                        <div class="item">
                                            <img class="img-responsive" src="{% if site.url contains 'localhost' %}{% else %}http://res.cloudinary.com/{{site.cloudinaryaccount}}/image/fetch/w_600,h_400,c_fill,q_88,f_auto,fl_progressive,fl_force_strip/{% endif %}{{site.url}}/buero/kontakt/5-IMG_6028-BEA.jpg">
                                        </div>
                                    </div>
                                    <!-- Controls -->
                                    <a class="left carousel-control" href="#carousel-kontakt" role="button" data-slide="prev"> <span class="sr-only">Previous</span></a> <a class="right carousel-control" href="#carousel-kontakt" role="button" data-slide="next"> <span class="sr-only">Next</span></a>
                                </div>
                            </div>

                            <div class="col-xs-12 col-md-6 col-lg-5 col-with-padding right">

								<h3 class="hidden-xs">Kontakt</h3>

                                <div itemscope itemtype="http://schema.org/LocalBusiness">
									<strong itemprop="name">Numrich Albrecht Klumpp</strong><br/>
									Gesellschaft von Architekten mbH<br/><br/>
									<address itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
										<span itemprop="streetAddress">Kohlfurter Straße 41-43</span><br/> 
										<span itemprop="postalCode">10999</span> <span itemprop="addressLocality">Berlin</span></address><br/><br/>
										<a href="mailto:info@nak-architekten.de">info@nak-architekten.de</a><br/>
										<a href="tel:++493061676920">+49 (0)30 616 76 92-0</a>
                                </div>

                            </div>
                        </div>
                        
                        
                        

                        <div class="row">
                            <div class="col-xs-12">
                                <h3 class="visible-xs-inline-block"><a href="#" onclick="$('#carousel-partner').carousel(0); $('#carousel-partner').carousel('pause'); return false;">Partner</a></h3>
                            </div>

                            <div id="carousel-partner" class="col-xs-12 col-no-padding carousel slide" data-ride="">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 col-md-6 col-lg-5 col-no-padding">
													<img class="img-responsive" src="{% if site.url contains 'localhost' %}{% else %}http://res.cloudinary.com/{{site.cloudinaryaccount}}/image/fetch/w_600,h_400,c_fill,q_88,f_auto,fl_progressive,fl_force_strip/{% endif %}{{site.url}}/buero/partner/01_Partner.jpg" />
												</div>
												<div class="col-xs-12 col-md-6 col-lg-5 col-with-padding right">
													<div>
														<h3 class="hidden-xs"><a href="#" onclick="$('#carousel-partner').carousel(0); $('#carousel-partner').carousel('pause'); return false;">Partner</a></h3>
														<p>
															Das Architektur- und Generalplanungsbüro wurde 1981 von Arthur Numrich und Werner Albrecht gegründet. Seit 2013 wird es geleitet von:
														</p>
                                                        <a href="#" onclick="$('#carousel-partner').carousel(1); $('#carousel-partner').carousel('pause'); return false;">&gt; Arthur Numrich</a>
                                                        <a href="#" onclick="$('#carousel-partner').carousel(2); $('#carousel-partner').carousel('pause');return false;">&gt; Grant Kelly</a>
                                                        <a href="#" onclick="$('#carousel-partner').carousel(3); $('#carousel-partner').carousel('pause');return false;">&gt; Tiemo Klumpp</a>
													</div>
												</div>
											</div>
										</div>
                                    </div>

                                    <div class="item">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 col-md-6 col-lg-5 col-no-padding">
													<img class="img-responsive" src="{% if site.url contains 'localhost' %}{% else %}http://res.cloudinary.com/{{site.cloudinaryaccount}}/image/fetch/w_600,h_400,c_fill,q_88,f_auto,fl_progressive,fl_force_strip/{% endif %}{{site.url}}/buero/partner/02_ArthurNumrich.jpg" />
												</div>
												<div class="col-xs-12 col-md-6 col-lg-5 col-with-padding right">
														<p>
															<strong class="justify-to-img">Arthur Numrich</strong>
															&nbsp; <span>Dipl.-Ing. Architekt</span>
														</p>

                                                        <dl>
                                                            <dt>1950</dt>       <dd>geboren in Landshut</dd>
                                                            <dt>1968</dt>       <dd>Maurergesellenprüfung</dd>
                                                            <dt>1972</dt>       <dd>grad. Ing., Polytechnikum Würzburg (Hochbau)</dd>
                                                            <dt>1976</dt>       <dd>Dipl.-Ing., Technische Universität Berlin (Architektur)</dd>
                                                            <dt>1976–78</dt>    <dd>Freie Universität Berlin, Studium der Soziologie</dd>
                                                            <dt>1978–80</dt>    <dd>Referendariat bei der Senatsverwaltung für Bau- & Wohnungswesen, 2. Staatsprüfung</dd>
                                                            <dt>seit 1981</dt>  <dd>Bürogemeinschaft mit Werner Albrecht</dd>
                                                            <dt>seit 2000</dt>  <dd>Partner in Numrich Albrecht Klumpp Gesellschaft von Architekten mbH</dd>
                                                        </dl>
												</div>
											</div>
										</div>
                                    </div>

                                    <div class="item">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 col-md-6 col-lg-5 col-no-padding">
													<img class="img-responsive" src="{% if site.url contains 'localhost' %}{% else %}http://res.cloudinary.com/{{site.cloudinaryaccount}}/image/fetch/w_600,h_400,c_fill,q_88,f_auto,fl_progressive,fl_force_strip/{% endif %}{{site.url}}/buero/partner/04_GarntKelly.jpg" />
												</div>
												<div class="col-xs-12 col-md-6 col-lg-5 col-with-padding right">
														<p>
															<strong class="justify-to-img">Grant Kelly</strong>
															&nbsp; <span>M. Arch.</span>
														</p>
				                                    <dl>                        
				                                        <dt>1968</dt>       <dd>geboren in Ottawa / Kanada</dd>
				                                        <dt>1997</dt>       <dd>Master of Architecture, University of Manitoba</dd>
				                                        <dt>1997–02</dt>    <dd>Mitarbeit im Büro Klaus Roth Architekten in Berlin</dd>
				                                        <dt>2002–04</dt>    <dd>Mitarbeit im Büro Wolfgang Latzel Architekten in Berlin</dd>
				                                        <dt>seit 2004</dt>  <dd>Mitarbeit im Büro Numrich Albrecht Klumpp Architekten</dd>
				                                        <dt>seit 2012</dt>  <dd>Geschäftsführer in Numrich Albrecht Klumpp Gesellschaft von Architekten mbH</dd>
				                                    </dl>
												</div>
											</div>
										</div>
                                    </div>

                                    <div class="item">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 col-md-6 col-lg-5 col-no-padding">
													<img class="img-responsive" src="{% if site.url contains 'localhost' %}{% else %}http://res.cloudinary.com/{{site.cloudinaryaccount}}/image/fetch/w_600,h_400,c_fill,q_88,f_auto,fl_progressive,fl_force_strip/{% endif %}{{site.url}}/buero/partner/03_TiemoKlumpp.jpg" />
												</div>
												<div class="col-xs-12 col-md-6 col-lg-5 col-with-padding right">
														<p>
															<strong class="justify-to-img">Tiemo Klumpp</strong>
															&nbsp; <span>Dipl.-Ing. (FH) Arch.</span>
														</p>
				                                    <dl>
				                                        <dt>1969</dt>       <dd>geboren in Waldkirch</dd>
				                                        <dt>1995</dt>       <dd>Dipl.-Ing. FH Augsburg (Fachrichtung Architektur)</dd>
				                                        <dt>1995</dt>       <dd>Mitarbeit im Büro Schweger + Partner in Hamburg</dd>
				                                        <dt>1996</dt>       <dd>Mitarbeit im Büro Karl Klumpp</dd>
				                                        <dt>1997</dt>       <dd>Mitarbeit im Büro Numrich + Albrecht</dd>
				                                        <dt>seit 2000</dt>  <dd>Partner in Numrich Albrecht Klumpp Gesellschaft von Architekten mbH</dd>
				                                    </dl>
												</div>
											</div>
										</div>
                                    </div>

                                </div>
                                <a class="left carousel-control" href="#carousel-partner" role="button" data-slide="prev"> <span class="sr-only">Zurück</span></a> 
                                <a class="right carousel-control" href="#carousel-partner" role="button" data-slide="next"> <span class="sr-only">Weiter</span></a>
                            </div>
                        </div>




                        <div class="row">
                            <div class="col-xs-12">
                                <h3 class="visible-xs-inline-block">Team + Aktivitäten</h3>
                            </div>

                            <div id="carousel-team" class="col-xs-12 col-no-padding carousel slide" data-ride="carousel">

                                <div class="carousel-inner" role="listbox">


{% assign counter = 0 %}
{% for post in site.categories.team %}

                                    <div class="item{% if counter == 0 %} active{% endif %}{% if counter == 0 %} loadfast{% endif %}{% if counter == 1 %} loadfast{% endif %}">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 col-md-6 col-lg-5 col-no-padding">
													<img class="img-responsive" src="{% if site.url contains 'localhost' %}{% else %}http://res.cloudinary.com/{{site.cloudinaryaccount}}/image/fetch/w_600,h_400,c_fill,q_88,f_auto,fl_progressive,fl_force_strip/{% endif %}{{ post.image | prepend: site.url }}"/>
												</div>
												<div class="col-xs-12 col-md-6 col-lg-5 col-with-padding right">
													<div>
															<h3 class="hidden-xs">Team + Aktivitäten</h3>
															<p>
															{{ post.title }}
															</p>
													</div>
												</div>
												<div class="next">
													<div class="container-fluid">
														<div class="row">
															<div class="col-xs-12 col-md-6 col-lg-5 col-md-offset-6 col-lg-offset-5 col-with-padding right">
																<span class="icon icon-arr-e">&nbsp;</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
                                    </div>

	{% assign counter = counter | plus: 1 %}
{% endfor %}

                                </div><!-- Controls -->
                                <a class="left carousel-control" href="#carousel-team" role="button" data-slide="prev"> <span class="sr-only">Previous</span></a> <a class="right carousel-control" href="#carousel-team" role="button" data-slide="next"> <span class="sr-only">Next</span></a>
                            </div>
                        </div>
                        
                        
                                                
						<div class="row" id="Preisgericht">
                            <div class="col-xs-12">
                                <h3>Preisgerichte</h3>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-5">
                            	<p>2015 // Akademie und Zentrale Deutscher Fußball-Bund // Frankfurt am Main <br/>
                            		<em>Deutscher Fußball-Bund e.V.</em>
                            	</p>
                            	<p>2014 // adidas – World of Sports – Stage V Büro // Herzogenaurach <br/>
                            		<em>adidas AG</em>
                            	</p>
                            	<p>2012 // Neubau Berufsschulzentrum Wetzlar <br/>
                            		<em>Kreisauschuss des Lahn-Dill-Kreises</em>
                            	</p>
                            	<p>2012 // Schalke 04 - Standortentwicklung Schalker Feld // Gelsenkirchen<br/>
                            		<em>FC Gelsenkirchen-Schalke 04 e.V.</em>
                            	</p>
                            	<p>2011 // Neubau Sukhavati Spiritual Care Center // Bad Saarow <br/>
                            		<em>Tertön Sogyal Stiftung</em>
                            	</p>
                            	<p>2010 // Neubau Sporthalle »Ruppiner Srasse« in Berlin-Mitte <br/>
                            		<em>Senatsverwaltung für Stadtentwicklung</em>
                            	</p>
                            	<p>2000 // Uniklinikum Leipzig <br/>
					<em>Freistaat Sachsen</em>
                            	</p>
                            	<p>Städtisches Klinikum St. Georg/Robert Koch Klinik in Leipzig <br/>
					<em>Stadt Leipzig (Dezernat Planung und Bau)</em>
                            	</p>
                            	<p> Prüfzentrum für Bahntechnik in Henningsdorf <br/>
					<em>TZB-Technologiezentrum Bahntechnik GmbH</em>
                            	</p>
                            	<p> Neubau des FU-Instituts für Informatik in Berlin-Zehlendorf <br/>
					<em>Senatsverwaltung für Bau- und Wohnungswesen</em>
                            	</p>
                            	<p> Neubau einer Sporthalle im Sportpark Berlin-Wilmersdorf <br/>
					<em>Senatsverwaltung für Bau- und Wohnungswesen</em>
                            	</p>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-5">
                            	<p> Neubau der Wohnsiedlung »Schlierbacher Weg« in Berlin-Neukölln <br/>
					<em>Senatsverwaltung für Bau- und Wohnungswesen</em>
                            	</p>
                            	<p> Neubau einer Wohnanlage und einer Kindertagesstätte in Berlin-Kreuzberg <br/>
					<em>S.T.E.R.N. Gesellschaft für behutsame Stadterneuerung Berlin mbH</em>
                            	</p>
                            	<p> Neubau eines Handels- und Dienstleistungszentrums in Berlin-Reinickendorf <br/>
					<em>Senatsverwaltung für Bau- und Wohnungswesen</em>
                            	</p>
                            	<p> Neubau der Seniorenwohnanlage »Seniorenhof Plagwitz« in Leipzig <br/>
					<em>Stadt Leipzig (Dezernat Planung und Bau)</em>
                            	</p>
                            	<p> Neubau der Wohnanlage »Grünauer Straße« in Berlin-Köpenick<br/>
					<em>Senatsverwaltung für Bau- und Wohnungswesen</em>
                            	</p>
                            </div>
						</div>

						<div class="row subtext-content" id="Impressum">
                            <div class="col-xs-12">
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-5">
                                <h3>Impressum</h3>
								<p>
									Numrich Albrecht Klumpp<br/>
									Gesellschaft von Architekten mbH
								</p>
								<p>
									Kohlfurter Straße 41-43<br/>
									10999 Berlin 
								</p>
								<p>
									Telefon: +49 (0)30 616 76 92-0<br/>
									Telefax: +49 (0)30 616 76 92-30<br/> 
									E-Mail: info@nak-architekten.de<br/>
								</p>
								<p>
									Umsatzsteueridentifikationsnummer: DE 261 999 384<br/>
									Vertretungsberechtigte: Arthur Numrich · Timo Klumpp · Grant Kelly<br/>
									Registergericht: Amtsgericht Berlin-Charlottenburg<br/>
									Registernummer: HRB 11 23 26 B
								</p>


								<h3>Urheberrecht</h3>
								<p>
Alle Texte, Bilder sowie das Layout dieser Website sind weltweit urheberrechtlich geschützt. Die Verwendung der Inhalte bedarf einer schriftlichen Genehmigung durch Numrich Albrecht Klumpp Gesellschaft von Architekten mbH. Die auf dieser Seite genannten Produktbezeichnungen, Marken oder Firmennamen sind Eigentum der jeweiligen Inhaber und unterliegen als solche dem gesetzlichen Warenzeichen-, Marken- und/oder patentrechtlichen Schutz. Ein Gegendarstellungsanspruch gilt nur im Sinne des §10 MDStV.
								</p>

                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-5">
								<h3>Datenschutzbestimmung</h3>
								<p>
									Das Hosting dieser Website erfolgt durch GitHub Pages (https://pages.github.com/). Durch den Zugriff können grundsätzlich Nutzungsdaten durch GitHub erhoben werden. Mehr Informationen für Erhebung und Analyse von Zugriffen finden Sie bei GitHub Pages (https://help.github.com/articles/github-privacy-policy/).
								</p>
								<p>
									Die Bildverwaltung dieser Website erfolgt durch Cloudinary (http://cloudinary.com/).  Durch den Zugriff können grundsätzlich Nutzungsdaten durch Cloudinary erhoben werden. Mehr Informationen für Erhebung und Analyse von Zugriffen auf GitHub Pages sind hier zu finden.
								</p>
								<p>
									Für die Erhebung und Analyse der Nutzung dieser Website wird Google Analytics verwendet. Zweck des Einsatzes ist die statistische Analyse der quantitativen und qualitativen Nutzung dieser Website. Es werden keine persönlichen Informationen erhoben. Mehr Informationen finden sie bei Google Analytics (http://www.google.com/intl/de/policies/privacy/). Um ein Tracking durch Google Analytics zu vermeiden nutzen Sie bspw. Tools wie Ghostery (https://www.ghostery.com/de/) oder Blockieren Sie das Tracking bei Google Analytics selbst (https://tools.google.com/dlpage/gaoptout?hl=de).
								</p>

                            </div>
						</div>

                </div>
            </div>
        </div>
    </div>
</section>
