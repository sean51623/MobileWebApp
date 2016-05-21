var taipeiCity = new google.maps.LatLng(25.023589, 121.541748);
var currentTime = new Date();
var h = currentTime.getHours();

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

var dayStyle = [{
	stylers: [
		{hue: '#FFFF00'},
		{saturation: 0},
		{lightness: 50},
		{visibility: 'on'}
	]
}];

map.mapTypes.set('night', new google.maps.StyledMapType(nightStyle));
map.mapTypes.set('day', new google.maps.StyledMapType(dayStyle));

if (h>=18 || h<6)
{
	map.setMapTypeId('night');
}
else
{
	map.setMapTypeId('day');
}