$(document).ready(function(e) {
    $('#backToTop').click(function(e) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
	$('#benefitsTitle').click(function(e) {
		$('#benefits').show();
		$('#benefitsTitle').css('cursor', 'auto');
		$('#benefitsTitle').css('background-color', '#3976CF').css('color', '#FFF');
		$('#downArrow').hide();
    });
	$('#menuButton').click(function(e){
		if($('#menu').is(':hidden')){
			$('#menu').show();
			$('#menuButton').attr('src', '/images/exit-button-w.png');
		}else{
			$('#menu').hide();
			$('#menuButton').attr("src","/images/menu.png");
		}
	});
	$('.menu__icon').click(function(){
		if($('.menu_dropdown').is(':hidden')){
			$('.menu_dropdown').show();
			$('.menu__icon').css("background-image","url('/images/exit-button-w.png')");
		}else{
			$('.menu_dropdown').hide();
			$('.menu__icon').css("background-image","url('/images/menu.png')");
		}
	});
	$('.marker').click(function(e){
		var idNum = Number($(this).attr('id').substr(-1,1));
		var shown = Number($('.active').attr('id').substr(-1,1));
		if (idNum < shown){
			$('.slider-area:visible').animate({"left":"2000px"},2000, function(){
				$('.slider-area:visible').hide();
				$('#slide-'+idNum).css("left","-2000px").show().animate({"left":"0"},200);
				$('.slider-arrow-2b').css("opacity","1");
				$('.marker'+idNum).toggleClass('active');
				$('.marker'+shown).toggleClass('active');
			});
		}else if(idNum > shown){
			$('.slider-area:visible').animate({"left":"-2000px"},200, function(){
				$('.slider-area:visible').hide();
				$('#slide-'+idNum).css("left","2000px").show().animate({"left":"0"},200);
				$('.slider-arrow-1b').css("opacity","1");
				$('.marker'+idNum).toggleClass('active');
				$('.marker'+shown).toggleClass('active');
			});
		}
		if(idNum==6)
			$('.slider-arrow-2b').css("opacity","0.5");
		if(idNum==1)
			$('.slider-arrow-2a').css("opacity","0.5");
	})
	$('#arrowRight').click(function(e){
		var currentSlide = $('.slider:visible');
		var next = Number(currentSlide.get(0).id.substr(-1, 1))+1;
		if (next < 5){
			currentSlide.animate({'left':"-"+$(window).width()+"px"}, 400, 'swing', function(){currentSlide.hide()});
			var nextSlide = $('#slider'+next);
			nextSlide.css('left', $(window).width()+nextSlide.width()/2+"px");
			nextSlide.show();
			nextSlide.animate({'left': '50%'});
		}
	});
	$('#arrowLeft').click(function(e){
		var currentSlide = $('.slider:visible');
		var prev = Number(currentSlide.get(0).id.substr(-1, 1))-1;
		if (prev > 0){
			currentSlide.animate({'left':$(window).width()+currentSlide.width()/2+"px"}, 400, 'swing', function(){currentSlide.hide()});
			var prevSlide = $('#slider'+prev);
			 
			prevSlide.show();
			prevSlide.animate({'left': '50%'});
		}
	});
	$('.slider-arrow-2b').click(function(e) {
        var slide=$('.slider-area:visible').attr('id');
		var slidenum=slide.split("-");
		var next=(slidenum[1]*1)+1;
		if(next>0&&next<7){
			$('.slider-area:visible').animate({"left":"-2000px"},200, function(){
				$('.slider-area:visible').hide();
				$('#slide-'+next).css("left","2000px").show().animate({"left":"0"},200);
				$('.slider-arrow-1b').css("opacity","1");
				$('.marker'+next).toggleClass('active');
				$('.marker'+(next-1)).toggleClass('active');
			});
			if(next==6){
				$('.slider-arrow-2b').css("opacity","0.5");
			}
		}
    });
	$('.slider-arrow-1b').click(function(e) {
        var slide=$('.slider-area:visible').attr('id');
		var slidenum=slide.split("-");
		var next=(slidenum[1]*1)-1;
		if(next>0&&next<7){
			$('.slider-area:visible').animate({"left":"2000px"},200, function(){
				$('.slider-area:visible').hide();
				$('#slide-'+next).css("left","-2000px").show().animate({"left":"0"},200);
				$('.slider-arrow-2b').css("opacity","1");
				$('.marker'+next).toggleClass('active');
				$('.marker'+(next+1)).toggleClass('active');
			});
			if(next==1){
				$('.slider-arrow-1b').css("opacity","0.5");
			}
		}
    });
	$('#vidButton').click(function(e) {
		var vs = $('#video-slider');
		var stp = $('#see-the-power');
		if(vs.hasClass('hidden')) {
	      vs.animate({height:411}).removeClass('hidden');
	      stp.animate({opacity: 0});
	      $(this).text("Close the Video");
	    } else { 
	      vs.animate({height:0}).addClass('hidden');
	      stp.animate({opacity: 1});
	      $(this).text('Watch the Video');
	      document.getElementById('ooh-vid').pause();
	    }
    });
	$('.team-photos .member').click(function(e) {
        var image=$(this).attr('i');
		var bio=$(this).attr('b');
		var name=$(this).attr('n');
		var title=$(this).attr('t');
		$('.go-dark').fadeIn(function(){
			$('.bio-window').fadeIn();
		});
		$('.bio-image img').attr('src','/images/'+image);
		$('.bio-name').html(name);
		$('.bio-title').html(title);
		$('#'+bio).show();
    });
	$('.close-bio-window').click(function(e) {
        $('.bio-window').fadeOut(function(){
			$('.go-dark').fadeOut(function(){		
				$('.bios').hide();
				$('.bio-image img').attr('src','');
		$('.bio-name').html();
		$('.bio-title').html();
			});
		});
    });
    if (document.getElementById('productsVideo'))
	    document.getElementById('productsVideo').play();
	//    document.getElementById('productsVideo').play();
	if(document.getElementById('ooh-vid')){
		$('.close-video-window').click(function(){
			$('.video-window').hide();
			$('.go-dark').hide();
		    document.getElementById('ooh-vid').pause();
		});
		$('.watch-video').click(function(){
			$('.go-dark').show();
			$('.video-window').show();
		});
	}

});