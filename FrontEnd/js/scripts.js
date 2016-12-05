var coords = []

$(document).ready(function() {
	//Collects and stores image click
	$('#RPI').click(function(e) {
		var offset = $(this).offset();
		coords[0] = e.pageX - offset.left
		coords[1] = e.pageY - offset.top
	})

	// Allows for error checking before submission
	$("#adminForm").submit(function(event) {
		event.preventDefault();

		var $form = $(this)
		var	name_value = $form.find('input[id="training"]').val()
		var formData = new FormData($("#adminForm")[0]);
		if (name_value){
			name_value = name_value.split('\\').pop().split('.')[0]
		}
		if (!name_value){
			alert('Please upload a file before hitting submit')
		} 
		else{
			url = $form.attr('action');
		}
		if (coords.length == 0) {
			alert('Please click the map position before submitting files')
		}
		else {
			var posting = $.ajax({
				url: url,
				type: 'POST',
				name: name_value,
				data: formData,
				processData: false,
				contentType: false
			});

			posting.done(function(data) {
				console.log(data)
			});
		}
 })
})