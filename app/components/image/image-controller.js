(function(){
	
	imageService = new ImageService()

	imageService.getImage(function(img){
		$('#body').css({'background-image': `url(${img.url})`});
		$('#body').css({'background-size': `cover`});
	})
	
}())
