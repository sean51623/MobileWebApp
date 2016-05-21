// audio 元件
var vObj = document.getElementById('vd');

// 播放完結時
vObj.addEventListener('ended', function(){
	// 如果要重播影片
	if (vObj.vloop == true)
	{
		vObj.currentTime = 0;
		vObj.play();
	}
}, true);

// 播放鈕事件
document.getElementById('vplay').addEventListener('click', function(){
	vObj.play();
}, true);

// 暫停鈕事件
document.getElementById('vpause').addEventListener('click', function(){
	vObj.pause();
}, true);

// 倒退鈕事件
document.getElementById('vback').addEventListener('click', function(){
	vObj.currentTime = 0;
}, true);

// 重覆播放
document.getElementById('vrepeat').addEventListener('click', function(){
	// 將重覆狀況交換 true <=> false
	vObj.vloop = !vObj.vloop;
	document.getElementById('vrepeat').src = '../images/repeat' + (vObj.vloop ? '_on' : '') + '.png';
}, true);

// 更換音樂
document.getElementById('audioName').addEventListener('change', function(){
	var url = document.getElementById('audioName').value;
	vObj.src = '../audios/' + url;
}, true);
