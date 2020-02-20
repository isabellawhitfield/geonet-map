console.log('geonet');

$(document).ready(function(){
	// accessing key from json file
	var myKey = JSON.parse(apiKey);
	console.log(myKey[0]);
	myKey = myKey[0].key;
	console.log(myKey);


 

	$.ajax({
	  url : 'https://api.geonet.org.nz/intensity?type=reported',
		type :'GET',
		dataType :'json',
		success:function(data){
			console.log(data);
			var markers =[];
			var i;

			for (i=0; i<data.features.length;i++){
				var obj = {};

				obj.lat = JSON.parse(data.features[0].geometry.coordinates[1]);
				obj.lng = JSON.parse(data.features[0].geometry.coordinates[0]);

			}
		initMap(markers);
		}, error:function(){
			console.log('error');
		}
	});

	var script = document.createElement('script');
script.src='https://maps.googleapis.com/maps/api/js?key=' + myKey ;
document.getElementsByTagName('body')[0].appendChild(script);


           
			
			
			
			
			function initMap(allMarkers) {

				var marker = []
				var map = new google.maps.Map(
					document.getElementById('map'), {zoom: 10, center: wellington});
				var i;
				var myIcon = {

				url : 'http://maps.google.com/mapfiles/kml/shapes/sailing.png',
        scaledSize: new google.maps.Size(50, 50)
      };


	for (i =0; i<allMarkers.length; i++) {

	  var latLng = {lat:allMarkers[i].lat , lng:allMarkers[i].lng }
		  // console.log(latLng);
					var marker = new google.maps.Marker({
						position: latLng,
						map: map
						// icon : myIcon
					});
                // The location of Uluru
                // var uluru = {lat: -25.344, lng: 131.036};
                // // The map, centered at Uluru
                // var map = new google.maps.Map(
                //     document.getElementById('map'), {zoom: 4, center: uluru});
                // // The marker, positioned at Uluru
                // var marker = new google.maps.Marker({position: uluru, map: map});
              
            

        




		} 
		}
}); //document ready

