var vObj = document.getElementById('vd');

document.getElementById('vplay').addEventListener("click", function() {
	vObj.play();
},true);

document.getElementById('vpause').addEventListener("click", function() {
	vObj.pause();
},true);

document.getElementById('vback').addEventListener("click", function() {
	vObj.currentTime=0;
},true);

document.getElementById('vrepeat').addEventListener("click", function() {
	vObj.vloop = !vObj.vloop;
	document.getElementById('vrepeat').src = './images/repeat' + (vObj.vloop ? '_on' : '') + '.png';
},true);

vObj.addEventListener('ended',function(){
	if (vObj.vloop=true)
	{
		vObj.currentTime=0;
		vObj.play();
	}
},true);

document.getElementById('audioName').addEventListener('change', function(){
	var url = document.getElementById('audioName').value;
	vObj.src = './audios/' + url;
}, true);