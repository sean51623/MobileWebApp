var ox = 0;
var oy = 0;
var flag = false;
var pen = 'red';
var cap = 'round';
var line = 5;
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
	context.moveTo(ox,oy);
	if(!flag)
	{
		context.moveTo(x,y);
		flag = true;
	}
	context.lineTo(x,y);
	context.stroke();
	context.closePath();
	ox = x;
	oy = y;
}, false);
canvasObj.addEventListener('touchend', function(e){
	flag = false;
}, false);

////

document.getElementById('redPen').addEventListener('touchstart',function(e){
	pen = 'red';
},true);
document.getElementById('greenPen').addEventListener('touchstart',function(e){
	pen = 'green';
},true);
document.getElementById('bluePen').addEventListener('touchstart',function(e){
	pen = 'blue';
},true);

////

document.getElementById('line5').addEventListener('touchstart',function(e){
	line = 5;
},true);
document.getElementById('line10').addEventListener('touchstart',function(e){
	line = 10;
},true);
document.getElementById('line30').addEventListener('touchstart',function(e){
	line = 30;
},true);