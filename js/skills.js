$(document).ready(function(){
	$.getJSON('skills.json',function(data){
		$.each(data,function(key,item){
			$(`#${key}`).append(item);
			console.log(item);
		})
		
	})
	/*****************************************************/
    
	/*****************************************************/
})