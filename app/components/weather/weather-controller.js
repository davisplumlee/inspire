(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		var f = (1.8 * (weather.main.temp - 273) + 32).toFixed(1)
		var c = ((f - 32) / 1.8).toFixed(1)
		var far = true;

		var template = `<div class="col-xs-6 left">
		<p>${weather.name.toUpperCase()}</p>
		</div>
		<div class="col-xs-6 right">
		<h3><span>${f}&deg F</span></h3>
		<p>${weather.weather[0].description.toUpperCase()}</p>
		</div>
		`


		$('#weather').append(template);

		$('.right h3').on('click', function(){
			if (far) {
				$('span').replaceWith(`<span>${c}&deg C</span>`);
				far = false;
			} else {
				$('span').replaceWith(`<span>${f}&deg F</span>`);
				far = true;
			}
		})
	})
	
	
	
	
	
}())