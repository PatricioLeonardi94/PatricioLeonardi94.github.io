// Check off Specific Todos by click
// hay que hacerlo con on y a algo que este previamente en el html 
// agregas lo que queres que se agrege
$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); //lo ponemos adentro para que no lo haga instantaneamente
	});
	event.stopPropagation(); //deja solo el click ahi y no va a elementos superiores
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing text
		var text = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + text + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});