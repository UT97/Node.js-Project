function addMovie()
{
	$.ajax({
		url:"/movies/add",
		type:'post',
		dataType:'json',
		data: $("#addMovie").serialize(),
		success: function(response){
			console.log("response",response);
			if(response.isSuccess)
			{
				window.location.href="index.html";
			}
		},
		error: function(response){
			console.log("Error",response);
		}
	});
}