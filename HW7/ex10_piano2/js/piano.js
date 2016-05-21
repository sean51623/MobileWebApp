var audio = [];
var files = ['C3','C3u','D3','D3u','E3','F3','F3u','G3','G3u','A3','A3u','B3','C4'];
for (var i = 0; i < files.length; i++)
{
	audio[files[i]] = new Audio('../piano/' + files[i] + '.mp3');
}

var piano = document.querySelectorAll('.sound');
for (var i = 0; i < piano.length; i++)
{
	piano[i].addEventListener('click', function()
	{
		try
		{
			audio[this.id].currentTime = 0;
		}
		catch(e)
		{
		}
		audio[this.id].play();
	}, true);
}