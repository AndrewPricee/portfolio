// Change style of navbar on scroll
window.onscroll = function () {
    myFunction();
};

function myFunction() {
    var navbar = document.getElementsByClassName("navbar");
    if (document.documentElement.clientWidth > 767) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $(navbar).css('background-color', '#FCFCFC');
            $(navbar).css('box-shadow', '0 0.25px #FFFFFF');
            $(".navbar a").css('color', '#666');
            $(".navbar a").css('transition-duration', '2s');
            $(navbar).css('transition-duration', '0.3s');
        } else {
            $(navbar).css('background-color', 'transparent');
            $(".navbar a").css('color', '#fff');
            $(".navbar a").css('transition-duration', '2s');
            $(navbar).css('box-shadow', 'none');
            $(navbar).css('transition-duration', '0.3s');
        }
    }
}

//progress bars

var lang = {
    "html": "90%",
    "css": "80%",
    "javascript": "70%",
    "angular": "65%",
    "java": "60%",
    "php": "30%",
    "C": "70%",
    "mysql": "70%",
    "xaml": "90%",
    "wpf": "90%",
    "api": "85%",
    "android" : "60%"
  };
  
  var multiply = 4;
  
  $.each( lang, function( language, percent) {
  
    var delay = 700;
    
    setTimeout(function() {
      $('#'+language+'-percent').html(percent);
    },delay*multiply);
    
    multiply++;
  
  });

  //scrolling

  //Smooth scroll - Used W3schools scroll

$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
$('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 650, function(){
                window.location.hash = hash;
            });
        }
    });
});
