/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-14 10:50:49
 * @version $Id$
 */ 


$(document).ready(function(){
    $(".ui-out").hide();	
    $(".img_in").click(showimg);
    $(".ui-out").click(function(){
    	$(".ui-out").hide();
	})
});

function showimg(e) {
    $(".ui-out").fadeIn();
    var getting=$(e.target).attr("src");
    $(".img_out").attr("src",getting);
}

