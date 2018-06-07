//alert("Linkeado!")

$(".add_tweet").val();

$(".new_tweet").on("click", ".like_heart", function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).toggleClass("like_heart--liked");
		if ($(".like_heart").hasClass("like_heart--liked")){
				
				var liked = $(".likes_number").text();
				console.log(liked);
				liked = parseInt(liked);
				//console.log(liked += 1);
				//llegar al segundo hermano
				$(this).siblings(".likes_number").text(liked =+ 1);
			
			} else {

				$(this).siblings(".likes_number").text("0");
			}; 

});

$(".new_tweet").on("click", ".remove_tweet", function(event){
	console.log("funciona?");
	event.preventDefault();
	event.stopPropagation();
	$(this).parent().remove();
 });

$(".tweet_send").on("submit", function(event){
	event.preventDefault();
	var tweet = $("#tweet").val();
	$("#tweet").val();

	$(".new_tweet").append(
	`
	<div class="tweets">
		<img src="assets/img/Steph.jpg" alt="Imagen de Perfil" class="profile_pic">
		
		<div class="like_heart">
			<i class="fas fa-heart"></i>
		</div>
		
		<div class="remove_tweet">
			<i class="fas fa-times"></i>
		</div>
		
				<p class="likes likes_number"><strong>0</strong></p>
		<p class="likes"><strong>Likes</strong></p>

		<div class="texto">
			<p>`+ tweet +`</p>
		</div>

	</div>
	`
	)

	$("#tweet").val(" ");
}); 



	
