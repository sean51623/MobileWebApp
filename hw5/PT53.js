var canvasObj = document.getElementById('photos');
var context = canvasObj.getContext('2d');
var img = new Image();

function drawPhoto(count)
{
	img.src = 'images/'+count+'.jpg';
	img.onload = function(){
		count = (count+1)%6;
		fade = 0;
		fadeIn();
	}
	document.getElementById('desc').innerHTML = '臺大美景之'+ (count + 1) +' - ' + desc[count];
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