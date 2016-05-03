# AJAX Yahoo Finance API

### Use of Ajax and the Yahoo Finance API to display Stock info.

## Summary

#### Aloows user to select stocks serperated by commas. The app will then use the yahoo finance api to pull info using ajax methodolgy. Uses CSS, HTML, AJAX, native javascript, jQuery and Footables for the table formats and layouts.

### Author: Tristan Lobaugh 
+ Github - https://github.com/TristanLobaugh
+ Homepage - http://tristanlobaugh.com

## Demo

[Live Demo](http://tristanlobaugh.com/ajax_apis_intro)

## Screenshots

### Main page:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/ajax_apis_intro/master/img/screen_shot.png)


##Code Examples

### Code uses the jQuery getJSON method to access the yahoo finance api and places the information into the page via the "newHTML" method.
```
$("#ticker-search").submit(function(){
		var ticker = $("#symbol").val();
		var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20("' + ticker + '")%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json';

			$.getJSON(url, function(yahooResult){
				var newHTML;
				console.log(yahooResult);
				var stockInfo = yahooResult.query.results.quote;
				if(yahooResult.query.count > 1){
					for(var i = 0; i < yahooResult.query.count; i++){
						newHTML += updateTable(stockInfo[i]);
					}
				}else {
					newHTML = updateTable(stockInfo);
				}
				$("#ticker-body").html(newHTML);
				$(function () {
					$('.footable').footable();
				});
				addSpecialClasses();
			});
		event.preventDefault();
	});
```

## To Do
Add better instructions