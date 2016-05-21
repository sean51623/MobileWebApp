var president= new google.maps.LatLng(25.039941, 121.512812); //25.017918, 121.537798

var map = new google.maps.Map(
	document.getElementById('mapObj'),{
		zoom: 18,
		center: president,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		maxZoom: 20,
		minZoom: 16
	}
);

var marker = new google.maps.Marker({
	position: president,
	map: map
});