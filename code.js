window.onload = function () {
	budala(10)
	color()
}

function budala(cc) {
	for(var k = 0; k<cc; k++){
		var tr = document.createElement("tr")
		for(var j = 0; j<cc; j++){
			var td = document.createElement("td")
			tr.appendChild(td)
			console.log("tr")
			td.innerHTML = random_color(1000)
		}
		document.getElementById("table").appendChild(tr)
	}
}

function random_color(n) {
	return	Math.floor(Math.random()*n)
}

var stop1 = 0
function stop() {
	if(stop1 == 0){
		stop1 += 1
		clearInterval(interval)
		document.getElementById("stop").innerHTML = "Nastavi"
	} else {
		stop1 -= 1
		color()
		document.getElementById("stop").innerHTML = "Stop!"
	}
}


var interval;
 
function color() {
	var x = document.getElementsByTagName("td")
	interval = setInterval(function() {
		for(var i = 0; i<x.length; i++){
			if(document.getElementById("checkbox_2").checked){
			//	x[i].style.width = "4%"
			//	x[i].style.height = "4%"
			//	budala(25)
				x[i].style.fontSize = "14pt"
				x[i].style.backgroundColor = "rgb( " + random_color(256) + ", " + random_color(256) + ", " + random_color(256) + " )"
			} else {
			//	budala(50)
			//	x[i].style.width = "2%"
			//	x[i].style.height = "2%"
				x[i].style.fontSize = "24pt"
				x[i].style.color = "rgb( " + random_color(256) + ", " + random_color(256) + ", " + random_color(256) + " )"
				x[i].style.backgroundColor = "#fff"
			}
		x[i].innerHTML=random_color(1000)
		}
		br_manji_veći(x)
	}, 400)

}

function mode(checked){
	checked == true ? dark() : light()
}

function dark() {
	document.body.style.backgroundColor = "#000"
	for(var i = 0; i<document.getElementsByTagName("label").length; i++){
		document.getElementsByTagName("label")[i].style.color = "white"
	}
}

function light() {
	document.body.style.backgroundColor = "#fff"
	for(var i = 0; i<document.getElementsByTagName("label").length; i++){
		document.getElementsByTagName("label")[i].style.color = "black"
	}
}

var br_manje = 0
var br_veće = 0

function br_manji_veći(x) {
	for(var i = 0; i<x.length; i++){
		var num = parseInt(x[i].innerHTML)
		if(num < 500){
			br_manje += 1
		} else {
			br_veće += 1
		}
	}
	document.getElementById("br_manji_od_500").innerHTML = "N < 500: " + br_manje + " // "
	document.getElementById("br_veći_od_500").innerHTML = "  N > 500: " + br_veće
}