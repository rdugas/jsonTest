$(document).ready(function() {

    // $.get("http://www.omdbapi.com/?s=Star%20Wars&r=xml", function(data){
    // 	console.log(data);
    // }, "xml")

    

    $("#chooseButton").click(function(event) {
    	
    	console.log("button hit");
    	console.log($('#query').val());

    	event.preventDefault();
    	var searchTerm = $('#query').val();
    
    	$.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data) {
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
