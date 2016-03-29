var topBar      = document.getElementById('fixed-header');

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