(function () {
    'use strict'
    
    
    console.log("Plano Diretor by LAB.Rio");
    
    var PlanoDiretor = {};
    
    PlanoDiretor.components = PlanoDiretor.components || {};
    PlanoDiretor.ui = PlanoDiretor.ui || {};
    
    
      
    PlanoDiretor.ui.tabs = function() {
      $(".tab_item").not(":first").hide();
      $(".wrapper .tab").click(function() {
      	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
      	$(".tab_item").hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass("active");
      
    };
    
    $('a[rel="external"]').on('click',function(e){
        e.preventDefault();
        window.open($(this).attr('href'));
    });
    
}());

jQuery( document ).ready( function() {
  
  $(".tab_item").not(":first").hide();
      $(".wrapper .tab").click(function() {
    	$(".tab_item").hide().eq($(this).index()).fadeIn()
  });

  
  $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

  
} );

