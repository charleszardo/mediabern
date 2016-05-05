var feed = new Instafeed({
        get: 'tagged',
        tagName: 'bernie',
        accessToken: '3036055374.1677ed0.22d0ddfa3d564b30983c325885530edc'
    });
feed.run();
// $.ajax({
// 	url: 'https://api.instagram.com/v1/tags/sun?access_token=3036055374.1677ed0.22d0ddfa3d564b30983c325885530edc',
// 	dataType: 'jsonp',
// 	success: function(response) {
// 		console.log(response);
// 	}
// });