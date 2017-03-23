function myFunction11(){
	document.getElementById("tb1").style.backgroundColor="red";
}

function myFunction12(){
	var show = document.getElementById("tb2");
	var myDate = new Date();    
 	var y = myDate.getFullYear();
 	var m = myDate.getMonth() + 1;  //得到的月份从0开始
 	var d = myDate.getDate();
 	if (m<10) {
 		show.innerHTML = y + "-" + "0" + m + "-" + d;
 	}
 	else
 		show.innerHTML = y + "-" + m + "-" + d;
}