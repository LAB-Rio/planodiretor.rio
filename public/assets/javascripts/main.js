(function () {
    'use strict'
    
    $('a[rel="external"]').on('click',function(e){
        e.preventDefault();
        window.open($(this).attr('href'));
    });
    
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
  
  $(document).foundation();
  
  
  
  // bind change event to select
      $('#select').on('change', function () {
          var url = $(this).val(); // get selected value
          if (url) { // require a URL
              window.location = url; // redirect
          }
          return false;
      });
    });
  
}());