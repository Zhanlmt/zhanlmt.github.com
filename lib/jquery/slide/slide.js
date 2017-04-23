/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-20 16:28:05
 * @version $Id$
 */

$(document).ready(function(){
	init();
	$("#ui-top-item1").click(function(){
		white();
		$("#ui-top-item1").css('background-color','lightgray');
		$(".ui-bottom").text("First");
	});
	$("#ui-top-item2").click(function(){
		white();
		$("#ui-top-item2").css('background-color','lightgray');
		$(".ui-bottom").text("Second");
	});
	$("#ui-top-item3").click(function(){
		white();
		$("#ui-top-item3").css('background-color','lightgray');
		$(".ui-bottom").text("Third");
	});
});

function init(){
	$("#ui-top-item1").css('background-color','lightgray');
	$(".ui-bottom").text("First");
}

function white(){
	$(".ui-top-item").css('background-color','white')
}