	$(document).ready(function() {
 $('#product .item').addClass('grid-group-item');
    $('#list').click(function(event){event.preventDefault();
  $('#product .item').addClass('list-group-item'); 
  $('#product').removeClass('flex-row');
  $('#product').addClass('d-flex flex-column');});
  
    $('#grid').click(function(event){event.preventDefault();
  $('#product .item').removeClass('list-group-item');
  $('#product').removeClass('d-flex flex-column');
  $('#productt .item').addClass('grid-group-item');
  $('#product').addClass('flex-row');});
});

 $(document).ready(function(){
    
    $('#advancedsearch').click( function(e) {        
        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('#advancedbox').toggle();   
		$('#menubox').hide(); 
    });
    
    $('#advancedbox').click( function(e) {        
        e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too    
		
    });
    
    $('body').click( function() {       
        $('#advancedbox').hide();        
    });
	
	    $('#menubar').click( function(e) {        
        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('#menubox').toggle(); 
$('#advancedbox').hide();		
    });
    
    $('#menubox').click( function(e) {        
        e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too        
    });
    
    $('body').click( function() {       
        $('#menubox').hide();        
    });
    
});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

function printpage() {
  window.print();
}


$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});

$("#skipdiv").click(function() {
    $('html, body').animate({
        scrollTop: $("#skipdivbox").offset().top
    }, 800);
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

    // popovers initialization - on hover
    $('[data-toggle="popover-hover"]').popover({
      html: true,
      trigger: 'hover',
      placement: 'bottom',
      content: function () { return '<img src="' + $(this).data('img') + '" />'; }
    });

    // popovers initialization - on click
    $('[data-toggle="popover-click"]').popover({
      html: true,
      trigger: 'click',
      placement: 'bottom',
      content: function () { return '<img src="' + $(this).data('img') + '" />'; }
    });
	
window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
    //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      // "F12" key
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
	  // "P" key
      if (e.ctrlKey && e.keyCode == 80) {
        disabledEvent(e);
      }
	  // "U" key + macOS
      if (e.keyCode == 85 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
	  // "P" key + macOS
      if (e.keyCode == 80 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
	  // "F12" key + macOS
      if (e.keyCode == 123 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };
  $(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });

});