/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-20 16:30:29
 * @version $Id$
 */


$(document).ready(function(){
	var count=3;
	var i;

	$(".ui-item_add").click(function(){
		$(".another").append("<div class='ui-item'><div class='ui-item-no'></div><div class='ui-item-text'></div><div class='ui-item-delete'>Delete</div></div>");
		count++;
		for(i=0; i<count; i++){
			$(".ui-item-no").eq(i).text(i+1);
		}
	});

	$('body').on("click",".ui-item-delete",function(event){
		$(".ui-item:last").remove();
		count--;
		for(i=0; i<count; i++){
			$(".ui-item-no").eq(i).text(i+1);
		}
	});

});

