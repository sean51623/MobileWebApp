var count = 0;
var max = 6;
var canvasObj = document.getElementById('photos');
var context = canvasObj.getContext('2d');
var img = new Image();
var desc = ['傅園', '總圖書館', '醉月湖', '椰林大道', '傅鐘', '校門'];

function drawPhoto()
{
	img.src = 'images/'+count+'.jpg';
	img.onload = function(){
		count = (count+1)%max;
		fade = 0;
		fadeIn();
	}
	document.getElementById('desc').innerHTML = (count + 1) +' - ' + desc[count];
}
function fadeIn()
{
	context.globalAlpha = fade / 20;
	if (fade < 21)
	{
		setTimeout('fadeIn()', 50);
		++fade;
	}
	context.drawImage(img, 0, 0);
}

var timerID = setInterval("drawPhoto()", 4000);
drawPhoto();

document.getElementById('first').addEventListener("touchstart",function(){
	count = 0;
	drawPhoto();
	clearInterval(timerID);
	timerID = setInterval("drawPhoto()", 4000);
},true);

document.getElementById('last').addEventListener("touchstart",function(){
	count = 5;
	drawPhoto();
	clearInterval(timerID);
	timerID = setInterval("drawPhoto()", 4000);
},true);

document.getElementById('next').addEventListener("touchstart",function(){
	drawPhoto();
	clearInterval(timerID);
	timerID = setInterval("drawPhoto()", 4000);
},true);

document.getElementById('previous').addEventListener("touchstart",function(){
	count = count-2;
	if (count<0) {
		count = count + max;
	}
	drawPhoto();
	clearInterval(timerID);
	timerID = setInterval("drawPhoto()", 4000);
},true);