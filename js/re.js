$(document).ready(function(){
	var header=$('header');
$(window).scroll(function(){
	
	var sch=$(this).scrollTop();
	
	var headerh=header.height();
	
	if(sch>=headerh){
		header.addClass('scroll');
	}
	else{
		header.removeClass('scroll');
	}
	
	
	});
	header.find('button').click(function(){
		$(this).next().stop().slideToggle();
	});
	
	
	
});
