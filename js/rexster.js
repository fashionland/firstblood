
/* rexster.js */

$(document).ready(function(){

  var url='http://search.twitter.com/search.json?callback=?&q=';
  var query;

	$('button').click(function(){
		query=$("#query").val();
		$.getJSON(url+query,function(json){
			$.each(json.results,function(i,tweet){
			   $("#results").append('<p><img src="'+tweet.profile_image_url+'" widt="48" height="48" />'+tweet.text+'</p>');
			});
		});
	});
	
	
});