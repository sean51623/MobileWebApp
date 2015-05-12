window.addEventListener('load', function(){
	setInterval(function(){
		var currentTime = new Date();
		var h = currentTime.getHours() % 12;
		var m = currentTime.getMinutes();
		var s = currentTime.getSeconds();
		
		var year = currentTime.getFullYear();
		var month = currentTime.getMonth();
		var date = currentTime.getDate();
		var day = currentTime.getDay();
		var week = ["日","一","二","三","四","五","六"];
		
		var yearStr = year + "年";
		var monthStr = "-" + (month+1) + "月-";
		var dateStr = date+ "日";
		var dayStr = "星期" + week[day];
		
		h = h*30 + (m/12) * 6;
		m = m*6;
		s = s*6;
		
		context.clearRect(0,0,myCanvas.width, myCanvas.height);
		context.drawImage(baseImage, 0, 80);
		context.save();
		context.translate(160,240);
		//context.restore();
		
		context.save();
		context.rotate(h*Math.PI/180);
		context.drawImage(shortImage,-160,-170);
		context.restore();
		
		context.save();
		context.rotate(m*Math.PI/180);
		context.drawImage(longImage,-160,-170);
		context.restore();
		
		context.save();
		context.rotate(s*Math.PI/180);
		context.drawImage(secImage,-160,-170);
		context.restore();
		
		//calendar
		context.beginPath();
		context.moveTo(-80,-240);
		context.lineTo(-80,-160);
		context.lineTo(60,-160);
		context.lineTo(80,-180);
		context.lineTo(80,-240);
		context.lineTo(-80,-240);
		context.fillStyle="#FFFFFF";
		context.fill();
		context.closePath();
		
		context.beginPath();
		context.moveTo(80,-180);
		context.lineTo(60,-180);
		context.lineTo(60,-160);
		context.stroke();
		
		context.font = "bold 15px Times New Roman";
		context.fillStyle = '#000000';
		context.fillText(yearStr,-60,-225);
		
		context.font = "bold 25px Times New Roman";
		context.fillStyle = '#0000FF';
		context.fillText(monthStr,-65,-200);
		
		context.font = "bold 40px Times New Roman";
		context.fillStyle = '#00AAAA';
		context.fillText(dateStr,0,-200);
		
		context.font = "bold 20px Times New Roman";
		context.fillStyle = '#000000';
		context.fillText(dayStr,-30,-170);
		
		context.strokeRect(0,-230,78,40);
		
		context.restore();
	}, 1000);
	
	var myCanvas = document.getElementById("clock");
	var context = myCanvas.getContext("2d");
	
	//images
	var baseImage = new Image();
	baseImage.src = "images/base.png";
	var shortImage = new Image();
	shortImage.src = "images/short.png";
	var longImage = new Image();
	longImage.src = "images/long.png";
	var secImage = new Image();
	secImage.src = "images/sec.png";
	
}, true);