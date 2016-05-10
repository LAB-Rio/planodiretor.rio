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
	
	
	
	var media = $('#id_media');
  if (media.length) {
      var mediaDefaultValue = $('.file span.value').text();
	    var mediaCharLimit = 20;

	    $('.file .bt-value').click(function(){
	        media.click();
	    });

	    media.on('change', function() {
	        var value = this.value.replace("C:\\fakepath\\", "");
	        var newValue;
	        var valueExt;
	        var charLimit;

	        if (value) {
	            newValue = value;
	            valueExt = value.split('.').reverse()[0];
	            if (newValue.length > mediaCharLimit) {
	                charLimit = mediaCharLimit - valueExt.length;

	                // truncate chars.
	                newValue = $.trim(value).substring(0, charLimit) + '…';

	                // if file name has extension, add it to newValue.
	                if (valueExt.length) {
	                    newValue += valueExt;
	                }
	            }
	        }
	        else {
        newValue = mediaDefaultValue;
      }
    $(this).parent().find('span.value').text(newValue);
  });
}

  
} );

