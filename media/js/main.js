$(function(){
  
	//nav
	  $("header>a>img").on("click",function(){
          
		$("nav").slideToggle("fast");
	  });
	

	 //nav 끝

	
    if(isMobile()){
        $("#infoImg").css({"height":"87%"});
    }

   
   
   









//modal


	$("#modal").hide();

    $("#tab td a").click(function(){

        $("#infoImg").show();
        
        return false;
	});
	
/*
	$("#guide>a>img").click(function(){
		
        $("#guide").hide();
		
		 return false;
    });
*/

    var currentPosition = parseInt($("#guide").css("top")); 
    $(window).scroll(function() { 
        if(!isMobile()){
            var position = $(window).scrollTop(); 
            var totalPosition = 0;
            if(currentPosition + position >= 800){
                totalPosition = 800;
            }else if(currentPosition + position >= 400){
                totalPosition = position + currentPosition - 150;
            }else{
                totalPosition = 195;
            }
            $("#guide").stop().animate({"top":totalPosition+"px"},1000); 
        }

    });



});
function ClickThis(package, mediaName){
    $("#guide").css({"display":"block"});
    $("#infoImg").hide();
    $("#infoImg").fadeIn();
    if(isMobile()){
        $("#infoImg").css({"background":"url(./images/" + package + "/" + mediaName + ".png)","background-repeat":"no-repeat","background-size":"93%"});  
    }else{
        $("#infoImg").css({"background":"url(./images/" + package + "/" + mediaName + ".png)","background-repeat":"no-repeat","background-size":"100%"});    
    }
}
function btnClose(){
    if(isMobile()){
        $("#guide").css({"display":"none"});    
    }
    
}
function isMobile(){
	var UserAgent = navigator.userAgent;

	if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
	{
		return true;
	}else{
		return false;
	}
}