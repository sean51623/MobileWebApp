var ox = 0;
var oy = 0;
var flag = false;
var pen = 'blue';
var line = 10;
var cap = 'round';
var canvasObj = document.getElementById('draw');
canvasObj.width = document.body.clientWidth;
canvasObj.height = document.body.clientHeight;
canvasObj.addEventListener('touchmove', function(e){
	e.preventDefault();
	var x = e.touches[0].pageX;
	var y = e.touches[0].pageY;
	var context = canvasObj.getContext('2d');
	context.strokeStyle = pen;
	context.lineWidth = line;
	context.lineCap = cap;
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
}, false);
canvasObj.addEventListener('touchend', function(e){
	flag = false;
}, false);

document.getElementById('delete').addEventListener('touchstart', function(){
	if (confirm('是否確定清除全畫面？'))
	{
		context = canvasObj.getContext('2d');
		context.clearRect(0,0, canvasObj.width, canvasObj.height);
	}
}, true);