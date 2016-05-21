var ox = 0;
var oy = 0;
var flag = false;
var canvasObj = document.getElementById('draw');

canvasObj.width = document.body.clientWidth;
canvasObj.height = document.body.clientHeight;

canvasObj.addEventListener('touchmove', function(e){
	var x = e.touches[0].pageX;
	var y = e.touches[0].pageY;
	var context = canvasObj.getContext('2d');
	
	context.lineWidth = (e.touches.length * 10);
	
	e.preventDefault();
	context.strokeStyle = 'red';
	context.lineCap = 'round';
	context.beginPath();
	context.moveTo(ox, oy);
	if (!flag)
	{
		context.moveTo(x, y);
		flag = true;
	}
	context.lineTo(x, y);
	context.stroke();
	context.closePath();
	ox = x;
	oy = y;
}, true);
canvasObj.addEventListener('touchend', function(e){
	flag = false;
}, true);