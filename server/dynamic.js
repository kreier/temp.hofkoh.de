google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Daten aus der data.js einfügen
	document.getElementById("tempea").firstChild.nodeValue = temperatur.slice(0,14);
	document.getElementById("tempeb").firstChild.nodeValue = temperatur.slice(15);
	document.getElementById("uptime").firstChild.nodeValue = uptime_now;
	document.getElementById("wlan").firstChild.nodeValue = wlan;	
	
  // Datenarray data erstellen und mit Daten füllen
	var data = new google.visualization.DataTable();
	data.addColumn('string','Uhrzeit');
	data.addColumn('number', 'heute');
	data.addColumn('number', 'gestern');
	data.addRows(144);

  // heute laden
		  
	var jetzt = new Date(); 
	var dh = String(jetzt.getFullYear()); 
	if (parseInt(jetzt.getMonth()+1,10) < 10) {
		dh = dh + "0" + String(jetzt.getMonth()+1) 
	} else {
		dh = dh + String(jetzt.getMonth()+1) 
	}
	if (parseInt(jetzt.getDate(),10) < 10) {
		dh = dh + "0" + String(jetzt.getDate());
	} else {
		dh = dh + String(jetzt.getDate());
	}		
	var datei = "data/" + dh + ".log"; //Dateiname ist YYYYMMDD.log
	$('#heute').load(datei); // pre mit Messdaten von heute füllen
	
	// fill data with values
	var hdata = $.ajax({
		url: datei,
		async: false
	}).responseText;
	
	var h2data = hdata.replace(/\n/g, " ");
	var harray = h2data.split(" ");
	var messende = (harray.length + 1) / 3 - 3 //- 6
	for (var i = 0; i < messende ; ++i)
		data.setValue(i, 1, parseFloat(harray[i * 3 + 6])); // Temperatur heute
	
		
  // Datum auf gestern setzen
				
	jetzt.setDate(jetzt.getDate() - 1);
	var dh = String(jetzt.getFullYear()); 
	if (parseInt(jetzt.getMonth()+1,10) < 10) {
		dh = dh + "0" + String(jetzt.getMonth()+1) 
	} else {
		dh = dh + String(jetzt.getMonth()+1) 
	}
	if (parseInt(jetzt.getDate(),10) < 10) {
		dh = dh + "0" + String(jetzt.getDate());
	} else {
		dh = dh + String(jetzt.getDate());
	}		
	datei = "data/" + dh + ".log"; // jetzt entspricht Dateinamen gestern
	$('#gestern').load(datei); // pre mit Messdaten von gestern füllen
	
	// fill data with values
	var gdata = $.ajax({
		url: datei,
		success: function ( gdata ) {
		},
		async: false
	}).responseText;
		    var g2data = gdata.replace(/\n/g, " ");
	
		    var garray = g2data.split(" ");	
		    for (var i = 0; i < 144 ; ++i) {
				data.setValue(i, 0, String(garray[i * 3 + 5])); // Uhrzeit
				data.setValue(i, 2, parseFloat(garray[i * 3 + 6])); // Temperatur gestern	
			}			


  var options = {
    title: 'Temperaturverlauf in Hofkoh',
    hAxis: {title: 'Uhrzeit',  titleTextStyle: {color: '#333'}},
    vAxis: {title: 'Temperature in Celsius'}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

/*

  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2013',  1000,      400],
    ['2014',  1170,      460],
    ['2015',  660,       1120],
    ['2016',  1030,      540]
  ]);


*/