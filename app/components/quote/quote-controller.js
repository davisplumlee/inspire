(function (){
	
	var quoteService = new QuoteService();

	quoteService.getQuote(function(quote){
		console.log(quote.quote)

		var template = `<div class="quote-card">
		<p>${quote.quote}</p>
		<p id="author">${quote.author}</p>
		</div>`
		
		$('#quote').append(template);
		$('#author').hide()

	}) 

	$('#quote').mouseenter(function(){
		$('.quote-card').css({'height': `70px`})
		$('#author').show().fadeIn();
	})

	$('#quote').mouseleave(function(){
		$('.quote-card').css({'height': `30px`})
		$('#author').hide("slow").fadeOut();
	})
	
}())
