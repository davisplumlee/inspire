function ImageService (){
	this.getImage =  function(callWhenDone){
				// ^^^^^^^ How do you use this?
		$.get('https://www.splashbase.co/api/v1/images/random', function(res){
			console.log('Image Data:', res)
			callWhenDone(res)
		})
	}
}



