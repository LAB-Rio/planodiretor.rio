(function () {
    'use strict'
    console.log("Plano Diretor by LAB.Rio");
    
    var topBar= document.getElementById('fixed-header');

    function parallax(){
      if (window.pageYOffset > 100) {
        topBar.style.top = "0px";
      } else { 
        topBar.style.top = "-200px";
      }
    };

    requestAnimationFrame(parallax);
    window.addEventListener('scroll', function(){
      requestAnimationFrame(parallax);
    }, false);
    
    
    	$(".tab").on("click",function(){
  		  var a = $(this).attr("href");
  		  $(".tabs-content>div.active").removeClass("active");
  		  $(".tabs-content>div"+a).addClass("active");
  		  return false;
	  });
    
}());