var ox = 0;
var oy = 0;
var flag = false;

var canvasObj = document.getElementById('draw');
canvasObj.width = document.body.clientWidth;
canvasObj.height = document.body.clientHeight;

var context = canvasObj.getContext('2d');

canvasObj.addEventListener('touchstart', function(e){
	e.preventDefault();
	flag = true;
	ox = e.touches[0].pageX;
	oy = e.touches[0].pageY;
}, false);

canvasObj.addEventListener('touchmove', function(e){
	if (!flag) {
		return;
	}
	context.clearRect(0, 0, canvasObj.width, canvasObj.height);
	context.strokeStyle = 'blue';
	context.lineWidth = 10;
	context.lineCap = 'square';
	context.beginPath();
	context.moveTo(ox, oy);
	context.lineTo(e.touches[0].pageX, e.touches[0].pageY);
	context.stroke();
	context.closePath();
}, false);

canvasObj.addEventListener('touchend', function(e){
	flag = false;
}, false);