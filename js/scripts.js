	$(document).ready(function(){


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
			function updateTable(thingToLoopThrough){
				var newHTML = "<tr><td>" + thingToLoopThrough.Symbol + "</td>";
				newHTML += "<td>" + thingToLoopThrough.Name + "</td>";
				newHTML += "<td>" + thingToLoopThrough.LastTradePriceOnly + "</td>";
				newHTML += "<td class='daily-change'>" + thingToLoopThrough.Change + "</td>";
				newHTML += "<td>" + thingToLoopThrough.DaysHigh + "</td></tr>";
				return newHTML;
			}
		function addSpecialClasses(){
			$(".daily-change").each(function(){
				var changeValue = $(this).html();
				if(changeValue.indexOf("+") > -1){
					$(this).addClass("green");
				}else if(changeValue.indexOf("-") > -1){
					$(this).addClass("red");
				}

			});
		}
	});















