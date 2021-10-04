$(document).ready(function(){
	var nav=$('nav');
	var mainNav=nav.find('a');
	var sub=$('.sub');
function navHover(){
		 mainNav.on({
		'focus mouseenter':function(){sub.stop().slideDown();},
		'blur mouseleave':function(){sub.stop().slideUp();}
	});
}
function navAcc(){
		nav.children('ul').children('li').children('a').click(function(){
			sub.hide();
				$(this).next().show();
		});
}

nav.find('h2').click(function(){
		$(this).siblings('ul').toggle();										 
});

 if($(window).width()>=768){
	navHover();
 }
else{	
	navAcc();
}
$(window).risize(function(){
	if($(this).width()>=768){
		sub.hide();
		navHover();
	}
else{
	mainNav.off();
	sub.height('auto');
	navAcc();
}
});			


});
