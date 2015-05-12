var count = 0;
var max = 6;
var fade = 0;
var desc = ['傅園','總圖書館','醉月湖','椰林大道','傅鐘','校門'];
var canvasObj = document.getElementById('photos');
var context = canvasObj.getContext('2d');
var img = new Image();

function drawPhoto()
{
	img.src = 'images/' + count + '.jpg';
	img.onload = function()
	{
		count = (count+1) % max; //每隔setInterval的時間就會強制換下一張圖
		fade = 0;
		fadeIn();
	}
	document.getElementById('desc').innerHTML = '臺大美景之' + (count + 1) + ' - ' + desc[count];
}

function fadeIn()
{
	context.globalAlpha = fade / 20;
	if (fade < 21)
	{
		setTimeout('fadeIn()',50); //淡入的連續程度 (值越大淡入感覺越不連續)
		++fade;
	}
	context.drawImage(img,0,0);
}

setInterval('drawPhoto()',4000);
drawPhoto();