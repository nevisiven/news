import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render (){
    return (
      <div classNameName="App">
	<header id="home">
		<div className="bg-img" style={{backgroundImage: "url('https://wordpress.accuweather.com/wp-content/uploads/2020/03/CoronavirusAnimation.gif')"}}>
			<div className="overlay"></div>
		</div>
		<nav id="nav" className="navbar nav-transparent">
			<div className="container">
				<div className="navbar-header">
					<div className="navbar-brand">
						<a href="index.html">
							<img className="logo" src="img/marketing.png" />
						</a>
					</div>

					<div className="nav-collapse">
						<span></span>
					</div>
				</div>

				<ul className="main-nav nav navbar-nav navbar-right">
					<li><a href="#home">Home</a></li>
					<li><a href="#about">Environment</a></li>
					<li><a href="#team">Flights</a></li>
					<li><a href="#blog">Recent</a></li>
					<li><a href="#portfolio">CO2</a></li>
					<li><a href="https://sleepy-newton-f8cfc9.netlify.app/">Go Back</a></li>
				</ul>

			</div>
		</nav>
		<div className="home-wrapper">
			<div className="container">
				<div className="row">

					<div className="col-md-10 col-md-offset-1">
						<div className="home-content">
							<h1 className="white-text">News Covid19-Impact</h1>
							<p className="white-text">The COVID-19 pandemic is a crisis that affects everyone in a way or another!
							</p>
						</div>
					</div>

				</div>
			</div>
		</div>

	</header>

	<div id="about" className="section md-padding">

		<div className="container">

			<div className="row">

				<div className="section-header text-center">
					<h2 className="title">Environment Impact</h2>
				</div>
				<div className="col-md-4">
					<div className="about">
					    <i className="fa fa-trash"></i>
						<h3>More Plastic Waste</h3>
						<p>This new normal means mountains of single-use plastic—and few places to put it but the dump.</p>
						<a href="https://www.wired.com/story/coronavirus-pandemic-recycling-crisis/">Read more</a>
					</div>
				</div>

				<div className="col-md-4">
					<div className="about">
						<i className="fa fa-cutlery"></i>
						<h3>Food Waste</h3>
						<p>23 Organizations Eliminating Food Waste During COVID-19
</p>
						<a href="https://www.ecowatch.com/stop-food-waste-day-organizations-2645871951.html?rebelltitem=1#rebelltitem1">Read more</a>
					</div>
				</div>

				<div className="col-md-4">
					<div className="about">
						<i className="fa fa-medkit"></i>
						<h3>Medical Waste</h3>
						<p>The COVID-19 pandemic is generating tons of medical waste
</p>
						<a href="https://www.theverge.com/2020/3/26/21194647/the-covid-19-pandemic-is-generating-tons-of-medical-waste">Read more</a>
					</div>
				</div>

			</div>

		</div>

	</div>

	<div id="numbers" className="section sm-padding">

		<div className="bg-img" style={{backgroundImage: "url('./img/bck1.jpg')"}}>
			<div className="overlay"></div>
		</div>

		<div className="container">

			<div className="row">

				<div className="col-sm-3 col-xs-6">
					<div className="number">
						<i className="fa fa-heartbeat"></i>
						<h3 className="white-text"><span className="counter">451</span></h3>
						<span className="white-text">Coronavirus Cases : </span>
						<span className="white-text">5,813,004</span>
					</div>
				</div>

				<div className="col-sm-3 col-xs-6">
					<div className="number">
						<i className="fa fa-ambulance"></i>
						<h3 className="white-text"><span className="counter">12</span></h3>
						<span className="white-text">Deaths : </span>
						<span className="white-text">357,889</span>
					</div>
				</div>

				<div className="col-sm-3 col-xs-6">
					<div className="number">
						<i className="fa fa-trophy"></i>
						<h3 className="white-text"><span className="counter">154</span>K</h3>
						<span className="white-text">Recovered : </span>
						<span className="white-text">2,514,886</span>

					</div>
				</div>
				<div className="col-sm-3 col-xs-6">
					<div className="number">
						<i className="fa fa-file"></i>
						<h3 className="white-text"><span className="counter">45</span></h3>
						<span className="white-text">Unemployment : </span>
						<span className="white-text">195 million job losses</span>
					</div>
				</div>

			</div>

		</div>

	</div>


	<div id="team" className="section md-padding">

		<div className="container">

			<div className="row">

				<div className="section-header text-center">
					<h2 className="title">Flights/Transport</h2>
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive" src="https://public.flourish.studio/uploads/3cb403e1-e4c2-405e-9e48-d8a901d4609a.gif" alt="" />
						</div>
						<div className="team-content">
							<span>In light of the rapidly spreading disease named as COVID-19, the International Civil Aviation Organization (ICAO) actively monitors its economic impacts on civil aviation and regularly publishes updated reports and adjusted forecasts*. </span>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive" src="https://www.icao.int/Newsroom/NewsAndHighlightImages2020/NEWS%20-COM.36.20%20-%20COVID-19%20guiance%20on%20aviation%20safety%20risks/2020-05-06---NEWS---COM.36.20---DOC-10144_481.png" alt="" />
						</div>
						<div className="team-content">
							<span>It has impacted all industries, all sectors and all aspects of our lives with devastating economic and financial losses and significant uncertainties.</span>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive" src="https://asianaviation.com/wp-content/uploads/AAV_Covid_Skin_1920x1080_r1.png" alt="" />
						</div>
						<div className="team-content">
							<span>Mitsubishi Aircraft cutting US operations, staff for SpaceJet programme development. Company will maintain minimal staff to store and maintain test aircraft</span>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>

	<div id="blog" className="section md-padding bg-grey">

		<div className="container">

			<div className="row">

				<div className="section-header text-center">
					<h2 className="title">Recents news</h2>
				</div>

				<div className="col-md-4">
					<div className="blog">
						<div className="blog-img">
							<img className="img-responsive" src="./img/img1.jpg" alt="" />
						</div>
						<div className="blog-content">
							<ul className="blog-meta">
								<li><i className="fa fa-user"></i>Nik Martin</li>
								<li><i className="fa fa-clock-o"></i>31.03.2020</li>
							</ul>
							<h3>Pigeons at risk of starvation over coronavirus empty streets</h3>
							<p>A German animal rights group is warning that pigeons are struggling to find enough food amid the coronavirus lockdown. Empty city centers mean no leftovers for them to feast on and thousands may die.</p>
							<a href="https://www.dw.com/en/pigeons-at-risk-of-starvation-over-coronavirus-empty-streets/a-52965011">Read more</a>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="blog">
						<div className="blog-img">
							<img className="img-responsive" src="./img/img_blog2.jpg" alt="" />
						</div>
						<div className="blog-content">
							<ul className="blog-meta">
								<li><i className="fa fa-user"></i>Amanda Jackson,</li>
								<li><i className="fa fa-clock-o"></i>07.04.2020</li>
							</ul>
							<h3>A zoo has been trying to get two pandas to mate for 10 years. When coronavirus shut the zoo down, the pandas finally did</h3>
							<p>"The successful natural mating process today is extremely exciting for all of us, as the chance of pregnancy via natural mating is higher than by artificial insemination," Michael Boos, executive</p>
							<a href="https://edition.cnn.com/travel/article/pandas-mate-ocean-park-trnd/">Read more</a>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="blog">
						<div className="blog-img">
							<img className="img-responsive"  src="./img/img_blog3.jpg" alt="" />
						</div>
						<div className="blog-content">
							<ul className="blog-meta">
								<li><i className="fa fa-user"></i>Press release</li>
								<li><i className="fa fa-clock-o"></i>27.05.2020</li>
							</ul>
							<h3>ILO: More than one in six young people out of work due to COVID-19</h3>
							<p>The ILO’s latest analysis of the labour market impact of COVID-19 exposes the devastating and disproportionate effect on young workers, and analyses measures being taken to create a safe return to work environment.</p>
							<a href="https://www.ilo.org/global/about-the-ilo/newsroom/news/WCMS_745879/lang--en/index.htm">Read more</a>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>
	
	<div id="portfolio" className="section md-padding bg-grey">

		<div className="container">

			<div className="row">

				<div className="section-header text-center">
					<h2 className="title">Coronavirus set to cause largest ever annual fall in CO2 emissions</h2>
				</div>

				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="https://assets.weforum.org/editor/TGuQWEf3njqE45KNEwBTIG-SEcZIhFLrIWQ0eBx_vwM.gif" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>2018 vs 2020</span>
						<h3>Effect on air pollution</h3>
						<div className="work-link">
							<a href="https://www.weforum.org/agenda/2020/04/coronavirus-covid19-air-pollution-enviroment-nature-lockdown"><i className="fa fa-external-link"></i></a>
							<a className="lightbox" href="https://assets.weforum.org/editor/TGuQWEf3njqE45KNEwBTIG-SEcZIhFLrIWQ0eBx_vwM.gif"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="https://cdn.mos.cms.futurecdn.net/wR5GMcT5osVvtvfN53DhLi-650-80.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>France</span>
						<h3></h3>
						<div className="work-link">
							<a href="https://www.space.com/coronavirus-impacts-emissions-china-night-lights.html"><i className="fa fa-external-link"></i></a>
							<a className="lightbox" href="https://cdn.mos.cms.futurecdn.net/wR5GMcT5osVvtvfN53DhLi-650-80.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="https://cdn.mos.cms.futurecdn.net/YNck994Shu8bQfaj4bY8K9.gif" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Spain</span>
						
						<div className="work-link">
							<a href="https://www.space.com/coronavirus-impacts-emissions-china-night-lights.html"><i className="fa fa-external-link"></i></a>
							<a className="lightbox" href="https://cdn.mos.cms.futurecdn.net/YNck994Shu8bQfaj4bY8K9.gif"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>





	<footer id="footer" className="sm-padding bg-dark">

		<div className="container">

			<div className="row">

				<div className="col-md-12">

					<div className="footer-logo">
						<a href="index.html"><img src="img/virus.png" alt="logo" /></a>
					</div>
					<div className="footer-copyright">
						<p>Epitech Hackathon 2020</p>
					</div>

				</div>

			</div>

		</div>

	</footer>

	<div id="back-to-top"></div>

	<div id="preloader">
		<div className="preloader">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
      </div>
    );
  }
}

export default App;
