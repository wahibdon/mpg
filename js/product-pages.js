window.addEventListener('load', function(){
	$(".img-block > img").each(function(i){
		$(this).click(function(){
			var bih= $('#bigImageHolder');
			var bi = $("#bigImage");
			bih.show();
			bih.css('top', window.scrollY+"px");
			bi.attr('src',$(this).attr('src'));
			bih.css('margin-left', "-"+bih.width()/2+"px");
		});
	});
	$("#closeImage").click(function(){
		$("#bigImageHolder").hide();
	})
});
