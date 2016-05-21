var taipeiCity = new google.maps.LatLng(25.023589, 121.541748);

var map = new google.maps.Map(
	document.getElementById('mapObj'),{
		zoom:13,
		center: taipeiCity
	}
);

var nightStyle = [{
	stylers: [
		{hue: '#0000FF'},
		{saturation: 0},
		{lightness: -50},
		{visibility: 'on'}
	]
}];

map.mapTypes.set('night', new google.maps.StylesMapType(nightStyle));
map.setMapTypeId('night');