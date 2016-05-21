// 影片原始大小
var srcWidth = 640;
var srcHeight = 360;

// video 元件
var vObj = document.getElementById('vd');

// 是否重覆播放影片
vObj.vloop = false;

// 啟動時
window.onload = function()
{			
	videoResize(window.screen.availWidth, window.screen.availHeight);
}

// 旋轉時
window.addEventListener('orientationchange', function(){
	videoResize(window.screen.availWidth, window.screen.availHeight);
}, true);

// 改變尺寸函數
function videoResize(vwidth, vheight)
{
	vwidth -= 32;
	vheight = Math.floor(vheight * (vwidth / srcWidth));
	document.getElementById('vd').style.width = vwidth+'px';
	document.getElementById('vd').style.height = vheight+'px';
}

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

// 全螢幕
document.getElementById('vfs').addEventListener('click', function(){
	vObj.webkitEnterFullscreen();
}, true);

// 重覆播放
document.getElementById('vrepeat').addEventListener('click', function(){
	// 將重覆狀況交換 true <=> false
	vObj.vloop = !vObj.vloop;
	document.getElementById('vrepeat').src = '../images/repeat' + (vObj.vloop ? '_on' : '') + '.png';
}, true);

// 更換影片
document.getElementById('videoName').addEventListener('change', function(){
	var url = document.getElementById('videoName').value;
	vObj.src = '../videos/' + url;
}, true);
