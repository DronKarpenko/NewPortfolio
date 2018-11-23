$(document).ready(function() {

	$(".container_mixitup").mixItUp();

	$(".portfolio_nav li").click(function() {
		$(".portfolio_nav li").removeClass("active");
		$(this).addClass("active");
	});

	// animated
	
	$(".intro_title").animated("fadeInDown", "fadeOutUp");
	$(".intro_descr, .section_header").animated("fadeInUp", "fadeOutDown");
	$(".sumthing_about").animated("fadeInLeft");
	$(".personal_info").animated("fadeInRight");
	$(".my_photo").animated("flipInY");
	$(".my_job .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".my_studies .resume_item").animated("fadeInRight", "fadeOutDown");
	
	// end animated
	
	$(".toggle_mnu").click(function() {
  		$(".sandwich").toggleClass("active");
	});

	$(".menu li a").click(function() {
  		$(".menu").fadeOut(700);
  		$(".sandwich").toggleClass("active");
	});

	$(".popup").magnificPopup({type:'image'});
	$(".popup_content").magnificPopup();

	$("header nav.menu a").mPageScroll2id();

	$(".toggle_mnu").click(function() {
		if ($(".menu").is(":visible")) {
			$(".menu").fadeOut(600);
			$(".menu li a").removeClass("fadeInUp animated");
		} else {
  			$(".menu").fadeIn(600);
  			$(".menu li a").addClass("fadeInUp animated");
	    };
    });

// PROGRESS BAR

$('.html5').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 100,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.css3').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 100,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.mobile').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 90,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.sass').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 85,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.bootstrap').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 80,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.wordpress').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 70,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.github').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 75,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.js').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 50,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.gulp').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 45,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.jquery').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 50,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

// ------------------------TOP

$(window).scroll(function(){
	if ($(this).scrollTop() > $(this).height()) {
		$('.top').addClass('active');
	} else{
		$('.top').removeClass('active');
	}
});
$('.top').click(function(){
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

});



$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});