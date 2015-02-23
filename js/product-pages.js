window.addEventListener('load', function(){
	$(".img-block > img").each(function(i){
		$(this).click(function(){
			var bih= $('#bigImageHolder');
			bih.show();
			bih.css('top', window.scrollY+"px");
			$('#bigImage').attr('src',$(this).attr('src'));
		});
	});
	$("#closeImage").click(function(){
		$("#bigImageHolder").hide();
	})
});