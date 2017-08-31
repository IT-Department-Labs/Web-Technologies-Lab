function hasGetUserMedia() {
  	return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

function errorCallback(e) {
    video.src = 'shape_of_you.webm';	
}

function checkPermission() {
	var errorCallback = function(e) {
	    console.log('Reeeejected!', e);
	  };

	if (hasGetUserMedia()) {
		var video = document.querySelector('video');

		if (navigator.getUserMedia) {
			navigator.getUserMedia({audio: true, video: true}, 
			function(stream) {
		    	video.src = window.URL.createObjectURL(stream);
		  }, function(err) {
	         console.log("The following error occurred: " + err.name);
			  video.src = 'shape_of_you.webm'; // fallback.
	      });
		}
		 
		else {
		  video.src = 'shape_of_you.webm'; // fallback.
		}	
	} 
	else {
		alert('getUserMedia() is not supported in your browser');
		video.src = 'shape_of_you.webm';
	}
}