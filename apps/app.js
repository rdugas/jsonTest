$(document).ready(function() {

    
    $("#search-term").submit(function(event) {
    	
    	console.log("button hit");
    	console.log($('#query').val());

    	event.preventDefault();
    	var searchTerm = $('#query').val();
    	var searchString = 'https://www.omdbapi.com/?s=' + searchTerm + '&r=json';
    	console.log(searchString);
    
    	$.getJSON(('http://www.omdbapi.com/?s=' + searchTerm + '&r=json'), function(data) {
        console.log("get json called");
        console.log(data.Search);
        showResults(data.Search);
    	});
		
	});

    function showResults(results) {
    	var html = "";
        $.each(results, function(index, value) {
            html += '<p>' +  value.Title + '</p>';
            console.log(value.Title);
        });
        $('#search-results').html(html);

    }
});
