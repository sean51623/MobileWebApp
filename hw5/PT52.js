var count = 0;
var max = 6;
var desc = ['傅園','總圖書館','醉月湖','椰林大道','傅鐘','校門'];
var canvasObj = document.getElementById('photos');
var context = canvasObj.getContext('2d');
var img = new Image();

var size = 100;

function drawPhoto()
{
	img.src = 'images/' + count + '.jpg';
	img.onload = function()
	{
		count = (count+1) % max;
		scaleSize();
	}
	document.getElementById('desc').innerHTML = '臺大美景之' + (count + 1) + ' - ' + desc[count];
}

function scaleSize()
{
	context.clearRect(0, 0, canvasObj.width, canvasObj.height);
	
	w = canvasObj.width * (size/100);
	h = canvasObj.height * (size/100);
	context.drawImage(img, 0, 0, w, h);
	size -= 5;
	
	if (size == 0)
	{
		size = 100;
		drawPhoto();
	}
	else
	{
		setTimeout('scaleSize()', 200);
	}
}

drawPhoto();