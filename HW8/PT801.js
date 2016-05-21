var ntu= new google.maps.LatLng(25.017918, 121.537798);

var map = new google.maps.Map(
	document.getElementById('mapObj'),{
		zoom: 15,
		center: ntu
	}
);

var marker = new google.maps.Marker({
	position: ntu,
	map: map
});