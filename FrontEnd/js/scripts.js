// Empty JS for your own code to be here
// 
$(document).ready(function (){
	$('#RPI').click(function(e){
		console.log(e)
		var offset = $(this).offset();
    alert(e.pageX - offset.left);
    alert(e.pageY - offset.top);
	})
})