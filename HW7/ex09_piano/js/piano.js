var piano = document.querySelectorAll('.sound');

for (var i = 0; i < piano.length; i++)
{
	piano[i].addEventListener('click', function()
	{
		(new Audio('../piano/' + this.id + '.mp3')).play();
	}, true);
}