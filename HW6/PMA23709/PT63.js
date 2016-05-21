var style = 'free';
var x = 0;
var y = 0;
var ox = 0;
var oy = 0;
var flag = false;

var canvasSrc = document.getElementById('draw');
var contextSrc = canvasSrc.getContext('2d');
canvasSrc.width = document.body.clientWidth;
canvasSrc.height = document.body.clientHeight;

var container = canvasSrc.parentNode;

canvasTemp = document.createElement('canvas');
var contextTemp = canvasTemp.getContext('2d');
canvasTemp.id = 'temp';
canvasTemp.width = canvasSrc.width;
canvasTemp.height = canvasSrc.height;

container.appendChild(canvasTemp);


function changeStyle(s)
{
	style = s;
}

document.getElementById('line').addEventListener('touchstart', function(e){
	changeStyle('line');
}, false);
document.getElementById('rect').addEventListener('touchstart', function(e){
	changeStyle('rect');
}, false);
document.getElementById('free').addEventListener('touchstart', function(e){
	changeStyle('free');
}, false);

function draw()
{
	contextSrc.drawImage(canvasTemp, 0, 0);
	contextTemp.clearRect(0, 0, canvasTemp.width, canvasTemp.height);
}

canvasTemp.addEventListener('touchstart', function(e){
	e.preventDefault();
	flag = true;
	ox = e.touches[0].pageX;
	oy = e.touches[0].pageY;
}, false);

canvasTemp.addEventListener('touchend', function(e){
	if (flag)
	{
		flag = false;
		draw();
	}
}, false);

canvasTemp.addEventListener('touchmove', function(e){
	contextTemp.strokeStyle = 'blue';
	contextTemp.lineWidth = 10;
	contextTemp.lineCap = 'square';

	if (style == 'line')
	{
		if (!flag)
		{
			return;
		}
		contextTemp.clearRect(0, 0, canvasTemp.width, canvasTemp.height);
		contextTemp.beginPath();
		contextTemp.moveTo(ox, oy);
		contextTemp.lineTo(e.touches[0].pageX, e.touches[0].pageY);
		contextTemp.stroke();
		contextTemp.closePath();
	}
	else if(style == 'rect')
	{
		if (!flag)
		{
			return;
		}
		x = Math.min(e.touches[0].pageX, ox);
		y = Math.min(e.touches[0].pageY, oy);
		w = Math.abs(e.touches[0].pageX - ox);
		h = Math.abs(e.touches[0].pageY - oy);
		if (!w || !h)
		{
			return;
		}
		contextTemp.clearRect(0, 0, canvasTemp.width, canvasTemp.height);
		contextTemp.strokeRect(x, y, w, h);
	}
	else
	{
		x = e.touches[0].pageX;
		y = e.touches[0].pageY;
		contextTemp.beginPath();
		contextTemp.moveTo(ox, oy);
		if (!flag)
		{
			contextTemp.moveTo(x, y);
			flag = true;
		}
		contextTemp.lineTo(x, y);
		contextTemp.stroke();
		contextTemp.closePath();
		ox = x;
		oy = y;
	}
}, false);