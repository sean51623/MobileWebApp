setInterval(function(){
	var currentDate = new Date();
	var h = "0"+currentDate.getHours();
	var m = "0"+currentDate.getMinutes();
	var s = "0"+currentDate.getSeconds();
	h = h.substr(h.length-2,2);
	m = m.substr(m.length-2,2);
	s = s.substr(s.length-2,2);
	
	var timeStr = h+":"+m+":"+s;
	document.getElementById("clock1").innerHTML = timeStr;
},1000);

window.addEventListener('load', function(){
	setInterval(function() {
		var currentTime = new Date();
		var h = "0"+currentTime.getHours();
		var m = "0"+currentTime.getMinutes();
		var s = "0"+currentTime.getSeconds();
		
		h = h.substr(h.length-2,2);
		m = m.substr(m.length-2,2);
		s = s.substr(s.length-2,2);
		var timeStr = h+"c"+m+"c"+s;
		var imgStr = "";
		
		for (var i=0; i<timeStr.length; i++) {
			imgStr += '<img src="xapp/images/' + timeStr.charAt(i) + '.png">';
		}
		document.getElementById("clock2").innerHTML = imgStr;
	}, 1000);
}, true);