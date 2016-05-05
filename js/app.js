$(document).ready(function(){
	var loadButton = $("#load-more");
	var feed = new Instafeed({
	        get: 'tagged',
	        tagName: 'mediabern',
					resolution: 'low_resolution',
					limit: 600,
	        accessToken: '3036055374.1677ed0.22d0ddfa3d564b30983c325885530edc',
					after: function() {
		    			// disable button if no more results to load
		    			if (!this.hasNext()) {
		      			loadButton.setAttribute('disabled', 'disabled');
		    			}
		  		}
	    });

	// bind the load more button
	loadButton.click(function() {
	  feed.next();
	});

	feed.run();
})

