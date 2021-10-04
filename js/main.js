$(document).ready(function(){
    //nav
    $("header button").on("click", function () {
        $("nav").toggle("fast");
    });
    //nav 끝
   
    //nav 스크롤 되게하기
    $("nav ul li a").on('click', function () {
        //버튼을 클릭했을때
        var secPos = $(this).attr('href');
        //클릭한 링크(화면 이미지)를 함수에 저장
        var sec = $(secPos).offset().top;
        $('html,body').stop().animate({
            scrollTop: sec + 'px'
        }, 700, function () {
            $(secPos).children("div").fadeIn("slow");
        });
        $("aside>ul>li>a").removeClass('on');
        $(this).addClass('on');
        //화면을 이미지 top에 맞춤을 함수에 저장
        //$('p#test').text(sec);
        /*$('html,body').stop().animate({scrollTop:sec},700,
        $(secPos).children("div").fadeIn("slow"));*/
        //화면을 스크롤 해서 이미지로 이동함
        return false;
    });
    /*  
      $("section").on("mousewheel",function(event,delta){    
    		
    		//마우스 휠을 올렸을때	
              if (delta > 0) {  
    			//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
                 var prev = $(this).prev().offset().top;
    			 //문서 전체를 prev에 저장된 위치로 이동
    			 $("html,body").stop().animate({"scrollTop":prev},1000,"easeInQuad");
    			 
    		//마우스 휠을 내렸을때	 
              }else if (delta < 0) {  
    			//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
    			 var next = $(this).next().offset().top;
    			 //문서 전체를 next에 저장된 위치로 이동
    			 $("html,body").stop().animate({"scrollTop":next},1000,"easeInQuad");                                         
              }
              
         });
      
      */
    
    $('.bxslider').bxSlider({
         mode: 'fade',
        captions: true,
        controls:'true'
   
   });
    
    $("#imgModal").hide();
    
    $("#GD article a img").click(function(){
        $("#imgModal").show();
        var pic = $(this).attr('data-url');
        $("#imgModal img").eq(0).attr("src",pic);
        return false;
    });
    
     $("#imgModal img").eq(1).click(function(){
        $("#imgModal").hide();
    });
    
    
   
    
    
    
    
    
    
   
});