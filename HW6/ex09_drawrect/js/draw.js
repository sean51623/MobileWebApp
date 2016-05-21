var ox = 0;
var oy = 0;
var flag = false;

var canvasSrc = document.getElementById('draw');
canvasSrc.width = document.body.clientWidth;
canvasSrc.height = document.body.clientHeight;
var contextSrc = canvasSrc.getContext('2d');

var container = canvasSrc.parentNode;

canvasTemp = document.createElement('canvas');
canvasTemp.id = 'temp';
canvasTemp.width = canvasSrc.width;
canvasTemp.height = canvasSrc.height;
container.appendChild(canvasTemp);
var contextTemp = canvasTemp.getContext('2d');

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
	if (!flag)
	{
		return;
	}
	
	//x = e.touches[0].pageX;
	//y = e.touches[0].pageY;
	x = Math.min(e.touches[0].pageX, ox);
	y = Math.min(e.touches[0].pageY, oy);
	w = Math.abs(e.touches[0].pageX - ox);
	h = Math.abs(e.touches[0].pageY - oy);

	contextTemp.clearRect(0, 0, canvasTemp.width, canvasTemp.height);

	if (!w || !h)
	{
		return;
	}

	contextTemp.strokeRect(x, y, w, h);
}, false);
